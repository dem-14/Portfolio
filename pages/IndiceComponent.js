class IndiceComponent extends HTMLElement {
      constructor () {
       super();
      }
      
      connectedCallback () {

            this.innerHTML = `
        <ul>
          <lh>Índice</lh>
      <a href="./paginaPrincipal.html"><li>Datos de contacto</li></a>
      <a href="./paginaPrincipal.html"><li>Objetivo Profesional</li></a>
      <a href="./pagina2.html"><li>Formación </li></a>
      <a href="./pagina2.html"><li>Experiencia laboral</li></a>
  <a href="./pagina3.html"><li>Tecnologias</li></a>
  <a href="./pagina3.html"><li>Idiomas</li></a>
  <a href="./pagina3.html"><li>Competencias</li></a>
  <a href="./pagina3.html"><li>Otros datos de interes</li></a>
  </ul>
        `;
      }
    }
    
    window.customElements.define('mi-indice', IndiceComponent)