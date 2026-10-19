function Main() {
  return (
    <main className="contenedor contenido" id="articulos">

        <section className="articulos">
            <article className="tarjeta">
                <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"
                    alt="Persona trabajando con una computadora"
                />
                <div className="texto">
                    <span className="categoria">Educación digital</span>
                    <h2>La tecnología en la educación</h2>
                    <p>
                        La tecnología permite aprender de nuevas maneras,
                        acceder a información y desarrollar habilidades
                        digitales que nos ayudan en la vida cotidiana.
                    </p>
                    <a className="boton" href="#tecnologia">Leer más</a>
                </div>
            </article>

            <article className="tarjeta" id="tecnologia">
                <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80"
                    alt="Componentes electrónicos de un dispositivo"
                />
                <div className="texto">
                    <span className="categoria">Innovación</span>
                    <h2>¿Por qué aprender programación?</h2>
                    <p>
                        Programar nos permite resolver problemas,
                        desarrollar páginas web y crear aplicaciones
                        mediante instrucciones que entiende una computadora.
                    </p>
                    <a className="boton" href="#contacto">Conocer más</a>
                </div>
            </article>
        </section>

        <aside className="aside">
            <h2>📚 Sabías que...</h2>
            <p>
                HTML permite organizar el contenido de una página web
                mediante etiquetas que describen su significado.
            </p>

            <hr />

            <h3>Temas destacados</h3>
            <ul>
                <li><a href="#articulos">Educación digital</a></li>
                <li><a href="#tecnologia">Programación</a></li>
                <li><a href="#contacto">Desarrollo web</a></li>
            </ul>

            <div className="mensaje">
                <h3>¡Sigue aprendiendo!</h3>
                <p>Cada día es una oportunidad para descubrir algo nuevo.</p>
            </div>
        </aside>

    </main>

  )
}

export default Main