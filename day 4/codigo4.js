const prompt = require('prompt-sync')();

const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 3



while (tentativas > 0) {
        const palpite = prompt('Advinhe o número entre 1 a 10: ');
    if (palpite == numeroSecreto) {
        console.log('\nParabéns! Você acertou o número ' + numeroSecreto + ' em ' +  tentativas+ ' tentativas.');
        break;
    } else if (palpite < numeroSecreto ) {
        tentativas--;
        console.log('O número secreto é maior. Tente novamente. Você tem mais '+ tentativas + ' tentativas');
    } else {
        tentativas--;
        console.log('O número secreto é menor. Tente novamente. Você tem mais '+ tentativas + ' tentativas');
    }
}

if (tentativas <= 0) {
    console.log('\nSuas tentativas acabaram, quem sabe você acerte da proxima vez. O número secreto era ' + numeroSecreto + '.')
}
