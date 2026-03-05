import { test, expect } from '../fixtures/base.fixture';
import { InventoryPage } from '../pages/inventory.page';

test.describe('Inventory tests', () => {

    test('@regression Add and Remove Product from Cart', async ({ login }) => {

    const inventoryPage = new InventoryPage(login);
    await expect(login).toHaveURL('/inventory.html');

    await inventoryPage.addProductToCart();
    await expect(inventoryPage.shoppingCartBadge).toHaveText('1');

    await inventoryPage.removeProductFromCart();
    await expect(inventoryPage.shoppingCartBadge).toBeHidden();

    });
});