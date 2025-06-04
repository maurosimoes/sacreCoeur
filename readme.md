# SacreCoeur

Automação de testes end-to-end utilizando [Cypress](https://www.cypress.io/) com [Cucumber](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor).

## Estrutura do Projeto

```
.
├── cypress/
│   ├── config/
│   │   └── address.json
│   ├── e2e/
│   │   └── formulario.feature
│   ├── support/
│   │   ├── commands.js
│   │   ├── e2e.js
│   │   ├── elements/
│   │   │   └── formulario.elements.js
│   │   ├── steps/
│   │   │   └── formulario.steps.js
│   │   └── pages/
│   │       └── formulario.page.js
├── cypress.config.js
├── package.json
└── readme.md
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado v16+)
- [npm](https://www.npmjs.com/)

## Instalação

1. Clone o repositório:
   ```sh
   git clone git@github.com:maurosimoes/sacreCoeur.git
   cd sacreCoeur
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

## Executando os Testes

Para abrir o Cypress com o Cucumber Preprocessor:

```sh
npm run cypress
```

Isso abrirá a interface gráfica do Cypress, onde você pode selecionar e rodar os testes definidos em `.feature`.

## Configuração

- O arquivo de configuração do Cypress está em `cypress.config.js`.
- Os arquivos de steps do Cucumber ficam em `cypress/support/steps/`.
- Os elementos da página estão em `cypress/support/elements/formulario.elements.js`.
- As páginas estão em `cypress/support/pages/formulario.page.js`.
- Os endereços de teste estão em `cypress/config/address.json`.

## Estrutura dos Testes

- Os cenários de teste são escritos em Gherkin no arquivo `cypress/e2e/formulario.feature`.
- As implementações dos steps estão em `cypress/support/steps/formulario.steps.js`.

## Contribuição

1. Fork este repositório.
2. Crie uma branch para sua feature ou correção: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'Minha nova feature'`
4. Push para a branch: `git push origin minha-feature`
5. Abra um Pull Request.

## Licença

Este projeto está sob a licença MIT.
