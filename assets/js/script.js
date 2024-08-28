let navItems = document.querySelectorAll('.nav-link')
let skillItem = document.querySelectorAll('.skill-item')


navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(i => {
            i.classList.remove('active')
        })
        item.classList.add('active')
        document.querySelector('#navbarSupportedContent').classList.remove("show")
    })
})

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

