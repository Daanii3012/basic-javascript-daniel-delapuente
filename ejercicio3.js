const scanner = require ("prompt-sync")({ sigint: true })

let cancelar = false
let numInput
let num
let suma = 0

while (!cancelar) {
    numInput = scanner('Introduce un numero ==>')

if (Number(numInput)) {
    num = Number(numInput)
    suma += num
} else if (numInput != 'cancelar') {
    suma += num
}else{
    cancelar = true
}
}

console.log('La suma es ' + suma)
