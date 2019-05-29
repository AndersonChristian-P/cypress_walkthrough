describe("App initialization", () => {

  beforeEach(() => {
    cy.visit("/")
  })
  // using "/" because we set the baseUrl in the cypress.json file

  it("Loads todos on page load", () => {
    // cy.visit("/")
    cy.get(".todos")
      .should("exist")
      .and("have.length", 4)
  })

  it("Should be focused on input on page load", () => {
    // cy.visit("/")
    cy.focused()
      .should("exist")
  })
})
