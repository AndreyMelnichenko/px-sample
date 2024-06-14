import { test, expect } from '@playwright/test';

test('Check reset password text', async ({ page }) => {
  await page.goto('/resetPassword');
  await expect(page).toHaveTitle(/PX - Dashboard/);
  const text = await page.innerText("div.px-login-title");
  expect(text).toEqual("Reset password");
});
