describe('SL_001', () => {
  it('Validate the Page Title ', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.title().should('eq', 'Swag Labs')
  })
})

describe('SL_002', () => {
  it('Valid logging', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('.input_error[name="user-name"]').type('standard_user')
    cy.get('.input_error[name="password"]').type('secret_sauce')
    cy.get('.submit-button[value="Login"]').click()
  });
})

describe('SL_003', () => {
  it('Logging invalid credentials (Invalid username and Invalid Password)', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('.input_error[name="user-name"]').type('stand_user')
    cy.get('.input_error[name="password"]').type('secret_sauc')
    cy.get('.submit-button[value="Login"]').click()
    cy.get('.error-message-container h3[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    //continuar caso 2
  });
})

describe('SL_004', () => {
  it('Logging invalid credentials (Invalid username and Valid Password)', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('.input_error[name="user-name"]').type('stand_user')
    cy.get('.input_error[name="password"]').type('secret_sauce')
    cy.get('.submit-button[value="Login"]').click()
    cy.get('.error-message-container h3[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    //continuar caso 2
  });
})

describe('SL_005', () => {
  it('should validate login using keyboard keys', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('.input_error[name="user-name"]').type('standard_user').tab()
    cy.get('.input_error[name="password"]').type('secret_sauce').tab().type('{enter}')
  });
})

describe('SL_006', () => {
  it('Validate the copying of the text entered into the Password field', () => {

    const textToCopy = 'MySecretPassword';

    cy.visit('https://www.saucedemo.com/')
    cy.get('.input_error[name="password"]').type(textToCopy)

      
  });
})

