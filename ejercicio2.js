const scanner = require ("prompt-sync")({ sigint: true })


let nota = scanner("Introduce tu nota =>")


if (nota < 3) {
    console.log("Muy deficiente")
} else if (nota < 5) {
    console.log("Insuficiente")
} else if (nota < 6) {
    console.log("Suficiente")
} else if (nota < 7) {
    console.log("Bien")
} else if (nota < 9) {
    console.log("Notable")
} else if (nota <= 10) {
    console.log("Sobresaliente")
}
