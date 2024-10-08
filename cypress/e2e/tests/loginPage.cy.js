/// <reference types="cypress"/>
import loginPage from "../../support/objectPages/loginPage";
import dashboardPage from "../../support/objectPages/dashboardPage";
import resetpasswordPage from "../../support/objectPages/resetpasswordPage";

describe("Orange HRM POM Implementation", () => {
  beforeEach(() => {
    cy.visit(Cypress.config("baseUrl"));
  });

  describe("Admin login positive test scenario", () => {
    it("Should login succsessfully", () => {
      loginPage.typeusernameInput("Admin");
      loginPage.typepasswordInput("admin123");
      loginPage.clickloginButton();
      dashboardPage.validateDashboardText();
    });
  });

  describe("Admin logion negative test scenario", () => {
    it("Should have displayed incorrect username warning", () => {
      loginPage.typeusernameInput("Admin123");
      loginPage.typepasswordInput("admin123");
      loginPage.clickloginButton();
      loginPage.validateWarningMessage();
    });

    it("Should have displayed incorrect password warning", () => {
      loginPage.typeusernameInput("Admin123");
      loginPage.typepasswordInput("admin123456");
      loginPage.clickloginButton();
      loginPage.validateWarningMessage();
    });

    it("Should have displayed empty username and password message", () => {
      loginPage.typeusernameInput(" ");
      loginPage.typepasswordInput(" ");
      loginPage.clickloginButton();
      loginPage.validateEmptyWarningMessage();
    });
  });

  describe("Admin forget password senario", () => {
    it("Should able to click on forget password button", () => {
      loginPage.clickForgotPasswordButton();
      resetpasswordPage.validateRestPasswordTitle();
    });

    it("Should be bale to reset admin password", () => {
      loginPage.clickForgotPasswordButton();
      resetpasswordPage.enterAdminUserName("Admin");
      resetpasswordPage.clickResetPassword();
      resetpasswordPage.validateResetSuccessTitle();
    });
  });
});
