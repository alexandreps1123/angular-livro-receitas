# AngularLivroReceitas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# angular-livro-receitas

Objetivo do projeto

Construir um livro de receitas com uma lista de compras

terá duas seções uma com lista de compras e outra com o livro de receitas

será possível gerenciar as receitas, visualizar em detalhes e gerenciar a lista de compras e até mesmo adicionar um ingrediente a ser compardo deretamente a lista de compras.

Recursos (features):
shopping-list
recipe-book

Componentes necessários:
root: componente principal que conterá os componentes necessários
header: onde será possível navegar entre os compoenentes
shopping-list: lista de compras e edição de lista, podendo alterar uma já existente ou criar uma lista de compras
recipe-book: lista com as receitas, itens da receita e detalhes do item selecionado e componentes para alterar ou adicionar uma nova receita 

model:
ingrediente: nome, quantidade
receita: titulo, descricao, ingredientes 

----------
$ ng new --no-strict angular-livro-receitas

utilizando CSS

Importanto bootstrap:
Instalando bootstrap localmente
	$ npm install --save bootstrap@3
	
No arquivo angular.json na tag "styles"
	"node_modules/bootstrap/dist/css/bootstrap.min.css",
	
Subir o projeto
	$ cd angular-livro-receitas
	$ ng serve
	acessar: http://localhost:4200/
