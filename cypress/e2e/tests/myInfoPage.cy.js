import myinfoPage from "../../support/objectPages/myinfoPage";

describe("Orange HRM POM Implementation for My Info page", () => {
  beforeEach(() => {
    cy.login("Admin", "admin123");
  });

  describe("Navigate in to the My Info page", () => {
    it("Should be able to click the My Info Text", () => {
      myinfoPage.clickmyInfoText();
      myinfoPage.validatemyInfoPageVisit();
    });
  });

  describe("Personal details tab postive senario", () => {
    it("Should be able to fill complete name and submit", () => {
      cy.navigateToMyInfoTab();
      myinfoPage.enterUserFirstName("Thanura");
      myinfoPage.enterUserMiddleName("Dilan");
      myinfoPage.enterUserLastName("Meegoda");
      myinfoPage.clickSaveButton();
      myinfoPage.validateSuccsessMessage();
    });
  });

  describe("Personal details tab negative senario", () => {
    it("Should not be able to submit with incomplete name feilds", () => {
      cy.navigateToMyInfoTab();
      myinfoPage.enterUserFirstName(" ");
      myinfoPage.enterUserMiddleName(" ");
      myinfoPage.enterUserLastName(" ");
      myinfoPage.clickSaveButton();
      myinfoPage.validateWarningMessage();
    });
  });

  describe("Personal details tab negative senario", () => {
    it("Should not be able to submit a name with more than 30 charactors", () => {
      cy.navigateToMyInfoTab();
      myinfoPage.enterUserFirstName("Test name with more than 30 characters");
      myinfoPage.enterUserMiddleName("Dilan");
      myinfoPage.enterUserLastName("Meegoda");
      myinfoPage.clickSaveButton();
      myinfoPage.validateCharactorLimitWarning();
    });
  });
});
