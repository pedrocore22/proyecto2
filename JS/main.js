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