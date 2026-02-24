const button = document.querySelector("button.buttonMenu");
const menu = document.querySelector("nav.menu");
const overlay = document.querySelector("div.menuOverlay");

function toggleMenu() {
  const isOpen = menu.classList.toggle('active');
  overlay.classList.toggle('active');
  button.setAttribute('aria-expanded', String(isOpen));
}

function closeMenu() {
  menu.classList.remove('active');
  overlay.classList.remove('active');
  button.setAttribute('aria-expanded', 'false');
}

button.addEventListener('click', () => {
  toggleMenu();
});

overlay.addEventListener('click', closeMenu);
