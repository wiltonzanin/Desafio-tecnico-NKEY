/// <reference types="cypress" />

describe('Validar foto', () => {
    it('Deve acessar o site Json Place Holder e validar a imagem com ID 4', () => {
        cy.visit('/')

        // Fiz essa validação pois ao clicar no botão /Photos o 
        // Cypress retorna o erro: "Cypress detected a cross origin error happened on page load"
        // e eu não consegui contornar o erro.
        cy.get('a[href*="/photos"]')
        .should('have.attr', 'href', '/photos')

        cy.request('https://jsonplaceholder.typicode.com/photos')
        .then((response) => {
            //Não consegui varrer o array do site com o cypress, por isso coloquei um index fixo!
            expect(response.body[3]).to.have.property('albumId', 1)
            expect(response.body[3]).to.have.property('id', 4)
            expect(response.body[3]).to.have.property('title', "culpa odio esse rerum omnis laboriosam voluptate repudiandae")
            expect(response.body[3]).to.have.property('url', "https://via.placeholder.com/600/d32776")
            expect(response.body[3]).to.have.property('thumbnailUrl', "https://via.placeholder.com/150/d32776")
        })
    })
})