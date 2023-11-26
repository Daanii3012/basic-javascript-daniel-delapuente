const scanner = require ("prompt-sync")({ sigint: true })

var edadMinima = 18;

const nombre = scanner("Introduce tu nombre =>")

let edad = scanner("Introduce tu edad =>")

if (edad >= edadMinima) {
    console.log(nombre + " puede conducir")
} else if (edad < edadMinima) {
    console.log(nombre + " no puede conducir")
}

