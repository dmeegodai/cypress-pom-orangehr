class myinfoPage {
  elements = {
    myinfoText: () => cy.get(":nth-child(6) > .oxd-main-menu-item > .oxd-text"),
    persoanlDetailTest: () =>
      cy.get(
        ".orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6"
      ),
    employeeFirstName: () =>
      cy.get(
        ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input"
      ),
    employeeMiddleName: () =>
      cy.get(":nth-child(2) > :nth-child(2) > .oxd-input"),
    employeeLastName: () =>
      cy.get(":nth-child(3) > :nth-child(2) > .oxd-input"),
    saveButton: () =>
      cy.get(":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button"),
    firstNameWarning: () =>
      cy.get(".--name-grouped-field > :nth-child(1) > .oxd-text"),
    lastNameWarning: () =>
      cy.get(".--name-grouped-field > :nth-child(3) > .oxd-text"),
  };

  // defined methods
  clickmyInfoText() {
    this.elements.myinfoText().click();
  }

  validatemyInfoPageVisit() {
    this.elements.persoanlDetailTest().should("have.text", "Personal Details");
  }

  enterUserFirstName(fName) {
    this.elements.employeeFirstName().clear().type(fName);
  }

  enterUserMiddleName(mName) {
    this.elements.employeeMiddleName().clear().type(mName);
  }

  enterUserLastName(lName) {
    this.elements.employeeLastName().clear().type(lName);
  }

  clickSaveButton() {
    this.elements.saveButton().click();
  }

  validateSuccsessMessage() {
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Success");
    });
  }

  validateWarningMessage() {
    this.elements.firstNameWarning().should("have.text", "Required");
    this.elements.lastNameWarning().should("have.text", "Required");
  }
}

module.exports = new myinfoPage();
