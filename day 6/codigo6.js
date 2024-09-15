const prompt = require('prompt-sync')();

function carrinhoDeCompras(){
    let listaDeCompras = [];

    while (true){
        const adicionarOuRemover = prompt('Você deseja adicionar uma comida na lista de compras ou remover um item? (adicionar/remover): ');

        if (adicionarOuRemover.toLowerCase() === 'adicionar') {
            let item = prompt('Qual item você deseja adicionar? ');
            listaDeCompras.push(item);
            console.log('Item adicionado à lista de compras!');
        } else if (adicionarOuRemover.toLowerCase() === 'remover') {
            if (listaDeCompras.length > 0) {
                console.log("Lista de compras atual:");
                for (let i = 0; i < listaDeCompras.length; i++) {
                  console.log(`${i + 1}. ${listaDeCompras[i]}`);
                }

                let itemParaRemover = prompt('Qual item você deseja remover? ');
                let itemIndex = listaDeCompras.indexOf(itemParaRemover);

                if (itemIndex !== -1) {
                    listaDeCompras.splice(itemIndex, 1);
                    console.log("Item removido da lista de compras!");
                } else {
                    console.log("Não foi possível encontrar o item dentro da lista!");
                }
            } else {
                console.log("A lista de compras está vazia!");
            }  
        } else if (adicionarOuRemover.toLowerCase() === 'sair') {
            console.log("Saindo do carrinho de compras. Até mais!");
            break;
        } else {
          console.log("Opção inválida! Por favor, digite 'adicionar', 'remover' ou 'sair'.");
        }
    }
}
carrinhoDeCompras()