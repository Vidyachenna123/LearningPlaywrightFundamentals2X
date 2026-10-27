//https://app.vwo.com/#/login

import { test, expect } from '@playwright/test';

test("TC#1 - Verify that the app.vwo login is not working and gives you an error with lazy, strict and auto wait concepts.", async ({page}) =>{

    await page.goto("https://app.vwo.com/#/login");
    
    //Default locators
    //id, name, classname, tag, custom locator (via css selector)
    //CSS selector -> Browser - Css engine, Help you to find the element
    //by using the default locators
    //id = #id
    //className = .
    //name => [name = "value"]
    //Tag => [tag]


    let userNameField = page.locator('#login-username');
    let passwordField = page.locator('#login-password');
    let loginButton = page.locator('#js-login-btn');

    await userNameField.fill("admin@admin.com");
    await passwordField.fill("Pass123");
    await loginButton.click();
    console.log("All actions completed");
    let error_message = page.locator('js-notification-box-msg');
    await expect(error_message).toContainText("Your email, password, IP address or location did not match");

});