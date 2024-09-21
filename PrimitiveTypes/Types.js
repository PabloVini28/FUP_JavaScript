//Existem tipos de dados que não apontam para local nenhum na memória
let variavel;
const varivel2 = null;

// Existem os tipos de dados booleanos
const boolean = true;
const boolean2 = false;

// Existem os tipos de dados numéricos
const numero = 5;
const numero2 = 5.5;
const numero3 = 0x10; // hexadecimal
const numero4 = 0b10; // binário
const numero5 = 0o10; // octal
const numero6 = Infinity;
const numero7 = -Infinity;
const numero8 = NaN;

// Existem os tipos de dados string
const string = 'Pablo';
const string2 = "Pablo";
const string3 = `Pablo`;
const string4 = `Pablo ${string2}`;
const string5 = `Pablo ${string2} é um desenvolvedor`;

// Existem os tipos de dados de objeto
const objeto = {};
const objeto2 = { nome: 'Pablo', idade: 24 };
const objeto3 = { nome: 'Pablo', idade: 24, falar: () => console.log('Olá') };

// Existem os tipos de dados de array
const array = [];
const array2 = [1, 2, 3, 4, 5];
const array3 = ['Pablo', 'João', 'Maria'];

// Existem os tipos de dados de função
const funcao = () => console.log('Olá');
const funcao2 = function() {
    console.log('Olá');
};
