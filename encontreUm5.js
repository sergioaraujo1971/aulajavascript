function encontreUm5(numeros) {
    var contador = 0;
    do {
        if (numeros[contador] == 5) {
            console.log("Encontramos um 5!");
        } else {
            console.log(numeros[contador]);
        }
        ++contador;
    } while (contador < numeros.length)
    return;
}
var arr = [1, 3, 4, 5, 6, 7];
encontreUm5(arr);