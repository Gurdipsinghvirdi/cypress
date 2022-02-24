describe('Cypress session', function() {
    it('Cypress Commands', function() {
    cy.visit("https://qa-frontend-cypress.s3.eu-west-1.amazonaws.com/cypress-session2.html");
    cy.get('[name=namec]').type('Sylar')
    cy.get('input[placeholder^=Street]').type('Sylar')
    cy.get('input[name=zipcode]').type('123')
    cy.get('select').select('USA')
    cy.get('input[name=email]').type('gurdip.singh@seera.sa')
    cy.get('[type="checkbox"]').check(['Prpoposal', 'Abstract'],{ force: true })
    cy.get('[type="submit"]').click()
    
    });
});