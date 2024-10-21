class pimPage {
  elements = {
    pimText: () => cy.get(":nth-child(2) > .oxd-main-menu-item > .oxd-text"),
    headerPimText: () => cy.get(".oxd-topbar-header-breadcrumb > .oxd-text"),
  };

  clickPIMText() {
    this.elements.pimText().click();
  }

  validatePimPage() {
    this.elements.pimText().should("have.text", "PIM");
  }
}

module.exports = new pimPage();
