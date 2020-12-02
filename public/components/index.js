class Index extends HTMLElement {
      constructor () {
       super();
      }
      
      connectedCallback () {

            this.innerHTML = `
        <ul>
          <lh>Índice</lh>
      <a href="../index.html"><li>Sobre Mi</li></a>
      <a href="../pages/resume.html"><li>Formación </li></a>
      <a href="../pages/resume.html"><li>Experiencia laboral</li></a>
  <a href="../pages/skills.html"><li>Tecnologias</li></a>
  <a href="../pages/skills.html"><li>Idiomas</li></a>
  <a href="../pages/skills.html"><li>Competencias</li></a>
  <a href="../pages/skills.html"><li>Otros datos de interes</li></a>
  </ul>
        `;
      }
    }
    
    window.customElements.define('mi-indice', Index)