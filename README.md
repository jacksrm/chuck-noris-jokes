# Este é um pequeno projeto que utiliza a API [ChuckNorris.IO](https://api.chucknorris.io/)

## Idealização do projeto

O Objetivo deste projeto é praticar conhecientos basicos de javascript e HTML.

Os seguintes critérios devem ser implementados para que o projeto possa ser considerado concluído:

### Piada aleatória
- Deve possuir um botão que quando clicado exibe uma piada aleatória
- Ao clicar no botão, o endpoint de piada aleatória deve ser consumido e a piada deve ser exibida na página
- Somente uma piada aleatória deve ser exibida na página

### Piada aleatória por categoria
- Deve existir um botão que quando clicado exibe uma piada aleatória baseada em uma das categorias disponíveis em um select
- Ao clicar no botão, o endpoint de piada aleatória por categoria deve ser consumido e a piada deve ser exibida em página
- Somente uma piada aleatória deve ser exibida na página
- Deve existir um `select` e as categorias devem ser carregadas através da função `onload` da tag `body`.
- As categorias devem ser buscadas através do endpoint de categorias
- Deve existir uma opção padrão que já vem selecionada e que quando o botão de piada por categoria for clicado, nada deve acontecer

### Busca de piada por termo
- deve existir um `input` do tipo texto para inserção do termo de busca
- deve existir um botão que, quando clicado, busca as piadas no endpoit de pesquisa passando o termo digitado no `input` como parâmetro
- quando o input estiver vazio, o  `placeholder` do `input` deve exibir o texto "Search Term".
- quando o input estiver vazio e o botão de pesquisa for clicado, nada deve acontecer.
- todas as piadas retornadas pelo endpoind devem ser exibidas em tela.

### Para todas as requisições
- todas as requisições devem ser tratadas para que, ao falharem, um `alert` seja exibido em tela indicando que a requisição falhou
    
    Ex:
    ```javascript
    try {
      fetch('some data')
    } catch (error) {
      alert(error.message)
    }
    ```
## Como utilizar o projeto
O Projeto possui duas branchs. A branch principal contém todo o conteúdo necessário para começar a realizar o projeto. A branch `solution` contém uma possível solução para o projeto que pode ser consultada como exemplo.

Portanto, para utilizar o projeto, basta clonar a branch principal e começar a desenvolver o projeto. Qualquer dúvida, basta consultar o projeto resolvido para ter algumas ideias.

Recomendo utilizar o VSCode como IDE de desenvolvimento e usar a extensão LiveServer para servir o arquivo index.html.

OBS: O Projeto ja foi configurado com um css padrão e a font 'Courier Prime' foi integrada ao projeto através do google fonts.