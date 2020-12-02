class Index extends HTMLElement {
      constructor () {
       super();
      }
      
      connectedCallback () {

            this.innerHTML = `
        <ul>
          <lh>Índice</lh>
      <a href="../index.html"><li>Sobre Mi</li></a>
      <a href="../pages/resume.html"><li>Formación y Experiencia laboral  </li></a>
      
  <a href="../pages/skills.html"><li>Habilidades</li></a>
  </ul>
        `;
      }
    }
    
    window.customElements.define('mi-indice', Index)