import logo from "../../../img/logo-default.png"
import style from "./styled.scss"

export function Header() {
  return (
    <div>
      <header className={style.header}>
        <img src={logo} alt="" />
        <nav className={style.nav}>
          <ul className={style.ul}>
            <a href="">Home</a>
            <a href="">Sobre Nós</a>
            <a href="">Cusos</a>
            <a href="">Nossas Escolas</a>
            <a href="">Contato</a>
            <a className={style.a} id="button" href="#">ABRA SUA CÓDIGO KID</a>
          </ul>
        </nav>



      </header>
    </div>
  )
}
