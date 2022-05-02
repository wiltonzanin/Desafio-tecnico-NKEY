/// <reference types="cypress" />

describe('Validar requisicao do tipo POST', () => {
    it('Deve realizar uma requisicão do tipo POST e validar sua resposta', () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/users',
            body: {
                "title": "Requisicao tipo POST",
                "body": "json",
                "userId": "1"
            }
        }).then((response) => {
            expect(response.status).eq(201)
            expect(response.body).to.have.property('title', "Requisicao tipo POST")
            expect(response.body).to.have.property('body', "json")
            expect(response.body).to.have.property('userId', "1")
            expect(response.body).to.have.property('id', 11)
        })
    })
})