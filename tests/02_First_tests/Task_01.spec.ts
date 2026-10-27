import { test } from '@playwright/test';

test("Multi context", async ({ browser }) => {

    const context1 = await browser.newContext();
    const page1 = await browser.newPage();
    await page1.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    console.log("Successful context1");
    //await context1.close();

    const context2 = await browser.newContext();
    const page2 = await browser.newPage();
    await page2.goto('https://app.vwo.com/#login');
    //await context2.close();

});
