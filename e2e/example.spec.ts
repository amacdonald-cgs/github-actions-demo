import { test, expect } from '@playwright/test';

test('has title', { tag: '@DemoTest'} ,  async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', { tag: '@DemoTest'} , async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// test('Backend Test - Auth EP is up', { 
//   tag: ['@ProjectName', '@Tests', '@AuthUser', '@API', '@BackendTest'] 
// }, async ({ request }) => {
//   const response = await request.get(`/auth/actuator/health`);
//   const body = await response.json();

//   // Assertion
//   expect(response.status()).toBe(200);
//   expect(body.status).toBe("UP");
// });