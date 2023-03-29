import { useState } from 'react'
import LandingPage from ".//componentes/LandingPage"
import Footer from './/componentes/Footer'
import './App.css'
import Team from './componentes/Team'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LandingPage />
    <Team />
   
 
    </>
  )
}

export default App
