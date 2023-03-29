import { useState } from 'react'
import LandingPage from ".//componentes/LandingPage"
import Footer from './/componentes/Footer'
import './App.css'
import Team from './componentes/Team'
import Portifolio from './componentes/Portifolio'




function App() {

  return (
    <>
    <LandingPage />
    <Team />
    <Portifolio />
   <Footer />
 
    </>
  )
}

export default App;