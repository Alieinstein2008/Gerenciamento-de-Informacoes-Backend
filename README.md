# Gerenciamento-de-Informacoes-Backend

## Introdução

Este projeto visou a resolução de um problema pessoal que eu possuía por ter uma loja de calçados por encomenda em desenvolvimento. Sobre essa questão, possuía a necessidade de toda vez que um cliente me contactava para um pedido e por fim o finalizava, para manter de certa forma um controle de informações, eu inseria as informações passadas pelo cliente em uma planilha de Excel, o que era algo simples de começo mas ao pensar em um negócio de longo prazo, isso em alguma hora se tornaria muito maçante de se realizar. Por isso, estou desenvolvendo um sistema que irá me permitir gerenciar todas as informações imprescindíveis relacionadas ao meu negócio em desenvolvimento.

## Aspectos Técnicos:
Para o Backend foi utilizado Node.js em conjunto com o framework Express.js para a criação do servidor web e o ORM Sequelize para manusear a conexão com o Banco de Dados, que neste caso é um Banco de Dados relacional embutido(SQLite) que eu utilizei pela simplicidade e pelo desenvoolvimento de algo restrito ao meu ambiente de desenvolvimento.

Em questão das rotas, o servidor atende e trata requisições CRUD, ou seja, criação, leitura, atualização e exclusão de entidades, como a entidade Cliente, que é instanciada no arquivo cliente.mjs na pasta Model, onde é especificado os atributos e relacionamentos da mesma.

>[!NOTE]
Analise melhor o código Cliente.mjs seguinte, onde é estanciada a classe Cliente que a partir do Sequelize é transformada em uma tabela no Banco de Dados.
>
>[Analise o código clicando aqui](api/src/models/Cliente.mjs)

>[!NOTE]
Analise melhor o código Cliente.mjs seguinte, onde é especificado os metodos CRUD responsaveis por tratar todas as requisições à api.
>
>[Analise o código clicando aqui](api/src/controllers/clienteController.mjs)
