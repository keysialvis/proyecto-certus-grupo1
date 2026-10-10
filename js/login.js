/* Abre la ventana flotante del login. */
function abrirLogin() {
    document.getElementById("mensaje-login").textContent = "";
    document.getElementById("ventana-login").showModal();
}

/* Cierra la ventana flotante. */
function cerrarLogin() {
    document.getElementById("ventana-login").close();
}

function iniciarSesion() {
    /* value lee lo que se escribió en cada campo. */
    let usuario = document.getElementById("login-usuario").value;
    let clave = document.getElementById("login-clave").value;

    /* Cuenta de prueba: puedes cambiar estos dos datos.
       && exige que el usuario Y la contraseña sean correctos. */
    if (usuario === "usuario" && clave === "contraseña") {
        /* Guarda el usuario durante esta pestaña, sin guardar la contraseña. */
        sessionStorage.setItem("usuario-login", usuario);
        mostrarSesion(usuario);
        cerrarLogin();
        document.getElementById("boton-salir").focus();
    } else {
        document.getElementById("mensaje-login").textContent = "Usuario o contraseña incorrectos.";
    }
}

/* Muestra el mismo saludo y los mismos botones en cualquier página. */
function mostrarSesion(usuario) {
    document.getElementById("estado-login").textContent = "Hola, " + usuario;
    document.getElementById("boton-login").style.display = "none";
    document.getElementById("boton-salir").style.display = "inline-block";
}

function cerrarSesion() {
    /* Borra el usuario guardado para que no vuelva a aparecer al navegar. */
    sessionStorage.removeItem("usuario-login");
    document.getElementById("estado-login").textContent = "";
    document.getElementById("boton-login").style.display = "inline-block";
    document.getElementById("boton-salir").style.display = "none";
    document.getElementById("boton-login").focus();
}

/* Al abrir cada página, recupera la sesión de esta pestaña. */
let usuarioGuardado = sessionStorage.getItem("usuario-login");

if (usuarioGuardado != null) {
    mostrarSesion(usuarioGuardado);
}
