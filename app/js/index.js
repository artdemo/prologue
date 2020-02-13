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
// window.__forceSmoothScrollPolyfill__ = true;

const nav = new Navigation({
  navClass: '.nav',
  navLinkClass: '.nav__link',
  navLinkActiveClass: 'nav__link_active'
})

//Init gallery & navigation after load all images so as to get right sizes

window.addEventListener('load', function() {
  flexBox.style.display = '';

  if (window.innerWidth <= breakpoints.tablet) return;

  gallery.init(columns.tablet);
  nav.init();

});

window.addEventListener('resize', function() {

  if (window.innerWidth < breakpoints.tablet) {

    gallery.init(columns.phone);
    return;
  }

  gallery.init(columns.tablet);
});