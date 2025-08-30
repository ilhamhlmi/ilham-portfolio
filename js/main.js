const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-mobile')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})