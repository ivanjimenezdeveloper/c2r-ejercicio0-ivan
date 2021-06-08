function App() {
  const titular = "titular de la noticia Prueba";
  const cuerpoNoticia = (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        numquam, iusto omnis minima corrupti est officiis natus nam, adipisci
        commodi quo autem magnam sequi magni odio soluta temporibus velit quas!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sequi,
        dolorum autem alias commodi molestiae facere quibusdam beatae nulla
        error, dignissimos, libero vitae ratione porro. Delectus dolorem ad non
        esse.
      </p>
    </>
  );
  const noticias = [
    <li>Noticias de deporte</li>,
    <li>Noticias de ocio</li>,
    <li>Noticias de política</li>,
    <li>Noticias de espectáculos</li>,
  ];
  const otrasCosas = ["Nosequé", "Nosecuánto", "Talycual"];
  const copyrightBool = true;

  return (
    <div className="container">
      <header class="cabecera text-white row align-items-center">
        <h1 class="col m-0">Título</h1>
        <nav class="col text-right">
          <ul class="links-navegacion list-inline m-0">
            <li class="list-inline-item">hola</li>
            <li class="list-inline-item">adiós</li>
            <li class="list-inline-item">ciao</li>
          </ul>
        </nav>
      </header>
      <div class="contenedor-principal row">
        <main class="principal col-12 col-sm-7 col-md-8 py-4">
          <h2>{titular}</h2>
          {cuerpoNoticia}
        </main>
        <aside class="sidebar col-12 col-sm-5 col-md-4 py-4">
          <section class="listado">
            <h3>Categorías</h3>
            <ul class="list-unstyled">{noticias.map((noticia) => noticia)}</ul>
          </section>
          <section class="listado">
            <h3>Otras cosas</h3>
            <ul class="list-unstyled">
              {otrasCosas.map((cosa) => (
                <li>{cosa}</li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
      <footer class="pie text-white row align-items-center">
        <p class="col text-center">
          {copyrightBool &&
            "Texto del footer - Ningún derecho reservado, copia lo que quieras"}
        </p>
      </footer>
    </div>
  );
}

export default App;
