import * as homePage from '../support/page_objects/home_page';
import * as resultadoBusca from '../support/page_objects/resultado_busca';

describe("Realizar pesquisa no OLX", () => {
    
    homePage.visita();

    it("Realizar pesquisa imprimindo titulo e valor dos cinco primeiros resultados", () =>{
        homePage.campo_busca();
        homePage.botao_busca();
        resultadoBusca.verificar_titulo();
        resultadoBusca.verificar_valor();
    });

    it("Realizar pesquisa printando primeira e segunda pagina", () =>{
        homePage.campo_busca();
        homePage.botao_busca();
        resultadoBusca.proxima_pagina();
    });

});