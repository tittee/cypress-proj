describe('Browser Actions', () => {
  it('Should be load books website', () => {
    cy.visit('https://bluenary.com/', { timeout: 10000 });
    cy.url().should('include', '/');
  });

  it('should click menu เกี่ยวกับเรา', () => {
    cy.get('a.navbar-item').contains('เกี่ยวกับเรา').click();
  });
});
