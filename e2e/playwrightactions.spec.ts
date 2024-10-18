import { test, expect, chromium, firefox, request } from '@playwright/test';

const usernameData = "amacdonald@cgsinc.ca";
const passwordData = "password01";

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
}, async ({page}) => {
  // page.
  
  // const browser = await chromium.launch({
  //   headless: false
  // });
  // const context = await browser.newContext({
  //   ignoreHTTPSErrors: true // Ignore SSL errors for self-signed certificates
  // });
  // const page = await context.newPage();
  // page.context.
  await page.goto('https://rehearsed-dev.teamworkar.com');
  // await page.getByRole('button', { name: 'Advanced' }).click();
  // await page.getByRole('link', { name: 'Proceed to localhost (unsafe)' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByPlaceholder('Enter your email').click();
  await page.getByPlaceholder('Enter your email').fill(usernameData);
  await page.getByPlaceholder('Enter your email').press('Tab');
  await page.getByPlaceholder('Enter your password').fill(passwordData);
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('heading', { name: 'AM' }).click();
  await page.getByText('Sign out').click();

  // ---------------------
  // await context.close();
  // await browser.close();
});
test('API Call using Playwright', async ({}) => {
  const apiContext = await request.newContext({
    ignoreHTTPSErrors: true,  // Ignore SSL errors
  });
  
  const response = await apiContext.post('https://rehearsed-dev.teamworkar.com/api/v1/scenarios/3cb585fa-4920-417e-b8ea-7d7b1bfe7d67/conversation-kickoff', {
    headers: {
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      'sec-ch-ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
    },
    data: JSON.stringify({
      convoId: '939a296d-7e4b-4339-9286-b681f7d0260a',
      personalityId: 'b47b8779-bc93-4ed7-b55c-54fda4dcc1f5',
    }),
    // referrer: 'https://localhost/scenario-roleplay/09966379-e64d-49bc-9bf8-51f983587f8f',
    // referrerPolicy: 'strict-origin-when-cross-origin',
    // credentials: 'include'
  });
  console.log(response); // Print the response ok
  // expect(response.ok()).toBeTruthy(); // Validate the response is successful
  const responseBody = await response.json(); // Parse the response JSON

  console.log(responseBody); // Print the response body
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

// test('Backend Test - Auth Login', { 
//   tag: ['@ProjectName', '@Tests', '@AuthUser', '@Login', '@API', '@BackendTest'] 
// }, async ({ request }) => {
//   const response = await request.post("/auth/login", {
//     data: {
//       username: usernameData,
//       password: passwordData
//     },
//   });

//   // Assertion
//   expect(response.status()).toBe(200);
// });