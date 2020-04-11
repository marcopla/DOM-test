console.log(window.location.href); 
const h1Selecionado = window.document.querySelector('h1');
console.log(h1Selecionado);

h1Selecionado.addEventListener('click', function(){
    console.log('clicou em ', h1Selecionado.innerText);
});

console.log('*** Exercícios ***');

// Retorne o url da página atual utilizando o objeto window
console.log(window.URL);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

console.log(document.querySelector('.ativo'));

// Retorne a linguagem do navegador

console.log(window.navigator.language);

// Retorne a largura da janela 

console.log(window.innerWidth);