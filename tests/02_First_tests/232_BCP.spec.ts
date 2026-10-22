import { chromium, Browser, BrowserContext, Page } from "playwright";

async function run() {

    // Level 1 - Launch Browser - heaviest operation, do it once
    let browser: Browser = await chromium.launch({ headless: false});
    console.log("Browser LAunched", browser);

    // Level 2 - Create Context - fresh session, isolated cookies
    let context1: BrowserContext = await browser.newContext();
    console.log("Context created", context1);

    let context2: BrowserContext = await browser.newContext();
    console.log("Context created", context2);

    // Level 3 - Open page - a tab inside the context
    let page: Page = await context1.newPage();
    console.log("Page opened");

    await page.goto("https://app.vwo.com");
    console.log("Title:", await page.title());

    //cleanup - reverse order
    await page.close();
    await context1.close();
    await context2.close();
    await browser.close();


}

run();