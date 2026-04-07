# Portfólio — Diego Gobbis

Site de portfólio pessoal desenvolvido com HTML, CSS e JavaScript puro.  
Apresenta minha trajetória, projetos, certificados e canais de contato.

## Acesse

🔗 [diegogobbisdev.github.io](https://diegogobbisdev.github.io/portfolio-diego-gobbis-main)

## Tecnologias

- HTML5 semântico
- CSS3 puro (sem framework)
- JavaScript Vanilla (sem biblioteca)
- Google Fonts — Poppins
- SVG inline para ícones

## Funcionalidades

- Fundo animado com rede de partículas interativa (canvas)
- Cursor customizado com rastro
- Efeito de digitação no nome (CSS puro, sem layout shift)
- Carrosséis reutilizáveis com paginação responsiva (Trajetória, Projetos e Certificados)
- Menu hamburguer acessível com navegação por teclado
- Link ativo no menu atualizado durante o scroll
- Reveal de cards ao entrar na viewport
- Scroll suave entre seções
- Canvas pausado automaticamente quando a aba está em segundo plano
- Suporte a `prefers-reduced-motion`

## Acessibilidade

- `lang="pt-BR"` no documento
- `aria-label` em botões e links de navegação
- `aria-live` nos indicadores de carrossel
- Foco visível para navegação por teclado
- Cursor customizado desativado em dispositivos de toque

## Estrutura

```
portfolio-diego-gobbis-main/
  index.html
  assets/
    css/
      styles.css
    js/
      script.js
    images/
    files/
      curriculo.pdf
```

## Como rodar localmente

Abra o `index.html` direto no navegador, ou use o Live Server do VS Code para evitar limitações de arquivo local.
