const sel = require("../fixtures/selectors.json");
const utl = require("../e2e/utils.js");

describe("E2E testing on TodoMVC (React)", () => {
  before("Initialize env", () => {});

  beforeEach("Initial checks", () => {
    utl.clearAndVisit(sel.url)
  });

  it("Add, complete and clear many tasks", () => {
    cy.fixture("fixture.json").then((tasks) => {
      tasks.forEach((task, index) => {
        //start index from 1 not 0
        index = index + 1;

        //add new task
        utl.addTask(task);

        //check item counter
        utl.countCheck(index);
      });
    });

    // select and check active button filter
    utl.selectFilter("active");
    // select and check completed button filter
    utl.selectFilter("completed");
    // select and check completed button filter
    utl.selectFilter("all");
    // toggle all and clear
    utl.getAndClick(sel.toggle_list);
    utl.getAndClick(sel.clear_btn);

    cy.get(sel.footer).should("not.exist").wait(500);
  });

  it("Add and check single task", () => {
    //add task and check number of items left
    utl.addTask("first task");
    utl.countCheck(1);

    //complete task and check number of items left
    utl.getAndClick(sel.toggle_item);
    utl.countCheck(0);

    //filter active tasks and check number of items left
    utl.selectFilter("active");
    utl.countCheck(0);

    //filter completed tasks and check number of items left
    utl.selectFilter("completed");
    utl.countCheck(0);

    //clear completed tasks and check UI
    utl.getAndClick(sel.clear_btn);
    cy.get(sel.footer).should("not.exist").wait(500);
  });

  it.only("Add and edit task", () => {
    utl.addTask("first task");
    utl.countCheck(1);

    utl.addTask("secondo task");

    utl.editTask("first task", "first task modified")

    utl.editTask("secondo task", "second task modified")
  });
});
