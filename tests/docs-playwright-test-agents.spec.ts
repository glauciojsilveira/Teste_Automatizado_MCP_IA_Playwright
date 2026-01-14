// spec: (user request)
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Docs navigation — Playwright Test Agents', () => {
  test('Navegar: Docs → Playwright Test → Agents e validar texto', async ({ page }) => {
    // 1. Navegar para https://playwright.dev
    await page.goto('https://playwright.dev');

    // 2. Clicar no link 'Docs' na navegação principal
    await page.getByRole('link', { name: 'Docs' }).click();
    // Verificar que estamos na página de introdução
    await expect(page).toHaveURL(/\/docs\/intro/);

    // 3. Clicar no link 'Agents' dentro da seção 'Playwright Test' na sidebar
    const agentsLink = page.getByRole('link', { name: 'Agents' });
    await expect(agentsLink).toBeVisible();
    await agentsLink.click();

    // 4. Verificar que o texto 'Playwright Test Agents' está visível na página alvo
    await expect(page.getByRole('heading', { name: 'Playwright Test Agents' })).toBeVisible({ timeout: 5000 })
  });
});
