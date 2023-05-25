describe('Functional Test Swag Labs', () => {
  it('Validate the Page Title ', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.title().should('eq', 'Swag Labs')
  })

  it('Validate valid logging', () => {
    cy.visit('https://www.saucedemo.com/')
    get('.input_error[name="user-name"]').type('standard_user')
    //continuar caso 2
  });
})