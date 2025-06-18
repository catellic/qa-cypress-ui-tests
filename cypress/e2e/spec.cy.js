const sel = require("../fixtures/selectors.json");

describe("E2E testing on TodoMVC (React)", () => {
  before("Initialize env", () => {
    cy.clearAllCookies().visit("https://todomvc.com/examples/react/dist/#/");
  });

  beforeEach("Initial checks", () => {
    cy.get(sel.new_todo_field).should("exist").should("be.visible");
    cy.get(sel.footer).should("not.exist");
  });

  it("Add, complete and clear all todos", () => {
    cy.fixture("fixture.json").then((tasks) => {
      tasks.forEach((task, index) => {
        //start index from 1 not 0
        index = index + 1;

        //add new task
        cy.get(sel.new_todo_field)
          .type(task + "{enter}")
          .wait(500);

        //check item counter
        cy.get(".todo-count")
          .invoke("text")
          .then((text) => {
            if (index === 1) {
              expect(text).to.eql(index+" item left!")
            } else {
              expect(text).to.eql(index+" items left!")
            }
          });
      });
    });

    cy.get(sel.filters.active)
      .click()
      .should("have.class", "selected")
      .wait(500)
      // next button
      .get(sel.filters.completed)
      .click()
      .should("have.class", "selected")
      .wait(500)
      // next button
      .get(sel.filters.all)
      .click()
      .should("have.class", "selected")
      .wait(500)
      .get(sel.toggle_list)
      .click()
      .wait(500)
      .get(sel.clear_btn)
      .click()
      .wait(500);
    cy.get(sel.footer).should("not.exist");
  });
});
