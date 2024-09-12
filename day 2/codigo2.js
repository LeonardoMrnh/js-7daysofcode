const prompt = require('prompt-sync')();

const nome = prompt('Como se chama? ');
const idade = prompt('Qual sua idade? ');
const linguagem = prompt('Qual linguagem está estudando? ');
const mensagem = `"Olá ${nome}, você tem ${idade}, anos e já está aprendendo ${linguagem}!"\n`

console.log(mensagem);

const pergunta = prompt(`Você gosta de estudar ${linguagem}? Responda com sim ou nao `);

if(pergunta === 'sim'){
    console.log('Muito bom! Continue estudando e você terá muito sucesso.');
}else{
    console.log('Ahh que pena... Já tentou aprender outras linguagens?');
}