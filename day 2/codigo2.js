const prompt = require('prompt-sync')();

let nome = 'Leonardo';
let idade = 21;
let linguagem = 'javaScript';

console.log(`Olá ${nome}, você tem ${idade}, anos e já está aprendendo ${linguagem}`);

const pergunta = prompt(`Você gosta de estudar ${linguagem}?: `);

if(pergunta === 'sim'){
    console.log('Muito bom! Continue estudando e você terá muito sucesso.');
}else{
    console.log('Ahh que pena... Já tentou aprender outras linguagens?');
}