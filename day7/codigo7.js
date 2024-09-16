const prompt = require('prompt-sync')();
const process = require('process');

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return 'Erro: Divisão por zero!';   
    }else{
        return a / b;
    }
}

function sair() {
    console.log('Até a próxima!')
    process.exit();
}

function conta() {
    while (true) {
        console.log("\nEscolha uma operação:");
        console.log("1 - Soma");
        console.log("2 - Subtração");
        console.log("3 - Multiplicação");
        console.log("4 - Divisão");
        console.log("5 - Sair");
    
        const opcao = parseInt(prompt("Digite o número da operação desejada:"));
        if (opcao >= 1 && opcao <= 5) {
            const valor1 = parseFloat(prompt('Digite o primeiro valor: '));
            const valor2 = parseFloat(prompt('Digite o segundo valor: '));
    
            let resultado;
    
            switch (opcao) {
                case 1:
                    resultado = soma(valor1, valor2)
                    break;
                case 2:
                    resultado = subtracao(valor1, valor2)
                    break;
                case 3:
                    resultado = multiplicacao(valor1, valor2)
                    break;
                case 4:
                    resultado = divisao(valor1, valor2)
                    break;
                case 5:
                    sair()
                    break;
                default:
                    break;
            }
            if (resultado !== undefined) {
                console.log(`O resultado é: ${resultado}`);
            } else {
                console.log("Opção inválida. Por favor, escolha um número entre 1 e 5.");
            }
        }
    }
}
conta()