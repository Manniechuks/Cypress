describe('My first suite', function()
{

    it('My FirsTest case', function() {

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
//cy.get('.search-keyword').type('cu')
cy.get('.search-keyword').type('ca')
cy.wait(2000)
//cy.get('.product:visible').should('have.length',4) 
//or we can use more proper way if find without using the visible command, 
//we get the parent housing the child element, eg products is housing four product
cy.get('.products').find('.product').should('have.length',4)
cy.get('.cart-icon > img').click()
cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click().then(function()
{
    console.log('sf')
})

cy.get('.products').find('.product').each(($el, index, $list) => {

    const textVeg=$el.find('h4.product-name').text()
    if(textVeg.includes('Cashews'))
    {
    cy.wrap($el).find('button').click()
    }
    })
    cy.get('.brand')
    cy.get('.brand').then(function(logo)
    {
        cy.log(logo.text())
    })


    })


})