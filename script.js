// ====================================================================================================================================================================================
// FASE 1: Alterar o texto dentro da caixinha
// COMPORTAMENTO: 
// --> A tela inicia com o texto “O JavaScript pode alterar o conteúdo de um elemento HTML”. 
// --> Ao clicar no botão “Alterar texto” o texto deve ser alterado para “Olá, JavaScript! O texto foi trocado!”. 
// --> O botão “Resetar” volta o resultado para o texto inicial.

// >>> CRIE AS FUNÇÕES PARA ALTERAR O TEXTO E RESETAR O TEXTO DO BOX 1 <<<
// ====================================================================================================================================================================================

const demo1 = document.getElementById('demo1');
const botaoAlterarTexto = document.getElementById('botao-alterar-texto');
const botaoResetarDemo1 = document.getElementById('botao-resetar-demo1');
const textoOriginal = demo1.innerText;

function alterarConteudo() {

  //Essa linha serve para pegar o 'demo1' (id) e alterar o texto
  demo1.textContent = 'Olá, JavaScript! O texto foi trocado!';
}


function resetarConteudo() {
  //Volta o texto original
  demo1.textContent = textoOriginal;
}

botaoAlterarTexto.addEventListener('click', alterarConteudo);
botaoResetarDemo1.addEventListener('click', resetarConteudo);

// ====================================================================================================================================================================================
// FASE 2: LIGAR E DESLIGAR LÂMPADA
// COMPORTAMENTO: 
// --> A tela inicia com a lâmpada desligada. 
// --> Ao clicar no botão “Ligar a luz” a lâmpada deve ligar.
// --> Quando clicar em “Desligar a luz” a lâmpada deve desligar.

// >>> CRIE AS FUNÇÕES PARA LIGAR E DESLIGAR A LÂMPADA DO BOX 2 <<<
// ====================================================================================================================================================================================

const lampadaApagada = document.getElementById('lamp-off');
const lampadaLigada = document.getElementById('lamp-on');

const botaoLigar = document.getElementById('botao-ligar');
const botaoDesligar = document.getElementById('botao-desligar');

function ligarLampada() {

  // esa linha esconde a lâmpada apagada e mostra a lâmpada ligada
  lampadaApagada.style.display = 'none';
  lampadaLigada.style.display = 'block';

}

function desligarLampada() {

  // essa linha esconde a lâmpada ligada e mostra a lâmpada apagada
  lampadaApagada.style.display = 'block';
  lampadaLigada.style.display = 'none';

}

botaoLigar.addEventListener('click', ligarLampada);
botaoDesligar.addEventListener('click', desligarLampada);


// ====================================================================================================================================================================================
// FASE 3: Alterar os estilos do texto
// COMPORTAMENTO: 
// --> A tela inicia com o texto “O JavaScript pode alterar o estilo visual de qualquer elemento”, sem nenhum estilo aplicado.
// --> Ao clicar no botão “Aumentar fonte”, o tamanho da letra deve aumentar para 25px.
// --> Ao clicar no botão “Mudar cor”, a cor do texto deve ficar verde. Ao clicar no botão “Negrito”, o texto fica em negrito.
// --> Ao clicar no botão “Fundo”, é aplicado um fundo com transparência no texto. 
// --> O botão “Resetar” volta o resultado para o texto inicial.

// >>> CRIE AS FUNÇÕES PARA AUMENTAR TAMANHO DA FONTE, MUDAR A COR, APLICAR NEGRITO, APLICAR FUNDO E RESETAR A DEMONSTRAÇÃO DO BOX 3 <<<
// ====================================================================================================================================================================================

const demo3 = document.getElementById('demo3');
const botaoAumentarFonte = document.getElementById('botao-aumentar-fonte');
const botaoMudarCor = document.getElementById('botao-mudar-cor');
const botaoNegrito = document.getElementById('botao-negrito');
const botaoFundo = document.getElementById('botao-fundo');
const botaoResetarDemo3 = document.getElementById('botao-resetar-demo3');

function aumentarFonte() {
  // essa linha serve para aumentar o tamanho da fonte do texto
  demo3.style.fontSize = '25px';
}

function mudarCor() {
  // essa linha serve para mudar a cor do texto
  demo3.style.color = 'green';
}

function aplicarNegrito() {
  // essa linha serve para aplicar negrito
  demo3.style.fontWeight = 'bold';
}

function aplicarFundo() {
  // essa linha serve para aplicar fundo com transparência
  demo3.style.backgroundColor = 'rgba(255, 0, 221, 0.5)';
}


function resetarDemonstracao() {
  // essa linha serve para resetar e trazer de volta ao original
  demo3.style.fontSize = '16px';
  demo3.style.color = '#e8eaf6';
  demo3.style.fontWeight = 'normal';
  demo3.style.backgroundColor = 'transparent';
}

botaoAumentarFonte.addEventListener('click', aumentarFonte);
botaoMudarCor.addEventListener('click', mudarCor);
botaoNegrito.addEventListener('click', aplicarNegrito);
botaoFundo.addEventListener('click', aplicarFundo);
botaoResetarDemo3.addEventListener('click', resetarDemonstracao);

// ====================================================================================================================================================================================
// FASE 4: Ocultar o texto
// COMPORTAMENTO: 
// --> A tela inicia com o texto “Este parágrafo vai sumir quando você clicar no botão abaixo.”.
// --> Ao clicar no botão “Ocultar elemento”, o texto deve sumir. 
// --> O botão “Resetar” volta o resultado para o texto inicial.

// >>> CRIE AS FUNÇÕES PARA OCULTAR ELEMENTO E MOSTRAR ELEMENTO DO BOX 4 <<<
// ======================================================================================================================================================================================

const demo4 = document.getElementById('demo4');
const botaoOcultarElemento = document.getElementById('botao-ocultar');
const botaoMostrarElemento = document.getElementById('botao-mostrar');

function ocultarElemento() {
  // essa linha serve para ocultar o elemento
  demo4.style.display = 'none';
}


function mostrarElemento() {
  // essa linha serve para mostrar o elemento
  demo4.style.display = 'block';
}

botaoOcultarElemento.addEventListener('click', ocultarElemento);
botaoMostrarElemento.addEventListener('click', mostrarElemento);



// ====================================================================================================================================================================================
// FASE 5: Exibir o texto
// COMPORTAMENTO: 
// --> A tela inicia com um texto oculto. 
// --> Ao clicar no botão “Revelar elemento”, o texto deve aparecer. 
// --> O botão “Resetar” volta o resultado para o texto inicial.

// >>> CRIE AS FUNÇÕES PARA MOSTRAR TEXTO E OCULTAR TEXTO DO BOX 5 <<<
// ====================================================================================================================================================================================

const demo5Hint = document.getElementById('demo5-hint');
const hiddenText = document.getElementById('hidden-text');
const botaoRevelar = document.getElementById('botao-revelar');
const botaoEsconder = document.getElementById('botao-esconder');

function exibirTexto() {
  // essa linha serve para mostrar o texto
  hiddenText.style.display = 'block';
}


function esconderTexto() {
  // essa linha serve para ocultar o texto
  hiddenText.style.display = 'none';
}

botaoRevelar.addEventListener('click', exibirTexto);
botaoEsconder.addEventListener('click', esconderTexto);

// ====================================================================================================================================================================================
// FASE 6: Iniciar a aplicação
// COMPORTAMENTO:
// --> O index.html será executado 
// --> Em seguida, a linha "document.addEventListener('DOMContentLoaded', iniciarAplicacao);" vai chamar a função iniciarAplicacao()
// --> A função será executada e dentro dela terá outras chamadas de função (as que você criou ali em cima - FASE 1 a 5)
// --> Essas chamadas de função devem executar as funções que você programou na sua página

// >>> CRIE A FUNÇÃO PARA INICIAR A APLICAÇÃO, QUE SERÁ CHAMADA PELA LINHA document.addEventListener('DOMContentLoaded', iniciarAplicacao); <<<
// ====================================================================================================================================================================================

function iniciarAplicacao() {
  //         --------------------------------------------------------
  // FASE 1: Configure e chame as funções que irão alterar 
  // e resetar o texto dentro da caixinha
  // --------------------------------------------------------

  resetarConteudo();

  // --------------------------------------------------------
  // FASE 2: Configure e chame as funções que irão ligar e
  // desligar a lâmpada
  // --------------------------------------------------------

  desligarLampada();

  // --------------------------------------------------------
  // FASE 3: Configure e chame as funções que irão alterar
  // os estilos do texto
  // --------------------------------------------------------

  resetarDemonstracao();

  // --------------------------------------------------------
  // FASE 4: Configure e chame as funções que irão ocultar e
  // mostrar o elemento
  // --------------------------------------------------------

  mostrarElemento();

  // --------------------------------------------------------
  // FASE 5: Configure e chame as funções que irão ocultar e
  // mostrar o texto
  // -------------------------------------------------------

  esconderTexto();

}
document.addEventListener('DOMContentLoaded', iniciarAplicacao);