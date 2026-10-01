function calcularCarrito() {
    // 1. Pedimos la cantidad de productos
    let cantidadProductos = prompt("¡Bienvenido a Rise&Run!\n¿Cuántos productos deseas agregar al carrito?");

    // Validamos entrada correcta
    if (cantidadProductos === null || cantidadProductos === "" || Number(cantidadProductos) <= 0) {
        alert("Por favor, ingresa una cantidad válida de productos.");
        return;
    }

    let subtotal = 0;
    let listaDetalle = "<ul>";

    // 2. Ciclo for para registrar cada precio
    for (let i = 1; i <= cantidadProductos; i++) {
        let precio = prompt("Ingresa el precio del producto " + i + " (en S/):");
        let precioNumero = Number(precio);

        subtotal = subtotal + precioNumero;
        listaDetalle = listaDetalle + "<li>Producto " + i + ": S/ " + precioNumero + "</li>";
    }

    listaDetalle = listaDetalle + "</ul>";

    // 3. Solicitamos el cupón de descuento
    let cupon = prompt("Si tienes un cupón de descuento, ingrésalo aquí (Ejemplo: RISERUN10 o VERANO20):");
    
    let porcentajeDescuento = 0;
    let mensajeCupón = "";

    // 4. Evaluamos el cupón usando if / else if / else
    if (cupon === "RISERUN10") {
        porcentajeDescuento = 0.10; // 10% de descuento
        mensajeCupón = "<p style='color: green;'>¡Cupón 'RISERUN10' aplicado! (10% de descuento)</p>";
    } else if (cupon === "VERANO20") {
        porcentajeDescuento = 0.20; // 20% de descuento
        mensajeCupón = "<p style='color: green;'>¡Cupón 'VERANO20' aplicado! (20% de descuento)</p>";
    } else if (cupon === "" || cupon === null) {
        mensajeCupón = "<p style='color: gray;'>No ingresaste ningún cupón.</p>";
    } else {
        mensajeCupón = "<p style='color: red;'>Cupón inválido o expirado.</p>";
    }

    // 5. Calculamos montos finales
    let montoDescuento = subtotal * porcentajeDescuento;
    let totalFinal = subtotal - montoDescuento;

    // 6. Evaluamos envío gratis con el subtotal (if / else)
    let mensajeEnvio = "";
    if (subtotal >= 200) {
        mensajeEnvio = "<p style='color: green;'><strong>¡Tienes envío GRATIS en tu pedido!</strong></p>";
    } else {
        let falta = 200 - subtotal;
        mensajeEnvio = "<p style='color: orange;'>Agrega S/ " + falta + " más para obtener envío gratis.</p>";
    }

    // 7. Mostramos el resumen en la página
    let contenedorResultado = document.getElementById("resultado-carrito");

    contenedorResultado.innerHTML = 
        "<h3>Resumen de la compra</h3>" +
        "<p><strong>Ítems ingresados:</strong> " + cantidadProductos + "</p>" +
        listaDetalle +
        "<p><strong>Subtotal:</strong> S/ " + subtotal + "</p>" +
        mensajeCupón +
        "<p><strong>Monto descontado:</strong> S/ " + montoDescuento + "</p>" +
        "<h4>Total Final a Pagar: S/ " + totalFinal + "</h4>" +
        mensajeEnvio;
}