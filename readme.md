# 🧪 Cypress UI Tests – TodoMVC (React)

Questo progetto contiene test end-to-end automatizzati con [Cypress](https://www.cypress.io/) per l'applicazione demo [TodoMVC (React)](https://todomvc.com/examples/react/).  
È parte del mio portfolio di **QA Automation**.

---

## 📂 Struttura del progetto

```
qa-cypress-ui-tests/
├── cypress/
│   ├── e2e/
│   │   └── todos.cy.js         # Test per le funzionalità base dell'app
│   └── support/
├── cypress.config.js           # Configurazione Cypress
├── package.json                # Gestione dipendenze e script
├── README.md                   # Questo file
└── .github/workflows/          # CI GitHub Actions (in arrivo)
```

---

## 🚀 Funzionalità testate

- ✅ Aggiunta di un todo
- ✅ Completamento tramite toggle
- ✅ Eliminazione di un todo
- ✅ Filtri: All / Active / Completed

---

## 🛠️ Setup locale

### 1. Clona il progetto

```bash
git clone https://github.com/tuo-username/qa-cypress-ui-tests.git
cd qa-cypress-ui-tests
```

### 2. Installa le dipendenze

```bash
npm install
```

### 3. Esegui i test

#### Headless (CI-friendly)

```bash
npm test
```

#### Interfaccia grafica Cypress

```bash
npm run cy:open
```

---

## ⚙️ CI con GitHub Actions

Il progetto può essere eseguito automaticamente in CI con GitHub Actions.  
👉 Workflow disponibile in `.github/workflows/cypress.yml`.

---

## 📦 Stack Tecnologico

- Cypress 13+
- Node.js 20+
- GitHub Actions

---

## 👤 Autore

**Christan Catelli**  
Quality Assurance Engineer · QA Automation · Testing Specialist  
🌐 [https://catellic.github.io](https://catellic.github.io)

---

## 📄 Licenza

MIT