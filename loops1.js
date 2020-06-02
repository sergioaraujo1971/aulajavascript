for (let i = 0; i <= 4; i++) {
    console.log(i);
}


function papagaio(x) {
    for (var i = 0; i < 5; i++) {
        console.log(x);
    }
    return;
}
papagaio("teste");

function naoPareDeContarImparesAte(numero) {
    // Escreva aqui o seu código
    let quantidade = 0;
    for (var i = 0; i <= numero; i++) {

        if (i % 2 != 0) {
            quantidade = quantidade + 1;
        }
    }
    return quantidade;
}
console.log(naoPareDeContarImparesAte(5));