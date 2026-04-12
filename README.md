# Portfólio — Diego Gobbis

Site de portfólio pessoal desenvolvido com HTML, CSS e JavaScript puro.  
Apresenta minha trajetória, projetos, certificados, currículo e canais de contato.

## Acesse

🔗 [diegogobbisdev.github.io/portfolio-diego-gobbis](https://diegogobbisdev.github.io/portfolio-diego-gobbis)

## Tecnologias

- HTML5 semântico
- CSS3 puro (sem framework)
- JavaScript Vanilla (sem biblioteca)
- Google Fonts — Poppins (portfólio) e Playfair Display + DM Sans (currículo)
- SVG inline para ícones

## Seções

| Seção | Descrição |
|---|---|
| Início | Apresentação com foto, título e botões de ação |
| Sobre | Descrição pessoal e tecnologias organizadas por categoria |
| Trajetória | Carrossel com experiências e projetos em linha do tempo |
| Projetos | Carrossel com cards de projetos — 2 por página |
| Certificados | Carrossel com certificados obtidos |
| Contato | Links diretos para e-mail, WhatsApp, LinkedIn e GitHub |

## Projetos exibidos

- **Controle de Caixa** — Sistema financeiro interno desenvolvido para uso real na empresa
- **Landing Page JoiÓtica** — Primeira landing page oficial como desenvolvedor
- **ModernSite** — Projeto acadêmico da disciplina de Programação para Internet

## Funcionalidades

- Fundo animado com rede de partículas interativa (canvas)
- Cursor customizado com rastro
- Carrosséis reutilizáveis com paginação responsiva (Trajetória, Projetos e Certificados)
- Menu hambúrguer acessível com navegação por teclado
- Link ativo no menu atualizado durante o scroll
- Reveal de cards ao entrar na viewport
- Scroll suave entre seções
- Canvas pausado automaticamente quando a aba está em segundo plano
- Suporte a `prefers-reduced-motion`
- Cursor customizado desativado em dispositivos de toque

## Currículo

O portfólio inclui um currículo separado em `curriculo.html`, com estrutura própria de HTML, CSS e JS:

- Design em dois painéis (barra lateral azul + conteúdo principal)
- Foto de perfil, habilidades, formação e certificados na barra lateral
- Projetos com links para repositório e demo, experiência profissional e resumo no conteúdo principal
- Botão "Imprimir / Salvar PDF" para exportação
- Layout responsivo com suporte a impressão

## Acessibilidade

- `lang="pt-BR"` no documento
- `aria-label` em botões e links de navegação
- `aria-live` nos indicadores de carrossel
- Foco visível para navegação por teclado
- Cursor customizado desativado em dispositivos de toque

## Estrutura

```
portfolio-diego-gobbis/
├── index.html
├── curriculo.html
└── assets/
    ├── css/
    │   ├── styles.css
    │   └── curriculo.css
    ├── js/
    │   ├── script.js
    │   └── curriculo.js
    └── images/
        ├── profile.jpg
        ├── controle-caixa.png
        ├── joiotica.png
        ├── site-moderno.png
        ├── santander front-end.jpg
        ├── javascritp developer.jpg
        ├── css web developer.jpg
        ├── html developer.jpg
        └── ri happy.jpg
```

## Como rodar localmente

Abra o `index.html` direto no navegador, ou use o Live Server do VS Code para evitar limitações de arquivo local.
