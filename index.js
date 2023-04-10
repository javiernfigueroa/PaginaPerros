//Para desplegar el menú al presionar el botón de la barra de navegación en dispositivos móviles
const navbar = document.querySelector('.navbar');
const toggler = navbar.querySelector('.navbar-toggler');
const collapse = navbar.querySelector('.navbar-collapse');

toggler.addEventListener('click', () => {
  collapse.classList.toggle('show');
});

$(document).ready(function(){
    $('.carousel').carousel({
      interval: 1000
    })
  });
  
  