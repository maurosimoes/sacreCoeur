const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());

      return config;
    },
  },
});
