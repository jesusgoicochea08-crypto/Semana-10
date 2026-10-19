function Nav(props) {

    console.log(props);

  return (
    <nav className="nav" aria-label="Navegación principal">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#articulos">Artículos</a></li>
        <li><a href="#tecnologia">Tecnología</a></li>
        <li><a href="#contacto">Contacto</a></li>
    </nav>
  )
}

export default Nav