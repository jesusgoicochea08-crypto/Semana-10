import { useState } from 'react'
import './App.css'
import Header from './componets/Header'
import Nav from './componets/Nav'
import Footer from './componets/Footer'
import Main from './componets/Main'

function App() {
  const [count, setCount] = useState(0)
  const menus = [
    { nombre: "inicio" },
    { nombre: "Nosotros" },
    { nombre: "Contactos" },
    { nombre: "Referencias" },
  ]

  return (
    
    <>
      <Header />
      <Nav menú={menus} />
      <Main />      
      <Footer />
    </>
  )
}

export default App
