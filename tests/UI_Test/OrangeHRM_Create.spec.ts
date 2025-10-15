import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading')).toContainText('Dashboard');
  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page.getByRole('banner')).toContainText('AdminUser Management');
  await page.getByRole('button', { name: ' Add' }).click();
  //await expect(page.locator("//label[@class='oxd-label oxd-input-field-required']") ).toHaveText('User Role');
  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('1234abcd');
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('a');
  //await page.getByRole('option', { name: 'Ranga Akunuri' }).click();
  await page.waitForTimeout(3000)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  //await page.getByRole('textbox').nth(2).click();
  
   // Click input >> nth=2
  await page.locator('input').nth(2).click();
  const ExpUserName = 'Lalitha'+ Math.random() * 100;
  // Fill input >> nth=2
  await page.locator('input').nth(2).fill(ExpUserName);
  //await page.waitForTimeout(1000)
  // Click text=PasswordFor a strong password, please use a hard to guess combination of text wi >> input[type="password"]
  await page.locator('text=PasswordFor a strong password, please use a hard to guess combination of text wi >> input[type="password"]').click();

  // Fill text=PasswordFor a strong password, please use a hard to guess combination of text wi >> input[type="password"]
  await page.locator('text=PasswordFor a strong password, please use a hard to guess combination of text wi >> input[type="password"]').fill('Admin@123');
  await page.waitForTimeout(1000)
  // Click input[type="password"] >> nth=1
  await page.locator('input[type="password"]').nth(1).click();

  // Fill input[type="password"] >> nth=1
  await page.locator('input[type="password"]').nth(1).fill('Admin@123');

    // Click text=Save
  await page.locator('text=Save').click();
  //await page.waitForTimeout(1000)
  await page.waitForSelector(".orangehrm-container")
  await expect(page.locator(".orangehrm-container")).toContainText(ExpUserName)

  
  

});