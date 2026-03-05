import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly productItems: Locator;
    readonly shoppingCartBadge: Locator;
    readonly cartIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productItems = page.locator('.inventory_item');
        this.shoppingCartBadge = page.locator('.shopping_cart_badge');
        this.cartIcon = page.locator('.shopping_cart_link');

    }

    async addProductToCart(){
        const count = await this.productItems.count();
        const randomIndex = Math.floor(Math.random() * count);

        const randomProduct = this.productItems.nth(randomIndex);

        await randomProduct.locator('[data-test^="add-to-cart"]').click();

    }

    async removeProductFromCart(){
        await this.page.locator('[data-test^="remove"]').first().click();
    }

    async goToCart(){
        await this.cartIcon.click();
    }
}