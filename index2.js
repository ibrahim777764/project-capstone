const openMenu = document.getElementById('menu');
const closeMenu = document.getElementById('close');
const menu = document.getElementById('nav-mobile');

function openMobileMenu() {
  menu.style.display = 'block';
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
}

function closeMobileMenu() {
  menu.style.display = 'none';
  openMenu.style.display = 'block';
  closeMenu.style.display = 'none';
}

openMenu.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);