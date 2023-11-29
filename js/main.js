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


/*=============== SWIPER FAVORITES ===============*/ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
