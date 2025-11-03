// assert display interval

// assert timestamp, entry point, welcome message

// assert clicking on riddle & navigation

// assert riddle page (possible split of scenarios into smaller tests)

import { App } from '../App';

describe('RandomRiddle.', () => {
    before(() => {
        cy.mount(<App />, '/')
        cy.intercept('GET', 'http://localhost:3000/riddles', { body: [{
                "id": "1",
                "contents": "At my post, I watch them dance, moving dots both near and far, but one stands still and claims to cross the path of all who dare to pass.<br /><br />What is it?",
                "answers": [
                    {
                        "id": "1",
                        "text": "A holding pattern"
                    },
                    {
                        "id": "2",
                        "text": "An obstacle/tower"
                    },
                    {
                        "id": "3",
                        "text": "A runway intersection"
                    }
                ]
            }]})
    })

    it('sees a landing page & navigate to random riddle', () => {
        cy.getByTestId('work-interval-text').should('be.visible')
        cy.getByTestId('timestamp-text').should('be.visible')
        cy.getByTestId('welcome-message').should('be.visible')

        cy.getByTestId('random-riddle-control').click()
        cy.url().should('include', '/riddle/1')
    });
})
