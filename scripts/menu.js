const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');


hamburguer.addEventListener('click', function() {
    menu.classList.toggle('active');
});