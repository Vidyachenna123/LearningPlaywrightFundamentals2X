import { test, expect } from '@playwright/test';

test("Make an appointment", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    let makeAppointment = page.locator(".text-vertical-center a");
    await makeAppointment.click();

    let userName = page.locator('#txt-username');
    let password = page.locator('#txt-password');
    let loginButton = page.locator('#btn-login');
    await userName.fill("John Doe");
    await password.fill("ThisIsNotAPassword");
    await loginButton.click();


});

