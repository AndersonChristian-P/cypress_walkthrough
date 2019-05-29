describe("Input Form", () => {
  const input_text = "Buy Milk"
  it("Accepts user input", () => {
    cy.visit("/")
    cy.get("[data-cy-input]")
      .type(input_text)
      .should("have.value", input_text)
  })

  it("Submit a new todo", () => {
    cy.visit("/")
    cy.get("[data-cy-input]")
      .type(input_text)
      .type("{enter}")
      .should("have.value", "") // tests that an item can be typed in and then submitted via the 'enter' key

    cy.get("[data-cy-input]")
      .type(input_text)
    cy.get("[data-cy-submit]")
      .click()
    cy.get("[data-cy-input]")
      .should("have.value", "") // tests that an item can be typed in and then submitted via the 'Submit' button

    cy.get(".todos")
      .should("visible")
      .and("have.length", 6)
      .eq(-1)
      .should("contain", input_text)
  })
})