// Usando switch case, peça para o usuário inserir um número
// Caso o número for 1, imprima "Voce escolheu Red Dead Redemption II"
// Caso o número for 2, imprima "Voce escolheu The Elder Scrolls V: Skyrim"
// Caso o número for 3, imprima "Voce escolheu Mass Effect 3"
// Caso o número for qualquer outra coisa, imprima "Não encontrei o jogo."

const readline = require('readline-sync');

let time = readline.questionInt("Escreve aí")
switch (time) {
    case 1:
        console.log("Harry Potter")
        break
    case 2:
        console.log("Tudo é rio")
        break
    case 3:
        console.log("Evelyn Hugo")
        break
    default:
        console.log("Livro não encontrado")
        break
    }