const { test, expect } = require('@playwright/test');

test.describe('Playwright Homepage', () => {
  test('deve verificar se o texto principal está visível', async ({ page }) => {
    // Navegar para a página do Playwright
    await page.goto('https://playwright.dev');

    // Verificar se o texto está visível na página
    const textoPrincipal = page.getByRole('heading', { 
      name: 'Playwright enables reliable end-to-end testing for modern web apps.' 
    });

    await expect(textoPrincipal).toBeVisible();
    
    // Verificação adicional: confirmar que o texto está presente no conteúdo da página
    await expect(page.locator('h1')).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
  });

  test('deve verificar o título da página', async ({ page }) => {
    await page.goto('https://playwright.dev');
    
    // Verificar o título da página
    await expect(page).toHaveTitle(/Fast and reliable end-to-end testing for modern web apps/);
  });
});
