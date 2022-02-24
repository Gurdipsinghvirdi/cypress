import  * as formPO from './formPO';

export function fillName (data) {
    cy.get(formPO.name).type(data);
}