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

// Get the buttons:


let topButton = document.getElementById("myBtn");
let socialSharing = document.getElementById('social-sharing-float');



// When the user scrolls down 500px from the top of the document, show the buttons
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topButton.style.display = "flex";
    if (document.body.clientWidth > 1024) {
      socialSharing.style.display = "block"
    }
  } else {
    topButton.style.display = "none";
    socialSharing.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
topButton.addEventListener('click', ()=> {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})