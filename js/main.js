// Definimos un objeto para cada seguro
const seguroBasico = {
    nombre: "Seguro Básico",
    precioBase: 5000,
    calcularPrecioFinal: function(edad, cantidadAsegurada) {
        let precioFinal = this.precioBase;
        if (edad < 25) {
            precioFinal += 1000; 
        }
        return precioFinal + (cantidadAsegurada * 0.01); 
    }
};

const seguroCompleto = {
    nombre: "Seguro Completo",
    precioBase: 10000,
    calcularPrecioFinal: function(edad, cantidadAsegurada) {
        let precioFinal = this.precioBase;
        if (edad < 25) {
            precioFinal += 1500; 
        }
        return precioFinal + (cantidadAsegurada * 0.015); 
    }
};

// Almacenamos los seguros en un array
const seguros = [seguroBasico, seguroCompleto];

// Función para seleccionar el seguro y calcular el precio
function cotizarSeguro() {
    let tipoSeguro = parseInt(prompt("Elija el tipo de seguro: 1 para Básico, 2 para Completo"));
    let edad = parseInt(prompt("Ingrese su edad"));
    let cantidadAsegurada = parseFloat(prompt("Ingrese la cantidad asegurada"));

    // Verificamos que los datos ingresados sean válidos
    if (isNaN(tipoSeguro) || isNaN(edad) || isNaN(cantidadAsegurada)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    // Seleccionamos el seguro
    let seguroSeleccionado = seguros[tipoSeguro - 1];
    if (!seguroSeleccionado) {
        alert("Tipo de seguro no válido.");
        return;
    }

    // Calculamos el precio final
    let precioFinal = seguroSeleccionado.calcularPrecioFinal(edad, cantidadAsegurada);

    // Mostramos el resultado al usuario
    alert(`El precio final para el ${seguroSeleccionado.nombre} es: $${precioFinal.toFixed(2)}`);
}

// Ejecutamos la función de cotización
cotizarSeguro();
