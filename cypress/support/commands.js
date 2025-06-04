Cypress.Commands.add("ignoreUnknownErrors", () => {
  Cypress.on("uncaught:exception", () => {
    return false;
  });
});
