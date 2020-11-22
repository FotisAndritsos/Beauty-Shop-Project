const hamburgerMenu = document.querySelector('.hamburger-menu');
const head = document.getElementById('head');
const nav = document.getElementById('nav');
const overlay = document.querySelector('.overlay');
const searchBtn = document.querySelector('.search');
const searchContainer = document.querySelector('.search-container');
const searchSvg = document.querySelector('.search-svg');
const valBtn = document.querySelectorAll('.valbtn');
let valOrder = document.querySelectorAll('.value-order');
let cartValue = document.querySelector('.cart-value');
const delCartItem = document.querySelectorAll('.del-cart-item');
const smallPic= document.querySelectorAll('.sml-img img');
const bigPic= document.querySelector('.big-pic img');

smallPic.forEach(pic =>{
  pic.addEventListener("click",e =>{
    let tar = e.target.src;
    bigPic.src = tar;
    console.log(tar);
  })
})

// DELETE ITEM CART 
delCartItem.forEach(del => {
  del.addEventListener("click", e => {
    let x = e.target;
    y = x.parentElement.closest("tr");
    y.style.display= "none";
  })
})


// PRODUCT VALUES-CART 

valBtn.forEach(btn =>{ 
  btn.addEventListener("click",e => {
  let x = e.target;
  y=x.parentElement.children[1];
  z=y.value;
  if (x.classList.contains("inc")){
  z=y.value++;
  cartValue.innerHTML = z+1 ;
  }else if(x.classList.contains("dec") && z>1){
    z=y.value--; cartValue.innerHTML = z-1 ;
  }else return;
  })
})



// HAMBURGER MENU 
hamburgerMenu.addEventListener('click',()=>{
    head.classList.toggle("active");
})

// SEARCH BUTTON 
searchBtn.addEventListener('click',()=>{
  searchContainer.classList.add("active");
  searchSvg.addEventListener('click',() =>{
    searchContainer.classList.remove("active");
    head.classList.remove('active');
  })
})

// SLIDER

let slideIndex = 0;

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


// OWL CAROUSEL 
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
  loop:true,
  nav:false,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      800:{
        items:3
    },
      1000:{
          items:4
      }
  }
});

