/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector(".nav__menu");
const navOpen = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");

if (navOpen) {
  navOpen.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navMenu.classList.toggle('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD BLUR HEADER ===============*/
const header = document.querySelector('#header');


const BlurHeader = () => {
  this.scrollY >= 50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header')
};

window.addEventListener('scroll', BlurHeader);
/*=============== SWIPER FAVORITES ===============*/ 
let swiperFavorite = new Swiper('.favorite-section__swiper', {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
    } 
  }
});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUpBtn = document.querySelector('#scroll-up');
const ScrollUp = () => {
  this.scrollY >= 350 ? scrollUpBtn.classList.add('show-scroll')
                      : scrollUpBtn.classList.remove('show-scroll') 
}
window.addEventListener('scroll', ScrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
