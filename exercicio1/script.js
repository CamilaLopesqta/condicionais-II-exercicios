// ifs aninhados
const receberNumero = Number(prompt("Digite um número"))

if (receberNumero%2===0) {
    if (receberNumero%3===0) {
        console.log("é divisível por 2 ou por 3")
    } else {
        console.log("não é divisível por 2 ou por 3")
    }
       
} else {
    console.log("tente outro número")
 }

//operadores lógicos
// &&
if (receberNumero % 2 === 0 && receberNumero % 3 === 0){
    console.log("é divisível por 2 e por 3")
}else{
    console.log("não é divisível por 2 e por 3")
}
//  ||
if (receberNumero % 2 === 0 || receberNumero % 3 === 0){
    console.log("é divisível por 2 ou por 3")
}else{
    console.log("não é divisível por 2 ou por 3")
}