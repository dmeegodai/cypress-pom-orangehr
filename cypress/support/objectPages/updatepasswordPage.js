class updatePasswordPage {
  elements = {
    updatePasswordTitle: () =>
      cy.get(".orangehrm-card-container > .oxd-text--h6"),
    currentPasswordFeild: () =>
      cy.get(
        ":nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    updatePasswordFeild: () =>
      cy.get(
        ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    confirmPasswordFeild: () =>
      cy.get(
        ".user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    savebutton: () => cy.get(".oxd-button--secondary"),
  };

  validateUpdatePasswordTitle() {
    this.elements.updatePasswordTitle().should("be.visible");
  }

  enterCurrentPassword(password) {
    this.elements.currentPasswordFeild().type(password);
  }

  enterUpdatedPassword(uPassword) {
    this.elements.updatePasswordFeild().type(uPassword);
  }

  confirmUpdatedPassword(uPassword) {
    this.elements.confirmPasswordFeild().type(uPassword);
  }

  clickSaveButton() {
    this.elements.savebutton().click();
  }

  validateSuccsessMessage() {
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Success");
    });
  }
}

module.exports = new updatePasswordPage();
