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

## ⚙️ Configuração para Playwright Test Agents (MCP) no Visual Studio 🔧

O Playwright Test Agents (MCP) permite que ferramentas de IA (agents) gerem, corrijam e executem testes diretamente no seu repositório. Abaixo estão os passos básicos para habilitar essa integração no VS Code:

1. **Pré-requisitos**
   - Node.js 16+
   - Playwright atualizado no projeto (reinstale se necessário: `npm i -D @playwright/test`).
   - VS Code (recomenda-se versão **>= 1.105** para suporte completo da experiência agent).
   - Extensão **Playwright** para VS Code (procure por `ms-playwright.playwright`).

2. **Gerar definições dos agents**

   No terminal do projeto, rode:

   ```bash
   npx playwright init-agents --loop=vscode
   ```

   Esse comando cria/atualiza as definições dos agents usadas pelo VS Code. Sempre execute novamente após atualizar o Playwright.

3. **Workflow básico no VS Code**
   - Abra o **Command Palette** (Ctrl/Cmd+Shift+P) e procure por comandos relacionados a *Playwright Agents* (Planner, Generator, Healer) ou por "Playwright: Start Test Agents".
   - Use o **Planner** para gerar um plano de testes em `specs/` (ex.: `specs/basic-operations.md`).
   - Use o **Generator** para transformar o plano em arquivos de teste sob `tests/`.
   - Use o **Healer** para tentar corrigir testes que falharam automaticamente.

4. **Seed test**

   O Planner usa um *seed test* (ex.: `seed.spec.ts`) para inicializar o contexto da aplicação. Garanta que o `seed.spec.ts` esteja presente e configurado para preparar o ambiente de testes.

5. **Recomendações e observações**
   - Integre o Playwright Agents com sua ferramenta de IA preferida (por exemplo, extensões que suportam MCP). A experiência pode variar dependendo da extensão/serviço.
   - Sempre regenere as definições com `npx playwright init-agents --loop=vscode` quando atualizar o Playwright.
   - Consulte a documentação oficial para exemplos e detalhes: https://playwright.dev/docs/test-agents

## 🔍 Recursos do Playwright

- **Auto-wait**: Playwright espera automaticamente pelos elementos
- **Screenshots**: Capturados automaticamente em caso de falha
- **Vídeos**: Gravados automaticamente em caso de falha
- **Trace**: Rastreamento completo da execução do teste

## 📚 Documentação

Para mais informações sobre Playwright, visite:
- [Documentação oficial](https://playwright.dev)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
