const target = document.querySelector('.navbar')
const animationClass = 'sticky'

function animeScroll () {
    const windowTop = window.pageYOffset
    console.log(windowTop)
    if (windowTop > 20) {
        target.classList.add('sticky')
    } else {
        target.classList.remove('sticky')
    }
}

window.addEventListener('scroll', function () {
    animeScroll();
})