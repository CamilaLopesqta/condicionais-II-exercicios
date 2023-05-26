let nacionalidade = prompt("Escreva aqui a nacionalidade").toLowerCase()

switch(nacionalidade){
    case "brasileira": nacionalidade === "brasileira"
    console.log("a pessoa é do Brasil!")
    break;
    case "argentina": nacionalidade === "argentina"
    console.log("a pessoa é da Argentina!")
    break;
    case "uruguaia": nacionalidade === "uruguaia"
    console.log("a pessoa é do Uruguai!")
    break;
    case"chilena": nacionalidade === "chilena"
    console.log("a pessoa é do Chile!")
    break;
    case "colombiana": nacionalidade === "colombiana"
    console.log("a pessoa é da Colômbia!")
    break;
    default:
    console.log("nacionalidade não encontrada")
}