import { test, expect } from '@playwright/test';

test("goto with different waitUntil options", async ({ page }) => {

    await page.goto("https://app.com/page1", { waitUntil: "commit" });
    console.log("commit: server responded");

    await page.goto("https://app.com/pag2", { waitUntil: "domcontentloaded" });
    console.log("domcontentloaded: HTML parsed");

    await page.goto("https://app.com/page3", { waitUntil: "load" });
    console.log("load: all resources loaded");

    await page.goto("https://app.com/page4", { waitUntil: "networkidle" });
    console.log("networkidle: no requests for 500ms");

});
