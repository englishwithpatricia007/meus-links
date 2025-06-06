# Meus Links

Projeto React para encurtar e gerenciar links pessoais.

## Estado Atual

- **Frontend pronto:** Interface para encurtar links, exibir links salvos e excluir links.
- **Backend NÃO implementado:** O encurtamento real depende de uma API externa (endpoint `/shorten`). Caso a API não responda corretamente, será exibida a mensagem "Parece que algo deu errado!".
- **Links salvos localmente:** Os links encurtados são armazenados no `localStorage` do navegador.
- **Lista de links:** Página "Meus Links" exibe os links salvos, com opção de exclusão.
- **Menu fixo:** Links para LinkedIn, GitHub, YouTube, Instagram e Cartão de apresentação.
- **Navegação:** Utiliza React Router.

## Tecnologias Utilizadas

- React 19
- React Router DOM 7
- React Icons
- CSS Modules
- Axios
- API externa - Bitly

## Como rodar o projeto

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o servidor de desenvolvimento
   ```sh
   npm start
   ```

Observações
O projeto está em desenvolvimento inicial.
Não há backend próprio; o encurtamento depende de uma API externa.
Os links exibidos são salvos apenas no navegador do usuário.
Caso a API de encurtamento não funcione, a aplicação exibirá um alerta de erro.
