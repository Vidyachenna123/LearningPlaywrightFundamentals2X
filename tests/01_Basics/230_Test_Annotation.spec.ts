import { test, expect } from '@playwright/test';

test("Vhas title", async ({ page }) => {
    await page.goto('https://playwrigh.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    //page = fixture (injected by Playwright)
});

test.skip('Skipped test', async({ page }) => {
    // This test skipped
});

//Only run this test
test.only('Focused test', async ({ page }) => {
    //Only this test runs
});

//Mark as failing
test.fail('expected to fail', async ({ page }) => {
    //Test is expected to fail
});

//Slow test (3x timeout)
test.slow('slow test', async ({ page }) => {
    //Has extended timeout
});

test('Conditional', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Not supported in Firefox');
});





