const burgerMenu = document.getElementById('burger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

burgerMenu.addEventListener('click', (e) => {
  e.stopPropagation();
  burgerMenu.classList.toggle('active');
  nav.classList.toggle('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    nav.classList.remove('open');
  });
});

document.addEventListener('click', (e) => {
  const isClickInsideNav = nav.contains(e.target);
  const isClickOnBurger = burgerMenu.contains(e.target);

  if (!isClickInsideNav && !isClickOnBurger) {
    burgerMenu.classList.remove('active');
    nav.classList.remove('open');
  }
});
