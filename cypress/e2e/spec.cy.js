const sel = require("../fixtures/selectors.json");

describe("E2E testing on TodoMVC (React)", () => {
  before("Initialize env", () => {

  });

  beforeEach("Initial checks", () => {
    cy.clearVisit(sel.url)
    .isVisible(sel.new_todo_field)
    .notExist(sel.footer)
  });

  it("Add, complete and clear from fixture", () => {
    cy.fixture("fixture.json").then((tasks) => {
      tasks.forEach((task, index) => {
        //start index from 1 not 0
        index = index + 1;

        //add new task
        cy.addTask(task);
        //cy.addTask(task)

        //check item counter
        cy.checkCount(index);
      });
    });

    // select and check active button filter
    cy.selectFilter("active");
    // select and check completed button filter
    cy.selectFilter("completed");
    // select and check completed button filter
    cy.selectFilter("all");
    // toggle all and clear
    cy.getAndClick(sel.toggle_list);
    cy.getAndClick(sel.clear_btn);

    cy.notExist(sel.footer).wait(500);
  });

  it("Add and edit tasks", () => {
    //add task and check number of items left
    cy.addTask("first task");
    cy.checkCount(1);

    //complete task and check number of items left
    cy.getAndClick(sel.toggle_item);
    cy.checkCount(0);

    //filter active tasks and check number of items left
    cy.selectFilter("active");
    cy.checkCount(0);

    //filter completed tasks and check number of items left
    cy.selectFilter("completed");
    cy.checkCount(0);

    //clear completed tasks and check UI
    cy.getAndClick(sel.clear_btn);
    cy.notExist(sel.footer);
  });

  it("Add and edit tasks", () => {
    
    cy.addTask("first task");
    cy.checkCount(1);

    cy.addTask("secondo task");

    cy.editTask("first task", "first task modified")

    cy.editTask("secondo task", "second task modified")
  });
});
