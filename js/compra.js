    /* Datos fijos */
    let pro, pre, imagen, tipo;
    /* Function reune instrucciones que luego se pueden ejecutar sin escribir todo de nuevo */
    /* value sirve para leer o cambiar el texto que esta en un formulario */
    /* getElementById busca un elemento por su id */
    /*  
        pro = nombre del producto
        pre = precio
        imagen = nombre del archivo de imagen
        tipo = si es ropa o calzado 
    */
    function elegirProducto() {
        let opcion = document.getElementById("producto").value;

        /* Dependiendo de la opcion elegida en el formulario te devuelve un 
        producto; precio; imagen; tipo (porque cada uno esta asignado por un value)*/

        if (opcion == 1) {
            pro = "Essentialis Hoddie"; pre = 120; imagen = "hoddie1.jpg"; tipo = "ropa";
        } else if (opcion == 2) {
            pro = "Eaquale Set"; pre = 140; imagen = "buzo5.jpg"; tipo = "ropa";
        } else if (opcion == 3) {
            pro = "Otium Set"; pre = 85; imagen = "buzo6.jpg"; tipo = "ropa";
        } else if (opcion == 4) {
            pro = "Impetus Sneakers"; pre = 95; imagen = "zombie5.jpg"; tipo = "calzado";
        } else if (opcion == 5) {
            pro = "Vestigium"; pre = 110; imagen = "zombie4.jpg"; tipo = "calzado";
        } else if (opcion == 6) {
            pro = "Velox Sneakers"; pre = 80; imagen = "zombie10.jpg"; tipo = "calzado";
        } else if (opcion == 7) {
            pro = "Radicalis Tee"; pre = 55; imagen = "polo3.jpg"; tipo = "ropa";
        } else if (opcion == 8) {
            pro = "Primalis Tee"; pre = 50; imagen = "polo5.jpg"; tipo = "ropa";
        } else if (opcion == 9) {
            pro = "Classicus Tee"; pre = 45; imagen = "polo7.jpg"; tipo = "ropa";
        }
        
        /* textContent escribe texto en una parte de la página
        src cambia la imagen 
        alt cambia la descripción del img */

        /* tofixed sirve sirve para poner cierta cantidad de decimales (en este caso 2) */

        document.getElementById("producto-nombre").textContent = pro;
        document.getElementById("producto-precio").textContent = "S/ " + pre.toFixed(2);
        document.getElementById("producto-imagen").src = "img/" + imagen;
        document.getElementById("producto-imagen").alt = pro;
        document.getElementById("resumen-producto").textContent = pro;
        document.getElementById("resumen-precio").textContent = "S/ " + pre.toFixed(2);

        let opciones = "<option value=''>Selecciona tu talla</option>";

        /* Cadena de opciones para las tallas */
        if (tipo == "ropa") {
            opciones = opciones + "<option value='S'>S</option>";
            opciones = opciones + "<option value='M'>M</option>";
            opciones = opciones + "<option value='L'>L</option>";
            opciones = opciones + "<option value='XL'>XL</option>";
        } else {
            for (let t = 36; t <= 43; t++) {
                /* Las comillas simples se juntan en el resultado final */
                opciones = opciones + "<option value='" + t + "'>" + t + "</option>";
            }
        }
    
        /*innerHTML coloca las etiquetas de las opciones en la lista. */
        document.getElementById("talla").innerHTML = opciones;
        ocultarBoleta();
    }



    

    function ocultarBoleta() {
        /* style.display cambia el display de CSS
        none oculta la sección y  block la muestra */
        document.getElementById("boleta").style.display = "none";
        document.getElementById("resumen-calculado").style.display = "none";
        document.getElementById("mensaje-exito").style.display = "none";
        document.getElementById("resumen-inicial").style.display = "block";
    }





    function generarBoleta() {
        ocultarBoleta(); /* Limpia un resultado anterior */

        /* lee el formulario */
        let cli = document.getElementById("cliente").value;
        let talla = document.getElementById("talla").value;
        let can = Number(document.getElementById("cantidad").value);
        let cuotas = Number(document.getElementById("cuotas").value);

        /* comprobaciones con if y for.
        return termina la función si hay un dato incorrecto y regresa a su estado incial */
        
        if (cli == "") {
            alert("Escribe un nombre");
            return;
        }

        if (talla == "") {
            alert("Selecciona una talla");
            return;
        }
        
        /* cantidad_valida y coutas_validas usadas para determinar si es valido o no */

        let cantidad_valida = 0;

        for (let n = 1; n <= 20; n++) {
            if (can == n) 
            { 
                cantidad_valida = 1; 
            }
        }

        if (cantidad_valida == 0) {
            alert("La cantidad debe ser entre 1 y 20");
            return;
        }

        let cuotas_validas = 0;

        for (let n = 1; n <= 12; n++) {
            if (cuotas == n) { cuotas_validas = 1; }
        }

        if (cuotas_validas == 0) {
            alert("El número de cuotas debe ser entre 1 a 12");
            return;
        }

        /* Calculos */

        let subtotal = pre * can;
        let igv = subtotal * 0.18;
        let interes, porcentaje;

        if (cuotas <= 10) {
            interes = subtotal * 0.20;
            porcentaje = 20;
        } else {
            interes = subtotal * 0.10;
            porcentaje = 10;
        }

        let neto = subtotal + igv + interes;
        let cuota_mes = neto / cuotas;

        /* Para redondear la cuato, primero poniendo solo 2 decimales (usando number porque tofixed devuelve texto), 
        luego con el "cuotas - 1" se separa la ultima cuota para que la suma final sea el numero redondo */

        let ultima_cuota = neto - Number(cuota_mes.toFixed(2)) * (cuotas - 1);

        /* se completan los espacios con textcontent y
        no con document write porque la pagina ya esta cargada
        podria generar errores como que se borre el contenido de la pagina al remplaazarlo*/

        document.getElementById("resumen-subtotal").textContent = "S/ " + subtotal.toFixed(2);
        document.getElementById("resumen-igv").textContent = "S/ " + igv.toFixed(2);
        document.getElementById("resumen-tasa").textContent = "Interés (" + porcentaje + "%)";
        document.getElementById("resumen-interes").textContent = "S/ " + interes.toFixed(2);
        document.getElementById("resumen-total").textContent = "S/ " + neto.toFixed(2);
        document.getElementById("resumen-cuota").textContent = "S/ " + cuota_mes.toFixed(2);

        document.getElementById("boleta-cliente").textContent = cli;
        document.getElementById("boleta-plan").textContent = cuotas + " cuotas";
        document.getElementById("boleta-producto").textContent = pro;
        document.getElementById("boleta-talla").textContent = talla;
        document.getElementById("boleta-cantidad").textContent = can;
        document.getElementById("boleta-precio").textContent = "S/ " + pre.toFixed(2);
        document.getElementById("boleta-subtotal").textContent = "S/ " + subtotal.toFixed(2);
        document.getElementById("boleta-igv").textContent = "S/ " + igv.toFixed(2);
        document.getElementById("boleta-tasa").textContent = "Interés (" + porcentaje + "%)";
        document.getElementById("boleta-interes").textContent = "S/ " + interes.toFixed(2);
        document.getElementById("boleta-total").textContent = "S/ " + neto.toFixed(2);

        /* el for repite el codigo por cada cuota cada repeticion se guarda como una nueva fila 
        y solo la repeticion final se guardara como ultima_cuota (esto para el redondeo)*/

        let filas = "";

        for (let a = 1; a <= cuotas; a++) 
        {
            let monto;

            if (a == cuotas) 
            { 
                monto = ultima_cuota;
            }

            else 
            { 
                monto = cuota_mes; 
            }

            /* Cada repeticion crea una cadena con un numero de cuota nuevo */

            filas = filas + "<div class='cuota-item'><span>Cuota N.º " + a + "</span><strong>S/ " + monto.toFixed(2) + "</strong></div>";
        }

        /* innerHTML permite poner contenido html (como el de la fila 476 con el "filas = filas)"
        dentro de un elemento, en este caso "lista-cuotas" */
        /* styledisplay block hace visible "boleta", "mensaje-directo" y "resumen-calculado" */
        /* styledisplay none hace que resumen-inicial desaparesca */
        document.getElementById("lista-cuotas").innerHTML = filas;
        document.getElementById("boleta").style.display = "block";
        document.getElementById("resumen-calculado").style.display = "block";
        document.getElementById("mensaje-exito").style.display = "block";
        document.getElementById("resumen-inicial").style.display = "none";
    }

    /* Llamada inicial: prepara el primer producto y sus tallas. */
    elegirProducto();