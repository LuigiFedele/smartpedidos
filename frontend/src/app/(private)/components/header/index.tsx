"use client"

import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import logoImg from '../../../../../public/logo.svg'
import { LogOutIcon } from "lucide-react";
import { deleteCookie } from "cookies-next/client"
import { useRouter } from "next/navigation";
import { toast } from 'sonner'

export function Header() {
  const router = useRouter()

  async function  handleLogout() {
    deleteCookie('token')
    toast.success("Logout feito com sucesso!")
    router.replace('/sign-in')
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <Image 
            alt="Logo SmartPedidos" 
            src={logoImg}
            width={300}
            height={100}
            priority={true}
            quality={100}
          />
        </Link>

        <nav>
          <Link href="/category" className={styles.text}>
            Categorias
          </Link>
          <Link href="/product" className={styles.text}>
            Produtos
          </Link>
          <form action={handleLogout}>
            <button type="submit" >
              <LogOutIcon size={24}  color ="#fff"/>
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}