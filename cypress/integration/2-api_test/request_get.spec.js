/// <reference types="cypress" />

describe('Validar requisicao do tipo GET', () => {
    it('Deve realizar uma requisicão do tipo GET e validar sua resposta', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/comments?name=alias odio sit'
        }).then((response) => {
            expect(response.body[0]).to.have.property('postId', 1)
            expect(response.body[0]).to.have.property('id', 4)
            expect(response.body[0]).to.have.property('name', 'alias odio sit')
            expect(response.body[0]).to.have.property('email', 'Lew@alysha.tv')
            expect(response.body[0]).to.have.property('body', 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati')
        })
    })
})