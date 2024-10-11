let temCarteira = false //se for false não imprime nada 
let maiorIdade = 29 >= 18

//SE -- IF
if ( temCarteira === true && maiorIdade === true  ) {
    //executa o código
console.log("Voce tem carteira e é maior de 18. Pode dirigir.")
} else if (maiorIdade === true) {
    console.log("Voce é de maior, porém não tem carteira. vai trabalhar.")
} else {
    console.log("Voce não tem carteira. Que peninha, vai a pé.")
}
