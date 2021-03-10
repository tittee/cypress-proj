describe('Custom Commands', () => {
  it('Should login to app using custom command', () => {
    cy.visit('http://zero.webappsecurity.com/login.html');
    cy.login('username', 'password');
  });
});
