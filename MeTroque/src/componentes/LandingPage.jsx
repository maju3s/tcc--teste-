import React from 'react'
import "./LandingPage.css"
import Titulo from './Titulo'



function LandingPage(){
    
    //parte da nav quando testar responsividade
//const menu = document.querySelector('.menu');
//const NavMenu = document.querySelector('.nav-menu');

//menu.addEventListener ('click', () => {
   // menu.classList.toggle('ativo');
    //NavMenu.classList.toggle('ativo');})




return (
    <>
    <header>
        <nav class="navigation">
            <a href="#" class="logo">M<span>e</span>T<span>roque</span>.</a>
            <ul class="nav-menu">
                <li class="nav-item"><a href="#">Home</a></li>
                <li class="nav-item"><a href="#">About</a></li>
                <li class="nav-item"><a href="#">Menu</a></li>
                <a href="#" class="home-btn">Login 
                {/*<BsArrowRightCircle/>*/}</a>
                <i class='bx bx-search'></i>
            </ul>
            <div class="menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </header>
    <main>
        <section class="home">
            <div class="home-text">
                <h4 class="text-h4">
                <Titulo/>
                </h4>
                <h1 class="text-h1">Seu sistema de troca de alimentos</h1>
                <p>Nutricionista formada pela Unisalesiano Lins, com experiência na área da saúde em mais de 15 anos, atuando como Enfermeira na Atenção Básica a Saúde e Mestranda no Universidade "Júlio de Mesquita Filho" Botucatu.</p>
               
            </div>
            <div class="home-img">
                <img src="/juliana.png" alt="Juliana"/>
            </div>

  </section>
    </main>
    </>
)
}

export default LandingPage