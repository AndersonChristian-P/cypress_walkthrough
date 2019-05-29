describe("Edit todos", () => {
  it("Completes a todo", () => {
    cy.visit("/")
    cy.get(".todos")
      .find("i#done") // find all the i tags with the id of 'done'
      .first() // grab the first match
      .click

    cy.get(".todos")
      .first()
      .find("p")
      .should("have.css", "text-decoration") // by doing the above set of code this should exist
  })

  it("Edits a todo", () => {
    const input_text = "Edited todo"
    cy.visit("/")
    cy.get(".todos")
      .find("i#edit")
      .first()
      .click()

    cy.get(".todos")
      .first()
      .find("input")
      .should("exist")
      .clear()
      .type(input_text)
      .type("{enter}")
  })

  it("Deletes a todo", () => {
    cy.visit("/")
    cy.get(".todos")
      .find("i#delete")
      .first()
      .click()

    cy.get(".todos")
      .should("have.length", 3)
  })
})