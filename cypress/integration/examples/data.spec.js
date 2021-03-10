describe('Write / Read Data to JSON / Text file', () => {
  it('should write data into JSON', () => {
    cy.writeFile('log.json', {
      name: 'Mike',
      age: 25,
    });
  });

  it('should write data into .txt file', () => {
    cy.writeFile('log.txt', 'My name is Wittawat Kittiwarabud');
  });
});
