import styles from './page.module.scss';
import logoImg from '../../../../public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { api } from '@/services/api' 
import { redirect } from 'next/navigation';

export default function Register() {
 

  async function handleRegister(formData: FormData) {
    "use server"

    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    if (name === "" || email === "" || password  === "") {
      return;
    }

    try {
      await api.post("/users", {
        name,
        email,
        password
      })
      
    } catch (error) {
      console.log(error)
      return
    }

    redirect('/sign-in')
    console.log(name, email, password);
  }

  return(
    <div className={styles.mainContainer}>
      <div className={styles.loginContainer}>
        <Image
          src={logoImg}
          alt="SmartPedidos"
        />

        <section className={styles.login}>
          <h1 className={styles.title}>Cadastre-se</h1>
          <form action={handleRegister}>
            <input 
              type="text"
              required
              name="name"
              placeholder="Digite seu nome..."
              className={styles.input}
            />
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

          <Link href="/sign-in" className={styles.text}>
            Já possui uma conta? Faça login
          </Link>
        </section>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={logoImg}
          alt="SmartPedidos"
          width={300}
          height={300}
        />

      </div>
      
    </div>
  );
}