/*======================== SHOW AND HIDE MENU ================================*/
const navMenu = document.getElementById('nav-menu'),
      navToogle = document.getElementById('nav-toogle'),
      navClose = document.getElementById('nav-close');

/*== SHOW MENU ==*/
//Validating if constant exists
if(navToogle){
    navToogle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    });
}

/*== HIDE MENU ==*/
//Validating if constant exists
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    });
}

/* REMOVE MENU ON MOBILE */

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


