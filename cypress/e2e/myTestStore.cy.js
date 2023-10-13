/// <reference types= "cypress" />

Cypress.Commands.add("logIn", () => {
  cy.visit("https://www.automationteststore.com/");
  cy.get("#customer_menu_top > li").click();
  cy.get("#loginFrm_loginname").type("dana_ahmad");
  cy.get("#loginFrm_password").type("Store@2023");
  cy.get("#loginFrm > fieldset > .btn").click();
  cy.get(".nav-pills > :nth-child(1) > .active").click();
});

describe("TestCases", () => {
  it.skip("Verify the login using the accurate username and password.", () => {
    cy.logIn();
  });
  it.skip("Verify the login using the accurate username and an incorrect password", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("#customer_menu_top > li").click();
    cy.get("#loginFrm_loginname").type("dana_ahmad");
    cy.get("#loginFrm_password").type("Store@2022");
    cy.get("#loginFrm > fieldset > .btn").click();
  });
  it.skip("Verify the Currency", () => {
    cy.logIn();
    cy.get(".dropdown-toggle > :nth-child(1) > .label")
      .invoke("text")
      .should("equal", "$");
  });
  it.skip("Verify the log-off.", () => {
    cy.logIn();
    cy.get(".info_links_footer > :nth-child(7) > a").click();
  });
  it.skip("Add first item to the cart", () => {
    cy.logIn();

    cy.get(
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa"
    ).click();
    cy.get(".dropdown-toggle > .label").invoke("text").should("equal", "1");
  });
  it.skip("check item out of stock", () => {
    cy.logIn();
    cy.get(":nth-child(2) > .thumbnail > .pricetag > .nostock")
      .invoke("text")
      .should("include", "Out of Stock");
  });
  it("Include all products from the makeup section in your shopping cart", () => {
    cy.logIn();
    cy.get(
      '[href="https://automationteststore.com/index.php?rt=product/category&path=43"]'
    ).click();
    for (let i = 0; i < 4; i ++) {
      cy.get(".productcart").eq(i).click();
    }
  });
});
