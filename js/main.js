const menuBtn = document.querySelector('#menu-btn');
const ulLeft = document.querySelector('#ul-left')

const showCase = document.querySelector('.show-case')

menuBtn.addEventListener('click',()=>{ 
    ulLeft.classList.toggle('show');

});

ScrollReveal().reveal(showCase);
ScrollReveal().reveal('.news-cards',{delay:500});
ScrollReveal().reveal('.cards-banner-one',{delay:500});
ScrollReveal().reveal('.cards-banner-two',{delay:500});