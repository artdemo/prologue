import Smoothscroll from 'smoothscroll-polyfill';
import Gallery from '../blocks/gallery/gallery';
import Toggle from '../blocks/toggle/toggle';
import Navigation from '../blocks/nav/nav';

//==========GALLERY STUFF==========//
const breakpoints = {
    tablet: 650,
    desktop: 1000
  },
  columns = {
    phone: 1,
    tablet: 3
  },
  flexBox = document.querySelector('.gallery');

flexBox.style.display = 'none';

const gallery = new Gallery({
  container: '.gallery',
  item: '.gallery__item'
});

//==========TOGGLE MENU STUFF==========//
const toggle = new Toggle({
  elementParent: document.querySelector('.parent'),
  classToggle: 'parent__menu_visible'
});

//==========NAVIGATION STUFF==========//
//Kickoff the polyfill
Smoothscroll.polyfill();

const nav = new Navigation({
  navClass: '.nav',
  navLinkClass: '.nav__link',
  navLinkActiveClass: 'nav__link_active'
})

//Init gallery & navigation after loading all images so as to get correct sizes
window.addEventListener('load', function() {
  flexBox.style.display = '';

  if (window.innerWidth >= breakpoints.tablet) gallery.init(columns.tablet);;

  nav.init()
});

window.addEventListener('resize', function() {

  if (window.innerWidth < breakpoints.tablet) {
    gallery.init(columns.phone);
  } else {
    gallery.init(columns.tablet);
  }

  nav.init();
});

// let menu = document.querySelector('.menu');
// const socials = document.querySelector('.socials');
// let flag = false;
// let winHeight = window.innerHeight;


// window.addEventListener('scroll', () => {
//   // if (flag) return;
//   let currentHeight = window.innerHeight;

//   if (winHeight == currentHeight) return;

//   winHeight = currentHeight;

//   console.log(winHeight)

//   socials.style.transitionProperty = 'none';
//   socials.style.opacity = 0;

//   // flag = true;

//   setTimeout(() => {
//     // flag = false;
//   socials.style.transitionProperty = 'all';

//     socials.style.opacity = 1; 
//   }, 500)
// })