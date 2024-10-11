const readline = require('readline-sync')
let time = readline.question("Qual seu time")

switch (time) {

    case "gremio":
    console.log("O seu time é o Gremio")
    break

    case "inter":
        console.log("O seu time é o Inter")
        break

        default:
            console.log("O time não foi reconhecido.")
            break
}