describe('Screenshots', () => {
  it('full page screenshot', () => {
    cy.visit('https://devexpress.github.io/testcafe/example/');
    cy.screenshot({
      capture: 'fullPage',
    });
  });

  it('single element screenshots', () => {
    cy.get('header').screenshot();
    cy.get('#populate').screenshot();
  });
});
