// Crie uma variável chamada time
// SE o time for "Gremio"/ imprima algo
// SE o time for "Inter", imprima algo diferente 
// SE o time for "Juventude", imprime outra coisa
// SE o time for "Corinthians", imprime outra coisa ainda
// SE NÂO, imprime "Time não conhecido"

const readline = require('readline-sync')

let time = readline.question("Que time é o teu?")
console.log (time.toUpperCase()) //transforma a string em maiúscula
console.log (time.toUpperCase()) //transforma a string em minúscula

if (time.toLowerCase() === "gremio") {
    console.log("Melhor time")
} else if (time.toLowerCase() === "inter") {
    console.log("Não gosto")
} else if (time.toLowerCase() === "juventude") {
    console.log("Quem?")
} else if (time.toLowerCase() === "corinthians") {
    console.log("Vou te roubei.")
} else {
    console.log("Não conheço esse time")
}