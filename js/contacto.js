// 1. CAPTURAR ELEMENTOS DEL HTML CON SUS NUEVOS NOMBRES
// Usamos document.getElementById para guardar los elementos en variables "let"
//document.getElementById("id"): Busca un elemento en el archivo HTML a través de su atributo id. Es como darle una dirección a JS para saber qué modificar.

let formulario = document.getElementById("miFormulario");
let ventanaAviso = document.getElementById("ventanaAviso");
let botonAceptar = document.getElementById("botonAceptar");
let textoAviso = document.getElementById("textoAviso");

// 2. EVENTO AL ENVIAR EL FORMULARIO
// Esta función se activa únicamente cuando el usuario presiona "Enviar formulario"
formulario.onsubmit = function(event) {
    
    // Evitamos que la página se recargue
    event.preventDefault();

    // Capturamos los valores
    let nombreIngresado = document.getElementById("nombres").value;
    let telefonoIngresado = document.getElementById("telefono").value;
    let servicioSeleccionado = document.getElementById("servicio").value;

    // VALIDACIÓN 1: El teléfono debe tener al menos 9 dígitos
    if (telefonoIngresado.length < 9) {
        alert("Por favor, ingresa un número de teléfono válido (mínimo 9 dígitos).");
    } 
    // VALIDACIÓN 2: Debe elegir un servicio de la lista
    else if (servicioSeleccionado == "") {
        alert("Por favor, selecciona un servicio.");
    } 
    // SI TODO ESTÁ CORRECTO: Mostramos la ventana de aviso
    else {
        textoAviso.innerHTML = "¡Hola " + nombreIngresado + "! Hemos recibido tu mensaje correctamente sobre: " + servicioSeleccionado + ".";
        ventanaAviso.style.display = "flex";
        }
};

// 3. EVENTO AL HACER CLIC EN "ACEPTAR"
botonAceptar.onclick = function() {
    // Ocultamos la ventana de aviso
    ventanaAviso.style.display = "none";
    
    // Limpiamos los campos del formulario
    formulario.reset();
};

