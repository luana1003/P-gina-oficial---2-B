//Códigos gerais da página

//Variável com o título da seção principal ("Bem-vindo(a) à página oficial do 2ºB!")
let textoWelcome = document.querySelector(".secao__principal__titulo ");

//Função para aplicar o efeito de digitação no texto da seção principal
function aplicarEfeitoDigitado(textoASerDigitado) {
  const textoTitulo = textoASerDigitado.innerHTML.split('');
  textoASerDigitado.innerHTML = ' ';

  textoTitulo.forEach(function(letra, i) {
    setTimeout(function() {
      textoASerDigitado.innerHTML += letra;
    }, 75 * i)

  });
}
aplicarEfeitoDigitado(textoWelcome);


//Quando houver o scroll da página, a fixação do cabeçalho (header) será chamada conforme suas especificações
window.onscroll = function() {
  fixarCabecalho();
};


//Função para controlar a fixação do cabeçalho (header) dentro da página HTML.
function fixarCabecalho() {
  var cabecalho = document.querySelector('header');
  var secaoFixada = document.querySelector(".secao__principal");
  var distancia = secaoFixada.offsetTop;

  if (window.pageYOffset > distancia) {
    cabecalho.style.display = 'none';
  } else {
    cabecalho.style.display = 'flex';
  }
}

