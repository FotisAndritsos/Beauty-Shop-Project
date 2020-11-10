const hamburgerMenu = document.querySelector('.hamburger-menu');
const head = document.getElementById('head');
const nav = document.getElementById('nav');
const overlay = document.querySelector('.overlay');

hamburgerMenu.addEventListener('click',()=>{
    head.classList.toggle("active");
})

// SLIDER

var slideIndex = 0;

const showSlides = () => {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

showSlides();


// STICKY NAV

window.addEventListener('scroll',()=>{
  stickyNav();
})
const sticky = head.offsetTop;

const stickyNav = () =>{
  if (window.pageYOffset > sticky) {
    head.classList.add("sticky")
  } else{
    head.classList.remove("sticky");
  }
}