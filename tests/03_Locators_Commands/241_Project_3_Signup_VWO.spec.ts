import { test, expect } from '@playwright/test';

test("Verify the signup page has an error with the incorrect email ID", async ({ page }) => {
    await page.goto("https://wingify.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage&_gl=1*pjxyrm*_gcl_au*MTQ1MzE3NTk5NS4xNzkzMDg4NDAxLjE3MzY3MDI4NzcuMTc5MzA4ODQ2MS4xNzkzMDg4NDYxLjk1NTI0NDUxMy4xNzkzMDg4NDYxLjE3OTMwODg0NjE.");
    let inputBox = page.locator("#free-trial-step1-email");
    await inputBox.fill("sree");

    await page.locator("#free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox").click();
    await page.locator("#free-trial-step1-gdpr-consent-checkboxcu-gdpr-consent-checkbox").click();
    await page.locator("[data-qa='page-su-submit']").first().click();
    let error_msg = await page.locator("//div[contains(@class, 'C(--wingify-cherry-rich) WBodyXS Trsp(--wingify-transition-op) Trsdu(0.15s) Op(0) invalid-input+Op(1) invalid-reason')]").first().textContent();
    expect(error_msg).toContain("The email address you entered is incorrect.");

});