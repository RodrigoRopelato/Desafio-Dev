# 💻 Desafio Dev

Esse desafio foi feito baseado no framework [NextJs](https://nextjs.org/) que tem como base o [ReactJs](https://pt-br.legacy.reactjs.org/)

O desafio proposto requer a extração de dados de um arquivo e a construção de uma estrutura de dados manipulável. Para tal, dispomos de uma lista de produtos em formato Excel (xlsx).

A tarefa primordial consiste na extração dos dados deixando em uma estrutura de fácil manipulaçao, após extrair os dados eles podem ser adicionados em um `console.log` ou até mesmo serem mostrados na tela de forma simples.

Caso deseje adicionar valor ao desafio, fique encorajado a usar a criatividade, apresente os itens da lista na tela para o usuário, adicionando estilo e cores.

Boa sorte!

## ⚙️ Instalação

#### Baixe o desafio na sua máquina.<br>

```bash
  git clone https://github.com/HasarBrasil/desafioDev.git
```

#### Acesse a pasta do projeto e instale as dependências:

```bash
  cd desafioDev && npm i
```

#### Start:

```bash
  npm run dev
```


## 😀 Diferencial `opcional`

Tirou de letra e quer ir além?<br>Tente adicionar um dos recursos abaixo:

- Listar os itens com suas informações em uma tabela (cards/linhas)
- Hospedagem do projeto em alguma plataforma (de sua preferência)
- Persistência dos dados (Banco de dados | Storage)

## 💡 Dica

Para ajudar você nesse desafio deixamos abaixo duas ferramentas que podem lhe ajudar.

📕 [ExcelJs](https://github.com/exceljs/exceljs)

📔 [SheetJS](https://sheetjs.com/)

## 🚀 Como o desafio deve ser entregue

Após a conclusão do desafio, o link do repositório deve ser enviado para `guilherme.m@hasarbrasil.com.br` assim a nossa equipe técnica poderá avaliar a sua resolução.




## Solução implementada.

Utilizada a biblioteca SheetJS.

Retornado o arquivo via console.log.

Retornado em Tela, para o retorno em tela optei por deixar a exibição dinamica, de forma que exiba os dados de qualquer planilha.

