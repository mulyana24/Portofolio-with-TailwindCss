// Navbar Fixed & back to-top
window.onscroll = function() {
    const header = document.querySelector('header')
    const navFixed = header.offsetTop
    const toTop = document.querySelector('#to-top')

    if(window.pageYOffset > navFixed) {
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    }else{
        header.classList.remove('navbar-fixed')
        toTop.classList.add('hidden')
        toTop.classList.remove('flex')
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// klik tombol di luar hamburger
window.addEventListener('click', function (e) {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})

// Darkmode Toggle
const modeToggle = document.querySelector('#darkMode-toggle')
const html = document.querySelector('html')

modeToggle.addEventListener('click', function(){
    if(modeToggle.checked) {
        html.classList.add('dark')
        localStorage.theme = 'dark'
    } else {
        html.classList.remove('dark')
        localStorage.theme = 'light'
    }
})

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    modeToggle.checked = true
    } else {
    modeToggle.checked = false
    }

