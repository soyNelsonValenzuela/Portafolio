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

//Colorea las skill al hacer hover y las vuelve a escala de grices al hacer mouse out 
skillItem.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.filter = 'grayscale(0)';
        item.style.border = '1px solid #6BD1FF'
        item.style.boxShadow = '0px 0px 30px #6BD1FF'
    })
    item.addEventListener('mouseout', () => {
        item.style.filter = 'grayscale(100%)'
        item.style.border = 'none'
        item.style.boxShadow = '2px 2px 10px black'
    })
})


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
