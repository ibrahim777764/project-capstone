const openMenu = document.getElementById('menu');
const closeMenu = document.getElementById('close');
const menu = document.getElementById('nav-mobile');

function openMobileMenu() {
  document.body.style.overflow = 'hidden' ;
  menu.style.display = 'block';
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
}

function closeMobileMenu() {
  document.body.style.overflow = 'visible' ;
  menu.style.display = 'none';
  openMenu.style.display = 'block';
  closeMenu.style.display = 'none';
}

openMenu.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);