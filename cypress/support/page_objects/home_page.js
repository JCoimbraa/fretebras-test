/// <reference types="Cypress"/>

export function visita() {
    beforeEach(() => cy.visit('/'));
}

export function campo_busca() {
    cy.get('[type=search]').type("Pug")
}

export function botao_busca() {
    cy.get('[type=submit]').click()
}