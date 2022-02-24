import * as formCC from '../../fixtures/pageClasses/formCC';

import testData from '../../fixtures/config/testData/testData';

describe('Session Example', function () {

    before(() => {
        cy.visit('https://qa-frontend-cypress.s3.eu-west-1.amazonaws.com/cypress-session2.html');
    })

    it('Test Email Field', function () {
        formCC.fillName(testData[0].name);
    });
});