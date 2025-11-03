// assert display interval

// assert timestamp, entry point, welcome message

// assert clicking on riddle & navigation

// assert riddle page (possible split of scenarios into smaller tests)

import { App } from '../App';

describe('RandomRiddle.', () => {
    before(() => {
        cy.mount(<App />, '/')
    })

    it('sees a landing page & navigate to random riddle', () => {
        cy.getByTestId('work-interval-text').should('be.visible')
        cy.getByTestId('timestamp-text').should('be.visible')
        cy.getByTestId('welcome-message').should('be.visible')

        cy.getByTestId('random-riddle-control').click()
        cy.url().should('include', '/riddle/1')
    });
})
