const hamburgerMenu = document.querySelector('.hamburger-menu');
const head = document.getElementById('head');
const nav = document.getElementById('nav');
const overlay = document.querySelector('.overlay');

hamburgerMenu.addEventListener('click',()=>{
    head.classList.toggle("active");
})