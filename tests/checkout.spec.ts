import { test, expect } from '../fixtures/base.fixture';
import { CartPage } from '../pages/cart.page';
import { InventoryPage } from '../pages/inventory.page';    
import { CheckoutPage } from '../pages/checkout.page';

test.describe('Checkout tests', () => {

    test('@smoke Checkout Process', async ({ login }) => {

        const inventoryPage = new InventoryPage(login);
        const cartPage = new CartPage(login);
        const checkoutPage = new CheckoutPage(login);

        await expect(login).toHaveURL('/inventory.html');

        //Add product to cart
        await inventoryPage.addProductToCart();
        await expect(inventoryPage.shoppingCartBadge).toHaveText('1');
        
        //Go to cart and checkout
        await inventoryPage.goToCart();
        await expect(login).toHaveURL('/cart.html');
        await expect(cartPage.cartItems).toHaveCount(1);

        //Checkout
        await cartPage.checkout();
        await expect(login).toHaveURL('/checkout-step-one.html');

        //Fill in checkout information
        await checkoutPage.fillCheckoutInformation('Thanh', 'Dang', '12345');
        await expect(login).toHaveURL('/checkout-step-two.html');

        //Finish checkout
        await checkoutPage.finishCheckout();
        await expect(login).toHaveURL('/checkout-complete.html');

        //Verify checkout complete
        await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!');
    });
});