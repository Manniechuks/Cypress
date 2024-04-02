describe('Dashboard test', function()
{

    it('Dashboard', function() {

        cy.get(':nth-child(2) > .nav-link').click   
        cy.get('.form-select').click
    })

})
