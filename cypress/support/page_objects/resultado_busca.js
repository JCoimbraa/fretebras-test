/// <reference types="Cypress"/>

export function proxima_pagina() {
    cy.get('[data-lurker-detail=next_page]').click()
    cy.get('[data-lurker-detail=list_id]').first().screenshot({ padding: 10 })
}

export function verificar_titulo() {
    cy.get('.fnmrjs-0').each(($element,$index)=> {
        if($index <= 4){
            cy.wrap($element).find('h2').invoke('text').then((text) => {
                expect(text).contains(text.trim())
            })
        }
    })   
}

export function verificar_valor() {
    cy.get('.fnmrjs-0').each(($element,$index)=> {
        if($index <= 4){
            cy.wrap($element).find('.jqSHIm').invoke('text').then((value) => {
                expect(value).equal(value.trim())
            })
        }
    })
}