let nav = document.querySelector('nav');
let menuToggle = document.querySelector('.menu');

menuToggle.addEventListener('click', ()=>{
    nav.classList.toggle('open-nav');
     setTimeout(() => {
    nav.classList.remove('open-nav');
    },3000)
})

