/// <reference types="cypress" />

describe('Validar requisicao do tipo PUT', () => {
    it('Deve realizar uma requisicão do tipo PUT e validar sua resposta', () => {
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/users/1',
            body: {
                "title": "Requisicao tipo PUT",
                "body": "json",
                "userId": "1"
            }
        }).then((response) => {
            expect(response.status).eq(200)
            expect(response.body).to.have.property('body', "json")
            expect(response.body).to.have.property('id', 1)
            expect(response.body).to.have.property('title', "Requisicao tipo PUT")
            expect(response.body).to.have.property('userId', "1")
        })
    })
})