//Operador E (AND) - Símbolo: &&
// Retorna true APENAS SE TODOS OS ENVOLVIDOS forem true
//Apenas um único false já é suficiente para retornar false
console.log(true && true)
console.log(true && false)
console.log (false && true)



let idade = 18 
let maiorIdade = idade >= 18 //true
let temCarteira = true
let temCarro = true

console.log(maiorIdade && temCarteira && temCarro) //false



//Operador OU (OR) - Símbolo: ||
//Retorna false APENAS SE TODOS OS ENVOLVIDOS forem false
//Apenas um único true já é suficiente para tetornar true

console.log(true || true) //true
console.log(true || false) //true
console.log(false || false) //true
console.log(false || false) //false

let temTrabalho = true
let economiza = true
let investe = true 
let herdeiro = true


console.log((temTrabalho && economiza && investe) || herdeiro)





//Operador NÂO/Negação (NOT) - Símbolo: !
//Inverte o estado - True ele transforma em false e vice-versa
let ligado = true

console.log(!false)