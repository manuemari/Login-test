beforeEach(() => {
  // Hook a nivel raíz
  cy.log("Root Before each");
  cy.visit("https://www.saucedemo.com/"); 
});

context("Hooks", () => {
  let loggin = false;

  before(() => {});
  beforeEach(() => {
    cy.log("BeforeEach: se ejecuta antes de cada prueba en el bloque");
    cy.get("#user-name").as("usernameField");
    cy.get("#password").as("passField");
    cy.get("#login-button").as("loginBtn");
  });
  it("Test 01 Wrong Login", () => {
    cy.get("@usernameField").type("user");
    cy.get("@passField").type("pass");
    cy.get("@loginBtn").click();
  });
  it("Test 02 Login without params", () => {
    cy.get("@loginBtn").click();
  });
  it("Test 03 Login succes", () => {
    cy.get("@usernameField").type("standard_user");
    cy.get("@passField").type("secret_sauce");
    cy.get("@loginBtn").click();
    loggin = true;
  });
  it("Test 04 Login succes", () => {
    cy.get("@usernameField").type("standdsdsdsdard_user");
    cy.get("@passField").type("secredwdwdwdt_sauce");
    cy.get("@loginBtn").click();
    loggin = true;
  });

  afterEach(() => {
    cy.log("After Each: TODO Logout");
    if (loggin) {
      //
    } else {
      cy.get("@usernameField").clear();
      cy.get("@passField").clear();
      cy.log("Fields Cleaned");
    }
  });
  after(() => {
    cy.log("After All ");
  });
});
