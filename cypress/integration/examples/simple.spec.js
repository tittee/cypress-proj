describe('Browser Actions', () => {
  it('Should load correct url', () => {
    cy.visit('https://example.com', { timeout: 10000 });
  });
});
