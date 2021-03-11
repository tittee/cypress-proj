class BasePage {
  static loadHomePage() {
    cy.visit('https://devexpress.github.io/testcafe/example/');
  }
  static wait(number) {
    cy.wait(number);
  }
}

class HomePage extends BasePage {
  static scrollToBottom() {
    cy.get('#submit-button').scrollIntoView();
  }

  static scrollToTop() {
    cy.get('header').scrollIntoView();
  }
}

describe('Abstraction with Classes', () => {
  before(() => {
    /*
     * Runs before all tests inside describe
     * Setup test data or test context
     * Seed or reset the database
     */
    HomePage.loadHomePage();
  });
  after(() => {
    /*
     * Runs after all test inside describe block are done
     * Test clean up
     * Clean cookies or LocalStorage
     * */
  });
  beforeEach(() => {
    /* Runs before each it block the describe */
  });
  afterEach(() => {
    /* Runs after each it block in the describe */
  });

  it('First init', () => {
    HomePage.scrollToBottom();
    HomePage.wait(5000);
    HomePage.scrollToTop();
    HomePage.wait(5000);
  });
});
