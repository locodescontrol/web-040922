document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});


const opens = document.getElementById('opens');
const modal_containers = document.getElementById('modal_containers');
const closes = document.getElementById('closes');

opens.addEventListener('click', () => {
  modal_containers.classList.add('show');
});

closes.addEventListener('click', () => {
  modal_containers.classList.remove('show');
});