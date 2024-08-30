import { verificarCampo } from "./Validaciones.js";
import {scrollFunction} from "./scrollFunction.js";

let navItems = document.querySelectorAll('.nav-link')
let skillItem = document.querySelectorAll('.skill-item')


//Oculta menu colapsable cuando seleccionamos algun item en la version mobile

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => {
      i.classList.remove('active')
    })
    item.classList.add('active')
    document.querySelector('#navbarSupportedContent').classList.remove("show")
  })
})

//Colorea las skill al hacer hover y las vuelve a escala de grices al hacer mouse out si es que la patanlla tiene un ancho minimo de 1024px

skillItem.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.filter = 'grayscale(0)';
    item.style.border = '1px solid #6BD1FF'
    item.style.boxShadow = '0px 0px 30px #6BD1FF'
  })
  item.addEventListener('mouseout', () => {
    document.body.clientWidth > 1024 ? item.style.filter = 'grayscale(100%)' : 'grayscale(0%)'
    item.style.border = 'none'
    item.style.boxShadow = '2px 2px 10px black'
  })
})

// When the user scrolls down 500px from the top of the document, show the buttons
window.onscroll = function () { scrollFunction() };

// When the user clicks on the button, scroll to the top of the document
document.getElementById("myBtn").addEventListener('click', ()=>{
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})


// VALIDACION DE FORMULARIO
document.querySelectorAll("[required]").forEach((campo) => {
  campo.addEventListener("blur", () => verificarCampo(campo))
  campo.addEventListener("invalid", evento => evento.preventDefault)
});







