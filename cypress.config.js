const { defineConfig } = require("cypress");
module.exports = {
  // ...
  pageLoadTimeout: 90000,
  // ...
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
