# 🔪 Cypress UI Tests – TodoMVC (React)

This project contains end-to-end automated tests built with [Cypress](https://www.cypress.io/) for the [TodoMVC (React)](https://todomvc.com/examples/react/) demo application.
It is part of my **QA Automation portfolio**, showcasing skills in UI testing, custom command design, data-driven testing, and CI integration.

---

## 📁 Project Structure

```
qa-cypress-ui-tests/
├── cypress/
│   ├── e2e/
│   │   └── todos.cy.js           # Main test suite
│   ├── fixtures/
│   │   ├── selectors.json        # Centralized UI selectors
│   │   └── fixture.json          # Data file for parameterized tests
│   └── support/
│       ├── commands.js           # Custom Cypress commands
│       └── e2e.js                # Global support file
├── cypress.config.js             # Cypress configuration
├── package.json                  # Dependencies and scripts
├── README.md                     # This file
└── .github/workflows/            # GitHub Actions (coming soon)
```

---

## ✅ Tested Features

| Feature                           | Status |
| --------------------------------- | ------ |
| Adding new todos                  | ✅      |
| Completing todos                  | ✅      |
| Clearing completed todos          | ✅      |
| Editing existing todos            | ✅      |
| Filters: All / Active / Completed | ✅      |
| Data-driven task addition         | ✅      |
| Task counter validation           | ✅      |
| DOM visibility checks             | ✅      |

---

## 🛠️ Local Setup

### 1. Clone the project

```bash
git clone https://github.com/your-username/qa-cypress-ui-tests.git
cd qa-cypress-ui-tests
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run tests

#### Headless (CI-friendly)

```bash
npm test
```

#### Cypress GUI (Interactive mode)

```bash
npm run cy:open
```

---

## ⚙️ Continuous Integration

This project is CI-ready and can be executed in GitHub Actions.
👉 A reusable workflow will soon be available in `.github/workflows/cypress.yml`.

---

## 📆 Tech Stack

* [Cypress 13+](https://docs.cypress.io/)
* Node.js 20+
* GitHub Actions (CI)

---

## 👤 Author

**Christian Catelli**
Quality Assurance Engineer · QA Automation Specialist
🌐 [https://catellic.github.io](https://catellic.github.io)

---

## 📄 License


![Cypress](https://img.shields.io/badge/Cypress-17202C?style=flat-square\&logo=cypress\&logoColor=white)
![License](https://img.shields.io/github/license/catellic/qa-cypress-ui-tests?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/catellic/qa-cypress-ui-tests?style=flat-square)