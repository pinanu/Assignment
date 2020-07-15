describe('Re-engage: not clicked Journey', function () {

    it('sets up draft not clicked journey', function () {

        cy.navigateTonotClickedJourneyPage()
        cy.findAllByTestId('graph-node').first().click({
            force: true
        });

        cy.get('[data-test-id="chosen-list_choose-list-button"]').click({
            force: true
        });

        cy.get('[data-test-id="collection-modal_search-input"]').type('signup list 2')
        cy.findByText('1 result').should('exist').click()
        cy.get('[type="radio"]').check()
        cy.findByText('Use this list').should('exist').click()
        cy.findByText('Save').should('exist').click({
            force: true
        });
        cy.wait(2000);
        //cy.findAllByText("hello button").eq(0).click()
        cy.findAllByText('Send message to contact').eq(0).should('exist').click({
            force: true
        });
        cy.get('[data-test-id="choose-message_button"]').click({
            force: true
        });
        cy.get('[data-test-id="collection-modal_search-input"]').type('Aut-MSG')
        cy.findByText('1 result').should('exist').click()
        cy.get('[type="radio"]').check()
        cy.findByText('Use this message').should('exist').click()
        cy.findByText('Save').should('exist').click({
            force: true
        })
        //  cy.findByText('Activate journey').should('exist').click()
    })
})