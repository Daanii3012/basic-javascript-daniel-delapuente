const scanner = require ("prompt-sync")({ sigint: true })

let cadenaInput = scanner('Introduce una cadena de texto ==>')
let palabra
let cadena = ""

while (cadenaInput != "cancelar") {
    if (String(cadenaInput)) {
    palabra = String(cadenaInput)
    cadena = (cadena + palabra + "-")
} else{
    console.log("solo palabras")
}
cadenaInput = scanner('Introduce una cadena de texto ==>')
}

console.log('La cadena de texto es ' + cadena)