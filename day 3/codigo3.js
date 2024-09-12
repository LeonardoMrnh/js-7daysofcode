const prompt = require('prompt-sync')();

  function escolherCaminho() {
    const area = prompt('Você deseja seguir para a área de Front-End ou seguir para a área de Back-End? ');
  
    if (area.toLowerCase() === 'front-end') {
      const mensagemFrontEnd = prompt('Caso opte pela área de Front-End, deseja aprender React ou aprender Vue? ');
      if (mensagemFrontEnd.toLowerCase() === 'react') {
        const mensagemFullStack = prompt('Você quer se especializar em React ou se tornar Fullstack? ');
        if (mensagemFullStack.toLowerCase() === 'react') {
          console.log("Que legal! Você escolheu se especializar em React. Boa sorte!");
        } else if (mensagemFullStack.toLowerCase() === 'fullstack') {
          console.log("Que legal! Você escolheu se tornar Fullstack. Boa sorte!");
        } else {
          console.log('"Opção inválida. Por favor, escolha React ou Fullstack."');
        }
      } else if (mensagemFrontEnd.toLowerCase() === 'vue') {
        const mensagemFullStack = prompt('Você quer se especializar em Vue ou se tornar Fullstack? ');
        if (mensagemFullStack.toLowerCase() === 'vue') {
          console.log("Que legal! Você escolheu se especializar em Vue. Boa sorte!");
        } else if (mensagemFullStack.toLowerCase() === 'fullstack') {
          console.log("Que legal! Você escolheu se tornar Fullstack. Boa sorte!");
        } else {
          console.log('"Opção inválida. Por favor, escolha Vue ou Fullstack."');
        }
      } else {
        console.log('"Opção inválida. Por favor, escolha React ou Vue."');
      }
    } else if (area.toLowerCase() === 'back-end') {
      const mensagemBackEnd = prompt('Caso opte pela área de Back-End, deseja aprender C# ou Java? ');
      if (mensagemBackEnd.toLowerCase() === 'c#') {
        const mensagemFullStack = prompt('Você quer se especializar em C# ou se tornar Fullstack? ');
        if (mensagemFullStack.toLowerCase() === 'c#') {
          console.log('Que legal! Você escolheu se especializar em C#. Boa sorte!');
        } else if (mensagemFullStack.toLowerCase() === 'fullstack') {
          console.log('Que legal! Você escolheu se tornar Fullstack. Boa sorte!');
        } else {
          console.log('Opção inválida. Por favor, escolha C# ou Fullstack.');
        }
      } else if (mensagemBackEnd.toLowerCase() === 'java') {
        const mensagemFullStack = prompt('Você quer se especializar em Java ou se tornar Fullstack? ');
        if (mensagemFullStack.toLowerCase() === 'java') {
          console.log('Que legal! Você escolheu se especializar em Java. Boa sorte!');
        } else if (mensagemFullStack.toLowerCase() === 'fullstack') {
          console.log('Que legal! Você escolheu se tornar Fullstack. Boa sorte!');
        } else {
          console.log('Opção inválida. Por favor, escolha Java ou Fullstack');
        }
      } else {
        console.log('"Opção inválida. Por favor, escolha C# ou Java.');
      }
    } else {
      console.log('Opção inválida. Por favor, escolha Front-End ou Back-End.');
    }
  

  const maisTecnologias = 'sim';
  while (maisTecnologias.toLowerCase === 'sim') {
    const tecnologia = prompt('Tem mais alguma tecnologia que você gostaria de aprender? ')
    if (tecnologia.toLowerCase() === 'sim') {
      const novaTecnologia = prompt('Qual tecnologia? ')
      console.log = (`Legal! ${novaTecnologia} é uma ótima escolha!`)
      console.log = ('O React é uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces com o usuário. Ele permite compor UIs complexas a partir de pequenos e isolados códigos chamados “componentes”. Nós falaremos sobre formatos engraçados de tags que possuem formato de XML em breve.')
      
    } else{
      maisTecnologias = 'nao';
    }
  }

  console.log = ('Que ótimo! Espero que tenha gostado do guia. Boa sorte na sua jornada!');

}
  escolherCaminho();



