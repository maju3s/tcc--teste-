import { useState } from 'react'
import LandingPage from ".//componentes/LandingPage"
import Footer from './/componentes/Footer'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LandingPage />
    <Footer />
    </>
  )
}

export default App
