const scanner = require ("prompt-sync")({ sigint: true })

let suma = 0;

while (true) {
    let input = scanner("Introduce un número o escribe 'cancelar' para finalizar:");

    if (input.toLowerCase() === "cancelar") {
        break;
    }

    let numero = parseFloat(input);

    if (isNaN(numero)) {
        console.log("No entendido. Por favor, introduce un número válido.");
    } else {
        suma += numero;
    }
}

// Mostrar la suma total al salir
console.log("La suma total de los números introducidos es: " + suma);
