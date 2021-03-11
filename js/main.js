const menuBtn = document.querySelector('#menu-btn');
const ulLeft = document.querySelector('#ul-left')

menuBtn.addEventListener('click',()=>{ 
    ulLeft.classList.toggle('show');

});