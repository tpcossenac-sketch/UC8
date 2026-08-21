# Mundo Disney — Integração com API

## Autor

* **Nome:** Tayla Prado Cabral de Oliveira Suares
* **Ano:** 2026

## 1. Identificação do projeto

* **Nome do projeto:** Missão 117 - Meu Disney
* **Instituição de ensino:** SENAC Vila Velha
* **Unidade curricular:** UC8 - Desenvolver Aplicações Mobile
* **Professor(a):** Rafaela Pessin

---

## 2. Sobre o projeto

> O projeto foi desenvolvido como uma galeria online de personagens da Disney, puxando informações de uma API e mostrando-as em cards em páginas de 50 itens cada.

## 3. Estrutura do projeto

```text
missao_117/
│
├── index.html
└── css
    └── style.css
├── js
    └── script.js
├── README.md
└── manifest.json
```

### Descrição dos arquivos

| Arquivo      | Descrição                                                        |
| ------------ | ---------------------------------------------------------------- |
| `index.html` | É o corpo da página, onde é criado o layout da aplicação.        |
| `style.css`  | É a estilização da página, onde tem as cores, tamanhos etc.      |
| `script.js`  | É a parte lógica do projeto, a parte que faz funcionar.          |
| `README.md`  | É o arquivo de documentação, onde é explicado o projeto.         |
| `manifest.json` | É o arquivo onde ficam guardadas as informações da API utilizada. |

---

## 💻 4. Tecnologias utilizadas

Liste as tecnologias utilizadas no desenvolvimento do projeto.

* HTML5
* CSS3
* JavaScript
* JSON
* Disney API
* VS Code

---

## 5. API utilizada

### Nome da API

**Disney API**

### Endpoint utilizado

```text
https://api.disneyapi.dev/character
```

### Para que a API foi utilizada?

> A API foi utilizada para fazer a ponte entre os personagens da Disney e o projeto.

### Quais informações foram consumidas?

> Nome e foto dos personagens.

---

##  6. Como executar o projeto

### Pré-requisitos

VS Code.

### Passo a passo

* 1° passo é abrir o GitHub e acessar o repositório do projeto;
* 2° passo é baixar o arquivo zip e extrair o conteúdo do arquivo zip para a pasta do projeto;
* 3° passo é abrir o arquivo index.html e verificar se o código está correto e completo;
* 4° passo é executar o arquivo index.html no navegador Google Chrome;
* 5° passo é verificar se os personagens estão sendo carregados corretamente;

---

## 7. Como funciona a integração

Explique de forma objetiva e em até 10 passos como sua aplicação se comunica com a API.

1. Vai no site da API Disney;
2. Pega o endpoint da API;
3. Cola o endpoint na URL do Postman;
4. Copie a resposta executada pelo Postman e cole no arquivo manifest.json;

## 8. Desafios encontrados

Registre pelo menos um problema ou dificuldade que você encontrou durante o desenvolvimento e como resolveu

### Desafio encontrado

**Problema:**

> Durante o desenvolvimento, as imagens dos personagens não ocupavam todo o espaço reservado no card e ficava uma borda amarela ao redor delas. 

**Como identifiquei o problema:**

> Observei que algumas imagens ficavam com espaços vazios dentro da área destinada à foto. Analisando o CSS, percebi que a propriedade object-fit: contain fazia a imagem inteira caber no espaço, deixando o fundo amarelo aparecer.

**Como resolvi:**

> Alterei a propriedade object-fit de contain para cover. Dessa forma, a imagem passou a preencher todo o espaço reservado para ela, sem ocupar a área branca destinada ao nome do personagem.

---

## 9. Aprendizados

> Aprendi a mexer com API e exibir as informações. Aprendi também a ler, interpretar e responder a documentação README.md.

---
