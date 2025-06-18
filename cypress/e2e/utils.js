const sel = require("../fixtures/selectors.json");

export function clearAndVisit(url) {
  cy.clearAllCookies()
    .clearLocalStorage()
    .visit(url)
    .wait(500);
  cy.get(sel.new_todo_field).should("exist").should("be.visible");
  cy.get(sel.footer).should("not.exist");
}

export function getAndClick(button) {
  cy.get(button).click().wait(100);
}

export function getAndDblClick(button) {
  cy.get(button).dblclick().wait(100);
}

export function addTask(task) {
  cy.get(sel.new_todo_field).type(`${task}{enter}`).wait(500);
}

export function editTask(actual, expected) {
  cy.contains('[data-testid="todo-item-label"]', actual)
    .dblclick()

    // attende che l'input sia visibile e scrive
    .get('input[type="text"]')
    .eq(1)
    .should("be.visible")
    .clear()
    .wait(100)
    .type(expected + "{enter}");
}

export function countCheck(expected) {
  if (expected === 1) {
    cy.get(sel.todo_count).should("contain.text", "1 item left!");
  } else {
    cy.get(sel.todo_count).should("contain.text", expected + " items left!");
  }
}

export function selectFilter(filter) {
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
}
