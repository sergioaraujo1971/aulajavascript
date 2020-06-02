// USANDO ARRAYS
const vingadores = ['Tony Stark', 'Steve Rogers', 'Natasha Romanoff'];

// Desestruturar o array em variáveis individuais, o padrão do array fica na direita
// da atribuição (o "=") e o array sendo descontruido fica na direita.
// imprimir as variáveis
const [homemDeFerro, CapitaoAmerica, ViuvaNegra] = vingadores;

console.log(homemDeFerro, CapitaoAmerica, ViuvaNegra);

const personagens = ['Tony Stark', ['Steve Rogers', 'Zé Carioca'],
    ['Mickey Mouse', 'Pateta']
];

// USANDO OBJETOS
const vingadores2 = {
    homemDeFerro: 'Tony Stark',
    capitaoAmerica: 'Steve Rogers',
    viuvaNegra: 'Natasha Romanoff'
};
// Desestruturar esse objeto e salvar o valor das propriedades em variaveis

// Desestruturar objetos aninhados (que contém outros objetos)
const avengers = {
    viuvaNegra: 'Natasha Romanoff',
    ironManCharacters: {
        casal: {
            ironMan: 'Tony Stark',
            esposa: 'Pepper Potts',
        },
        parceiro: {
            warMachine: 'James Brodie'
        }
    },
    capitaoCharacters: {
        cap: 'Steve Rogers',
        parceiro: {
            falcao: 'Sam Wilson'
        }
    }
};