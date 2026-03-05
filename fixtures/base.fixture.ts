import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

type MyFixtures = {
  login: Page;
};

export const test = base.extend<MyFixtures>({
  login: async ({ page }, use) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await use(page);
  }
});

export { expect };