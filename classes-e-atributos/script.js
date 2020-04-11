const menu = document.querySelector('.titulo');

menu.classList.add('ativo','feliz');

menu.classList.remove('ativo');

menu.classList.toggle('testeToggle');

if (menu.classList.contains('testeToggle'))
  console.log('Elemento contém a classe testeToggle');

menu.className += ' vermelho';
console.log(menu.className);

const animais = document.querySelector('.animais');

//Atributo
console.log(animais.attributes);
console.log(animais.attributes[0]);
console.log(animais.attributes.id);
console.log(animais.attributes.class);
console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');
//Puxa atributo
console.log(img.getAttribute('src'));
//Atribui atributo, pode ser até um atributo que não existe no HTML 
img.setAttribute('alt', 'É uma raposa.');
console.log(img.getAttribute('alt'));
// retorna se tem atributo
const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);
/////////////////////////////////////////////////////
console.log('*** Exercícios ***');
// Adicione a classe ativo a todos os itens do menu
const menu2 = document.querySelectorAll('.menu a');

menu2.forEach((elemento)=> elemento.classList.add('ativo'));

console.log(menu2);
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu2.forEach((item, index) => {
  if(index > 0)
    item.classList.remove('ativo');
});

console.log(menu2);
// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img');

imagens.forEach((elemento) => verificaSeTemAtributo(elemento));

function verificaSeTemAtributo(elemento){
  elemento.hasAttribute('alt') ? console.log('Tem o atributo alt'): console.log('Não tem o atributo');
}
// Modifique o href do link externo no menu
console.log(menu2);
const linkExterno = document.querySelector('a[href^="http"]')

linkExterno.setAttribute('href', 'https://google.com.br/');
console.log(linkExterno); 
//menu2.setAttribute('href', 'http://google.com.ber');







