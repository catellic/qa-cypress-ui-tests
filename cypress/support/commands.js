// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const sel = require("../fixtures/selectors.json");

Cypress.Commands.add("getAndDblClick", (button) => {
    cy.get(button).dblclick();
})

Cypress.Commands.add("getAndClick", (button) => {
    cy.get(button).click();
})

Cypress.Commands.add("selectFilter", (filter) => {
  try {
    switch (filter) {
      case "active":
        cy.get(sel.filters.active)
          .click()
          .should("have.class", "selected")
          .wait(500);
        break;
      case "completed":
        cy.get(sel.filters.completed)
          .click()
          .should("have.class", "selected")
          .wait(500);
        break;
      case "all":
        cy.get(sel.filters.all)
          .click()
          .should("have.class", "selected")
          .wait(500);
        break;
      default:
        break;
    }
  } catch {
    Error;
  }
});

Cypress.Commands.add("checkCount", (expected) => {
  if (expected === 1) {
    cy.get(sel.todo_count).should("contain.text", "1 item left!");
  } else {
    cy.get(sel.todo_count).should("contain.text", expected + " items left!");
  }
});

Cypress.Commands.add("addTask", (task) => {
  cy.get(sel.new_todo_field).type(`${task}{enter}`).wait(500);
});

Cypress.Commands.add("editTask", (actual, expected) => {
  cy.contains('[data-testid="todo-item-label"]', actual)
    .dblclick()

    // attende che l'input sia visibile e scrive
    .get('input[type="text"]')
    .eq(1)
    .should("be.visible")
    .wait(50) //it's not ideal to use explicit waits but it serves performance purpose
    .clear()
    .wait(50)
    .type(expected + "{enter}");
});

Cypress.Commands.add("clearVisit", (url) => {
  cy.clearAllCookies().clearLocalStorage().visit(url).wait(500);
});

Cypress.Commands.add("isVisible", (el) => {
  cy.get(el).should("exist").should("be.visible");
});

Cypress.Commands.add("notExist", (el) => {
  cy.get(el).should("not.exist");
});
