import img1 from "../../img/logo-default.png"
import styled from "./Header.module.css"

export function Header(props) {
	return (
		<header className={styled.header}>
			<div className={styled.container}>
				<img src={img1} alt=""/>
			</div>
			<div className={styled.containerMenu}>
				<nav>
					<ul className={styled.menu}>
						<li>
						<a>Home</a>
						</li>
						<li>
						<a>Sobre Nós</a>
						</li>
						<li>
						<a>Cursos</a>
						</li>
						<li>
						<a>Contato</a>
						</li>
						<li>
						<a>Blog</a>
						</li>
						<button>Área do Aluno</button>
					</ul>
				</nav>
			</div>

		</header>
	)
}
