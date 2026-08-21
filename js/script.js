// ENDPOINT DA API
const apiUrl = 'https://api.disneyapi.dev/character';


// CONFIGURAÇÕES
let paginaAtual = 1;
const personagensPorPagina = 50;
let personagensCarregados = 0;


// ELEMENTOS DO HTML
const botaoCarregar = document.getElementById('carregarMais');
const mensagem = document.getElementById('contador');
const pagina = document.getElementById('pagina');
const container = document.getElementById('personagens');


// FUNÇÃO PARA CARREGAR OS PERSONAGENS
function carregarPersonagens() {

    botaoCarregar.disabled = true;      // Desabilita o botão enquanto a API responde
    mensagem.textContent = 'Carregando personagens...';

    // MONTA A URL DA REQUISIÇÃO
    let url = `${apiUrl}?page=${paginaAtual}&pageSize=${personagensPorPagina}`;


    // O FETCH() FAZ UMA REQUISIÇÃO HTTP PARA A API
    fetch(url)

        // CONVERTE A RESPOSTA PARA JSON
        .then(function (resposta) {
            return resposta.json();
        })


        // MANIPULA OS DADOS RECEBIDOS
        .then(function (resultado) {

            // MOSTRA OS DADOS RECEBIDOS NO CONSOLE
            console.log(resultado);


            // PERCORRE CADA PERSONAGEM RECEBIDO
            resultado.data.forEach(function (personagem) {

                // CRIA O CARD DO PERSONAGEM
                criarCard(personagem);

            });


            // ATUALIZA A QUANTIDADE DE PERSONAGENS CARREGADOS
            personagensCarregados += resultado.data.length;

            mensagem.textContent =
                `${personagensCarregados} personagens carregados`;


            // MOSTRA A PÁGINA ATUAL
            pagina.textContent =
                `Página ${paginaAtual}`;


            // HABILITA O BOTÃO NOVAMENTE
            botaoCarregar.disabled = false;

        })

        // CASO ACONTEÇA ALGUM ERRO
        .catch(function (erro) {

            console.error('Erro ao carregar personagens:', erro);

            mensagem.textContent =
                'Erro ao carregar os personagens.';

            botaoCarregar.disabled = false;

        });
}


// FUNÇÃO PARA CRIAR O CARD DE CADA PERSONAGEM
function criarCard(personagem) {

    // CRIA O CARD
    const card = document.createElement('div');

    card.classList.add('card');


    // CRIA A IMAGEM
    const imagem = document.createElement('img');

    imagem.src = personagem.imageUrl;

    imagem.alt = personagem.name;


    // CRIA O NOME
    const nome = document.createElement('h2');

    nome.textContent = personagem.name;


    // COLOCA A IMAGEM E O NOME DENTRO DO CARD
    card.appendChild(imagem);

    card.appendChild(nome);


    // COLOCA O CARD DENTRO DO CONTAINER
    container.appendChild(card);

}


// EVENTO DE CLIQUE NO BOTÃO
botaoCarregar.addEventListener('click', function () {

    // AVANÇA PARA A PRÓXIMA PÁGINA
    paginaAtual++;

    // CARREGA OS NOVOS PERSONAGENS
    carregarPersonagens();

});


// CARREGA OS PRIMEIROS PERSONAGENS AO ABRIR A PÁGINA
carregarPersonagens();