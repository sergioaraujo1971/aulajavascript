let pessoa = {
    nome: "sergio",
    idade: 49,
    altura: 1.68
}

let json = JSON.stringify(pessoa);

console.log(json);

let objetoNovo = JSON.parse(json);

console.log(objetoNovo);

let ListaCompras = ["pao", "presunto", "queijo"];

let json1 = JSON.stringify(ListaCompras);
console.log(json1);