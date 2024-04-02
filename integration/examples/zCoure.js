describe('My first suite', function()
{

    it('Automate', function() {

cy.visit("https://stgdms.coure-tech.com/auth/login");
cy.get('.row > :nth-child(1) > .form-control').type('bank2@coure-tech.com')
cy.get('.d-flex > .form-control').type('123Pa$$word')
cy.get('.btn.btn-primary.w-100.fs-5').click()
cy.wait(5000)

cy.get(':nth-child(2) > .nav-link').click()
cy.get('#kt_aside_menu > :nth-child(2) > .menu-link > .menu-title').click()
cy.wait(5000)

    it('should scroll up and down', () => {
      // Visit the webpage
      cy.get('app-display-transactions-history > .card')
  
      // Scroll down
      cy.get('body').scrollTo('bottom');
  
      // Add assertions or further actions after scrolling down
  
      // Scroll up
      cy.get('body').scrollTo('top');

    });
  });
  

    })