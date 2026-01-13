# Testes Automatizados com Playwright e MCP By Glaucio

# MCP - MCP (Model Context Protocol) no contexto do Playwright, estamos nos referindo à integração do framework com Agentes de Inteligência Artificial. No caso do Playwright, o MCP serve como uma ponte que permite à IA não apenas "escrever" código, mas executar, depurar e inspecionar o navegador em tempo real.

Este projeto contém testes automatizados usando Playwright para verificar a página inicial do Playwright.

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## 🚀 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Instale os navegadores do Playwright:
```bash
npx playwright install
```

## 🧪 Executando os Testes

### Executar todos os testes
```bash
npm test
```

### Executar testes em modo headed (com interface gráfica)
```bash
npm run test:headed
```

### Executar testes com UI interativa
```bash
npm run test:ui
```

### Executar testes em modo debug
```bash
npm run test:debug
```

### Executar testes em navegadores específicos
```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

### Visualizar relatório de testes
```bash
npm run test:report
```

## 📁 Estrutura do Projeto

```
playwright-tests/
├── tests/
│   └── playwright-homepage.spec.js  # Testes da homepage
├── playwright.config.js              # Configuração do Playwright
├── package.json                      # Dependências e scripts
├── .gitignore                        # Arquivos ignorados pelo Git
└── README.md                         # Este arquivo
```

## 🧩 Testes Implementados

### Teste: Verificação do texto principal
- **Arquivo**: `tests/playwright-homepage.spec.js`
- **Descrição**: Verifica se o texto "Playwright enables reliable end-to-end testing for modern web apps." está visível na página inicial
- **URL testada**: https://playwright.dev

### Teste: Verificação do título da página
- Verifica se o título da página contém o texto esperado

## 📊 Navegadores Suportados

Os testes são executados nos seguintes navegadores:
- Chromium (Chrome/Edge)
- Firefox
- WebKit (Safari)

## 📝 Configuração

As configurações podem ser ajustadas no arquivo `playwright.config.js`:
- Timeout dos testes
- Número de retries
- Screenshots e vídeos
- Navegadores a serem testados

## 🔍 Recursos do Playwright

- **Auto-wait**: Playwright espera automaticamente pelos elementos
- **Screenshots**: Capturados automaticamente em caso de falha
- **Vídeos**: Gravados automaticamente em caso de falha
- **Trace**: Rastreamento completo da execução do teste

## 📚 Documentação

Para mais informações sobre Playwright, visite:
- [Documentação oficial](https://playwright.dev)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
