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


/*== ACCORDION SKILLS ==*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader  = document.querySelectorAll('.skills__header');

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(let i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close';
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach((eventListener) =>{
    eventListener.addEventListener('click', toggleSkills)
})

/*== QUALIFICATION TABS ==*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab, index) => {
  if (index === 0) {
    tab.classList.remove('qualification__active');
  }

  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active');
    });

    tabs.forEach(otherTab => {
      if (otherTab !== tab) {
        otherTab.classList.remove('qualification__active');
      }
    });

    target.classList.add('qualification__active');
    tab.classList.add('qualification__active');
  });
});


/*== SERVICES MODAL ==*/

/*== PORTFOLIO SWIPER ==*/

/*== TESTIMONIAL ==*/

/*== SCROLL SECTIONS ACTIVE LINK ==*/

/*== CHANGE BACKGROUND HEADER ==*/