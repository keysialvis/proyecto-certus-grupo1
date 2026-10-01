// Elementos del DOM
const botonPromo = document.getElementById('boton-promo');
const modal = document.getElementById('miModal');
const botonCerrar = document.querySelector('.modal-cerrar');

// ABRIR MODAL: Al hacer clic en el botón de promos
botonPromo.addEventListener('click', function(event) {
    event.preventDefault(); // Previene comportamientos extraños si es un enlace
    modal.style.display = "block"; // Muestra el fondo y la caja
});

// CERRAR MODAL: Al hacer clic en la (X)
botonCerrar.addEventListener('click', function() {
    modal.style.display = "none"; // Vuelve a ocultar todo
});

// CERRAR MODAL: Si el usuario hace clic afuera de la caja blanca (en el fondo oscuro)
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});