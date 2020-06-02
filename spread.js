let frutas = ["maça", "banana", "uva"];

let frutasDois = ["laranja", "abacate", "goiaba"];

let listaCompleta = [...frutas, ...frutasDois];

console.log(listaCompleta);

let pessoa = {
    nome: "vinicius",
    idade: 22
}

let infoPessoal = {
    tel: 991919090,
    rg: 205340202,
    ...pessoa
}

let pessoaCompleta = {
    endereco: "Rua dos Bobos",
    ...infoPessoal
}
console.log(pessoaCompleta);

function letras(...params) {
    console.log(params);
}

letras("a", "b", "c");