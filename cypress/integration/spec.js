/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    // Need a page with XHR calls to get the server to be called.
    cy.visit('https://www.airbnb.ca/s/homes')
  })
})
