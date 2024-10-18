import { test, expect, chromium, firefox } from '@playwright/test';

const usernameData = "admin";
const passwordData = "password";

// const { chromium } = require('playwright');

// (async () => {
//   const browser = await chromium.launch({
//     headless: false
//   });
//   const context = await browser.newContext({
//     ignoreHTTPSErrors: true // Ignore SSL errors for self-signed certificates
//   });
//   const page = await context.newPage();
//   await page.goto('chrome-error://chromewebdata/');
//   await page.getByRole('button', { name: 'Advanced' }).click();
//   await page.getByRole('link', { name: 'Proceed to localhost (unsafe)' }).click();
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByPlaceholder('Enter your email').click();
//   await page.getByPlaceholder('Enter your email').fill('amacdonald@cgsinc.ca');
//   await page.getByPlaceholder('Enter your email').press('Tab');
//   await page.getByPlaceholder('Enter your password').fill('password01');
//   await page.getByRole('checkbox').check();
//   await page.getByRole('button', { name: 'Sign in' }).click();
//   await page.getByRole('heading', { name: 'AM' }).click();
//   await page.getByText('Sign out').click();

//   // ---------------------
//   await context.close();
//   await browser.close();
// })();
// Test GitHub Actions #3
test('UI - Login User', { 
  tag: ['@ProjectName', '@Tests', '@LoginUser', '@UI', '@FrontendTest'] 
}, async () => {
  // page.
  
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext({
    ignoreHTTPSErrors: true // Ignore SSL errors for self-signed certificates
  });
  const page = await context.newPage();
  // page.context.
  await page.goto('http://localhost');
  // await page.getByRole('button', { name: 'Advanced' }).click();
  // await page.getByRole('link', { name: 'Proceed to localhost (unsafe)' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByPlaceholder('Enter your email').click();
  await page.getByPlaceholder('Enter your email').fill('amacdonald@cgsinc.ca');
  await page.getByPlaceholder('Enter your email').press('Tab');
  await page.getByPlaceholder('Enter your password').fill('password01');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('heading', { name: 'AM' }).click();
  await page.getByText('Sign out').click();

  // ---------------------
  await context.close();
  await browser.close();
});

test('Backend Test - Auth EP is up', { 
  tag: ['@ProjectName', '@Tests', '@AuthUser', '@API', '@BackendTest'] 
}, async ({ request }) => {
  const response = await request.get(`/auth/actuator/health`);
  const body = await response.json();

  // Assertion
  expect(response.status()).toBe(200);
  expect(body.status).toBe("UP");
});

test('Backend Test - Auth Login', { 
  tag: ['@ProjectName', '@Tests', '@AuthUser', '@Login', '@API', '@BackendTest'] 
}, async ({ request }) => {
  const response = await request.post("/auth/login", {
    data: {
      username: usernameData,
      password: passwordData
    },
  });

  // Assertion
  expect(response.status()).toBe(200);
});