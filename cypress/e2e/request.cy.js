/// <reference types="cypress"/>

describe('Exercise 1', () => {
    it('Body Test', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.length).to.be.greaterThan(0);
            expect(response.body.length).to.be.eq(10);
        })
    })
    it('Should contain user with specific name', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((response) => {
            expect(response.status).to.eq(200);    
            const users = response.body;
            expect(users.some(user => user.name === 'Leanne Graham')).to.be.true;
        });
    });
    
    it('All users have emails', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((response) => {
            expect(response.status).to.equal(200); 
            response.body.forEach(user => {
                expect(user.email).to.exist;
            });
        });
    });
    it('Should contain comment with email', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/comments').then((response) => {
            expect(response.status).to.eq(200);    
            const comments = response.body;
            expect(comments.some(comment => comment.email === 'Nikita@garfield.biz')).to.be.true;
        });
    });
    it('All comments have id', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/comments').then((response) => {
            expect(response.status).to.equal(200); 
            response.body.forEach(comment => {
                expect(comment.id).to.exist;
            });
        });
    });
})