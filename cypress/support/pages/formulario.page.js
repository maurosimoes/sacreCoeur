import { formularioElements } from "../elements/formulario.elements";

export class FormularioPage {
  visit(url) {
    cy.ignoreUnknownErrors();
    cy.visit(url);
    cy.get(formularioElements.formTittle).should("be.visible");
  }

  fillDataFields(elemento, valor) {
    cy.get(elemento).should("be.visible").type(valor, {delay : 0});
  }

  selectOption(elemento, valor) {
    cy.get(elemento).should("be.visible").select(valor);
  }

  clickCheckbox(elemento, valor) {
    cy.get(elemento).contains(valor).should("be.visible").click();
  }

  markCheckbox(elemento, valor) {
    cy.get(elemento).should("be.visible").check(valor);
  }

  clickButton(elemento) {
    cy.get(elemento).should("be.visible").click();
  }

  validateElement(elemento) {
    cy.get(elemento).should("be.visible");
  }
}
