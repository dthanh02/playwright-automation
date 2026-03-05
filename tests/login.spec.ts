import { test, expect} from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Login tests', () => {
  test('@smoke Positive Login test', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL('/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('@negative Invalid Username', async ({ page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('invalid_user', 'secret_sauce');

    await expect(loginPage.errorMessage).toBeVisible();

  });

  test('@negative Invalid Password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'invalid_password');

    await expect(loginPage.errorMessage).toBeVisible();

  })

  test('@negative Empty Credentials', async ({ page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('' , '');

    await expect(loginPage.errorMessage).toBeVisible();
  })

});