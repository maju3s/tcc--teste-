import React from 'react'
import "./LandingPage.css"
import Titulo from './Titulo'
import {BsArrowRightCircle} from 'react-icons/bs';


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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod error veniam in voluptatem magni quisquam</p>
                <a href="#" class="home-btn">Login 
                {/*<BsArrowRightCircle/>*/}
                </a>
            </div>
            <div class="home-img">
                <img src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-slice%402x.e3eec8a8.png&w=1920&q=75" alt="cereal-aleatório"/>
            </div>

  </section>
    </main>
    </>
)
}

export default LandingPage