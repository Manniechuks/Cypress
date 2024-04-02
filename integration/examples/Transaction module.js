
describe('Transaction test', function()
{

    it('Transaction', function() {

        cy.visit("https://stgdms.coure-tech.com/auth/login");
        cy.get('.row > :nth-child(1) > .form-control').type('bank2@coure-tech.com')
        cy.get('.d-flex > .form-control').type('123Pa$$word')
        cy.get('.btn.btn-primary.w-100.fs-5').click()
        cy.wait(5000)

        cy.get('#kt_aside_menu > :nth-child(2) > .menu-link > .menu-title').click()
        cy.wait(10000)
        //cy.get(':nth-child(1) > :nth-child(10) > .dropdown > #dropdownBasic1 > .bi').click()
        cy.get(':nth-child(3) > :nth-child(10) > .dropdown > #dropdownBasic1 > .bi').click()
        cy.get('[data-popper-placement="bottom-end"] > .dropdown-menu > :nth-child(1)').click()

        cy.wait(5000)
        cy.get('.modal-footer > .btn-primary').click()
    })

})

