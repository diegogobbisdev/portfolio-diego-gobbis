# Portfólio Diego Gobbis

## Visão geral
Este projeto é um site de portfólio pessoal desenvolvido como aplicação front-end estática.
Ele apresenta informações profissionais, projetos, experiência, certificados e canais de contato.

Não há backend, banco de dados nem autenticação. Toda a lógica roda no navegador.

## Hospedagem
Este portfólio está hospedado no GitHub Pages.

## Tecnologias usadas
- HTML5 semântico
- CSS3 puro (sem framework)
- JavaScript Vanilla (sem biblioteca)
- Google Fonts (`Poppins`)
- SVG inline para ícones sociais e de contato

## Estrutura atual do projeto
```text
portfolio-diego-gobbis-main/
  index.html
  package.json
  README.md
  assets/
    css/
      styles.css
    js/
      script.js
    images/
      ...arquivos de imagem do portfólio
```

## O que foi implementado

### 1) Estrutura de página
O `index.html` foi organizado em seções com navegação por âncoras:
- Início
- Sobre
- Experiência
- Projetos
- Certificados
- Contato

Também inclui:
- barra de navegação fixa
- menu hamburguer para mobile
- rodapé

### 2) Estilo visual (CSS)
O `assets/css/styles.css` define:
- variáveis de tema com `:root` (cores principais, fundo, texto, borda)
- layout responsivo com `@media`
- animações de entrada e transições
- estilos dos cards (experiência, projetos e certificados)
- estados de foco para acessibilidade (`:focus-visible`)
- suporte a redução de movimento (`prefers-reduced-motion`)

Elementos visuais principais:
- fundo com canvas animado
- cursor customizado (desativado em dispositivos touch)
- gradientes e efeitos de hover
- carrosséis em grade por seção

### 3) Comportamento e interações (JavaScript)
O `assets/js/script.js` implementa:

#### Fundo animado em canvas
- cria partículas
- move partículas na tela
- conecta partículas próximas por linhas
- reage ao movimento do mouse
- recalcula dimensão em `resize`

#### Cursor customizado
- cursor principal + rastro
- efeito de escala ao passar em links e botões

#### Navegação mobile
- abre/fecha o menu hamburguer
- atualiza `aria-expanded`
- permite ativação por teclado (`Enter` e `Space`)
- fecha menu ao clicar em um link

#### Carrosséis reutilizáveis
Uma função genérica (`initCardCarousel`) controla os três carrosséis:
- experiência
- projetos
- certificados

Recursos dos carrosséis:
- paginação por quantidade de cards visíveis
- botões anterior/próximo com estado desabilitado
- indicador de página atual
- recalculo automático no `resize`

#### Navegação ativa por rolagem
- marca no menu a seção visível durante o scroll

#### Efeitos de entrada
- efeito de digitação no nome principal
- reveal dos cards quando entram na viewport
- debounce no evento de scroll para reduzir chamadas excessivas

#### Scroll suave
- intercepta links âncora (`#...`) e aplica `scrollIntoView` com `behavior: smooth`

## Recursos de acessibilidade já presentes
- `lang="pt-BR"`
- atributos `aria-label` em elementos de navegação e botões
- `aria-live` nos indicadores de carrossel
- foco visível para teclado
- interação por teclado no menu hamburguer

## Recursos de responsividade
O layout adapta conteúdo para diferentes larguras:
- reorganização de grids em telas menores
- ajuste de quantidade de cards por página nos carrosséis
- ocultação do cursor customizado em dispositivos de toque

## Imagens e assets
As imagens são locais e ficam em `assets/images`.
O HTML referencia essas imagens diretamente para:
- cards de projetos
- cards de certificados
- foto de perfil

## Dependências e scripts
O `package.json` existe, mas o projeto não depende de build tool para rodar.
Script atual:
- `build`: apenas placeholder (`echo 'no build script'`)

## Como executar localmente
Como é um site estático, há duas opções simples:

### Opção 1
Abrir `index.html` direto no navegador.

### Opção 2 (recomendado)
Usar servidor local para evitar limitações de arquivo local.
Exemplos:
- extensão Live Server no VS Code
- qualquer servidor estático simples

## O que não é usado neste projeto
- React, Vue, Angular ou outro framework
- TypeScript
- Sass/Less
- API própria/backend
- banco de dados local ou remoto para esta aplicação

## Observações de manutenção
Para evoluir o projeto sem perder organização:
- manter CSS em `assets/css/styles.css`
- manter lógica JS em `assets/js/script.js`
- manter imagens em `assets/images`
- atualizar links e textos no `index.html`
- revisar acessibilidade quando adicionar novos componentes interativos
