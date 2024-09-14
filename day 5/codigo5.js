const prompt = require('prompt-sync')();

function carrinhoDeCompras(){

    let frutas = [];
    let laticinios = [];
    let congelados = [];
    let doces = [];

    
    let fraseAdicionar = prompt('Você deseja adicionar algo ao seu carrinho? ')
    while (fraseAdicionar.toLowerCase() === 'sim') {
        let escolhaTipo = prompt('Você deseja adicionar ao carrinho frutas, laticinios, congelados ou doces? ')

    if (escolhaTipo.toLowerCase() === 'frutas') {
        let itemCarrinhoFruta = prompt('Qual fruta você gostaria de adicionar ao seu carrinho? ')
        frutas.push(itemCarrinhoFruta)
        console.log('Fruta adicionada ao carrinho!')
    } else if (escolhaTipo.toLowerCase() === 'laticinios') {
        let itemCarrinhoLaticinios = prompt('Qual fruta você gostaria de adicionar ao seu carrinho? ')
        laticinios.push(itemCarrinhoLaticinios)
        console.log('Lacticínios adicionado ao carrinho!')
    } else if (escolhaTipo.toLowerCase() === 'congelados') {
        let itemCarrinhoCongelado = prompt('Qual congelado você gostaria de adicionar ao seu carrinho? ');
        congelados.push(itemCarrinhoCongelado); 
        console.log("Congelado adicionado ao carrinho!");
    } else if (escolhaTipo.toLowerCase() === 'doces') {
        let itemCarrinhoDoce = prompt('Qual doce você gostaria de adicionar ao seu carrinho? ');
        doces.push(itemCarrinhoDoce);
        console.log("Doce adicionado ao carrinho!");
    } else{
        console.log('Opção invalida!')
        console.log('Escolha entre frutas, lacticinios, congelados ou doces')
    }

    fraseAdicionar = prompt('Você deseja adicionar algo ao seu carrinho? ');
    }

    console.log("Seu carrinho de compras:");
    console.log("Frutas:", frutas);
    console.log("Laticínios:", laticinios);
    console.log("Congelados:", congelados);
    console.log("Doces:", doces);
}

carrinhoDeCompras()