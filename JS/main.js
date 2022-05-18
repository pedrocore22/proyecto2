let primeraSeccion = document.getElementById('primera');
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let positionScroll = window.scrollY;
    let positionPrimeraSeccion = primeraSeccion.getBoundingClientRect().top;
    if (positionScroll < (positionPrimeraSeccion + positionScroll)) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }

})

document.querySelector('.copyright').innerHTML = '&copy; ' 
                                               + new Date().getFullYear() 
                                               + ' ACME S.A.'; 

let aside = document.querySelector('aside');
let burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    aside.classList.toggle('abierto');
    burger.classList.toggle('abierto');
})
