//exemplos de funções
//

//modo declarativo
function somar(a, b) {
    //código da função soma
    console.log("função somar......................");
    return a + b;
}
let resultado = somar(10, 5);
console.log(resultado);

//modo expressão
const multiplicar = function(a, b) {
    //código da função multiplicar
    console.log("função multiplicar......................");
    return a * b;
}
resultado = multiplicar(10, 5);
console.log(resultado);