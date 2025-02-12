import styles from './page.module.scss';
import logoImg from '../../../../public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { api } from '@/services/api';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default function SignIn() {

  async function handleLogin(formData: FormData) {
    "use server"

    const email = formData.get('email');
    const password = formData.get('password');

    if (email === "" || password  === "") {
      return;
    }

    try {
      const response = await api.post("/session", {
        email,
        password
      })

      if (!response.data.token) {
        return;
      }

      console.log(response.data);

      const expressTime = 60 * 60 * 24 * 30 * 1000
      const cookieStore = await cookies();

      cookieStore.set("token", response.data.token, {
        maxAge: expressTime,
        path: "/",
        httpOnly: false,
        secure: process.env.NODE_ENV === "production"
      })

    } catch (error) {
      console.log(error)
      return
    }

    redirect('/')
  }

  return(
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={logoImg}
          alt="SmartPedidos"
          width={300}
          height={300}
        />

      </div>
      <div className={styles.loginContainer}>
        <Image
          src={logoImg}
          width={300}
          height={300}
          alt="SmartPedidos"
        />

        <section className={styles.login}>
          <h1 className={styles.title}>Acesse sua conta</h1>
          <form action={handleLogin}>
            <input 
              type="email"
              required
              name="email"
              placeholder="Digite seu email..."
              className={styles.input}
            />
            <input 
              type="password"
              required
              name="password"
              placeholder="***********"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>Acessar</button>
          </form>

          <Link href="/register" className={styles.text}>
            Não possui uma conta? Cadastre-se
          </Link>
        </section>
      </div>
    </div>
  );
}