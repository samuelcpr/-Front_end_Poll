import img1 from "../../img/logo-default.png"
import styled from "./Header.module.css"

const menu = document.querySelector("nav")

function activeScoll(){
	menu.classList.toggle("ativo", scrollY > 150);
}

window.addEventListener("scroll", activeScoll)

export function Header(props) {
	return (
		<header className={styled.header}>
			<div className={styled.containerBody}>
			<iframe controls autoplay
			className="playerBox"
			frameborder="0"
			allowfullscreen="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			width="640" height="360"
			src="https://www.youtube.com/embed/OdewlZaQG_k??autoplay=1&&modestbranding=1&controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=mbYTP_YTP_1660053361514&origin=https%3A%2F%2Fwww.codigokid.com.br&allowfullscreen=true&wmode=transparent&iv_load_policy=3&html5=1&widgetid=1"
		></iframe>
		<div className={styled.divEvi}>
			<p>O seu duturo começa hoje</p>
			<h1>Aprenda se diventindo<br></br>
			    e realize seus sonhos!
			</h1>
			<p>Somos um núcleo tecnlógico de aprendizado inovador para crianças, adolescentes e jovens</p>
    <div>
			<img src="" alt="" />
			<a>AGENDAR AULA EXPERIMENTAL</a>
		</div>
		</div>
		</div>
				<nav className={styled.nav}>
				<img src={img1} alt=""/>
					<ul className={styled.ulmenu}>
						<li>
						<div className={styled.item1}>
            <button className={styled.item1A}>Home</button>
            <div className={styled.dropdowncontent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
  </div>
</div>
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
					</ul>
					<a className={styled.a}>Área do Aluno</a>
				</nav>
		</header>
	)
}
