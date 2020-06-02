//if ternqario
let dia = "sexta";
let resultado = dia == "domingo" ? "Vou a praia" : "Fico em casa";
console.log(resultado);

switch (dia) {
    case "segunda":
        console.log("Vou tomar café");
        break;
    case "quarta":
        console.log("Vou no cinema");
        break;
    default:
        console.log("Eu não vou fazer nada");
}



function fimDeSemana(dia) {
    switch (dia) {
        case 'sexta-feira':
            console.log('Bom fim de semana!');
            break;
        case 'segunda-feira':
            console.log('Boa semana!');
            break;
        default:
            console.log('Bom dia!');
    }
}
dia = 'segunda-feira';
fimDeSemana(dia);