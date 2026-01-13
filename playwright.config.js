// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Configuração do Playwright
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  
  /* Tempo máximo para cada teste */
  timeout: 30 * 1000,
  
  expect: {
    /**
     * Tempo máximo para expect() assertions
     * @see https://playwright.dev/docs/api/class-testconfig#test-config-expect
     */
    timeout: 5000
  },
  
  /* Executar testes em paralelo */
  fullyParallel: true,
  
  /* Falhar o build se você deixar test.only no CI */
  forbidOnly: !!process.env.CI,
  
  /* Não executar testes em CI se você não especificar */
  retries: process.env.CI ? 2 : 0,
  
  /* Limite de workers para execução paralela */
  workers: process.env.CI ? 1 : undefined,
  
  /* Configuração do reporter */
  reporter: 'html',
  
  /* Opções compartilhadas para todos os projetos */
  use: {
    /* URL base para usar em navegações como await page.goto('/') */
    // baseURL: 'http://127.0.0.1:3000',

    /* Coletar trace quando retentar o teste falho */
    trace: 'on-first-retry',
    
    /* Screenshot apenas quando falhar */
    screenshot: 'only-on-failure',
    
    /* Vídeo apenas quando falhar */
    video: 'retain-on-failure',
  },

  /* Configurar projetos para diferentes navegadores */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Testes em dispositivos móveis */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
  ],

  /* Executar seu servidor local antes de iniciar os testes */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
