
describe('SL_001', () => {
  it('Validate the Page Title ', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.title().should('eq', 'Swag Labs')
  })
})

describe('SL_002', () => {
  it('Valid logging', () => {
    cy.visit('https://www.saucedemo.com/')

    const username = "standard_user"
    const password = "secret_sauce"

    cy.get('.input_error[name="user-name"]').type(username)
    cy.get('.input_error[name="password"]').type(password)
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

    const username = "standard_user"
    const password = "secret_sauce"

    cy.get('.input_error[name="user-name"]').type(username).tab()
    cy.get('.input_error[name="password"]').type(password).tab().type('{enter}')
  });
})

describe('Sl_006', () => {
  it('Validate Username and Password text fields in the Login page have the place holder text ', () => {
      cy.visit('https://www.saucedemo.com/')

      cy.get('.form_group input#user-name').should('have.attr', 'placeholder', 'Username')
      cy.get('.form_group input#password').should('have.attr', 'placeholder', 'Password')
  });
})

describe('SL_007', ()=> {
  it('Validate Logging into the Application and browsing back using Browser back button', () => {
    cy.visit('https://www.saucedemo.com/')

    const username = "standard_user"
    const password = "secret_sauce"
    cy.get('.input_error[name="user-name"]').type(username)
    cy.get('.input_error[name="password"]').type(password)
    cy.get('.submit-button[value="Login"]').click()

    cy.url('https://www.saucedemo.com/inventory.html').then((url) => {
      const loggedInUrl = url;

    cy.go('back')

    cy.url().should('eq', loggedInUrl);
  });
  })
})

describe('SL_008', ()=> {
  it('Validate the text into the Password field is toggled to hide its visibility', () => {
      cy.visit('https://www.saucedemo.com/')

      const password = 'secret_sauce';

      cy.get('input[placeholder="Password"]').type(password);

    cy.get('input[placeholder="Password"]').should('have.attr', 'type', 'password');

    cy.get('input[placeholder="Password"]').blur();
  });
})

describe('SL_009', () => {
  it.skip('Validate the copying of the text entered into the Password field', () => {

    const textToCopy = 'MySecretPassword';

    cy.visit('https://www.saucedemo.com/')
    cy.get('.input_error[name="password"]').type(textToCopy)
    cy.get('.input_error[name="password"]').type('{selectall}')
    cy.get('.input_error[name="password"]').type('{ctrl}c')
    cy.get('.input_error[name="user-name"]').type('{ctrl}v')
  })
})

describe('test', ()=>{
  it('', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('.input_error[type="password"]').type('your_password');

    cy.get('.input_error[type="password"]').type('{selectall}');

    cy.get('.input_error[type="password"]').trigger('keydown', { keyCode: 67, ctrlKey: true });
    cy.get('.input_error[type="password"]').trigger('keyup', { keyCode: 67, ctrlKey: true });

    cy.get('.input_error[name="user-name"]').click();

// 7. Press (Ctrl+V) shortcut for pasting
cy.get('.input_error[name="user-name"]').trigger('keydown', { keyCode: 86, ctrlKey: true });
cy.get('.input_error[name="user-name"]').trigger('keyup', { keyCode: 86, ctrlKey: true });
  });
});



