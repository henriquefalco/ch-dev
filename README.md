# Carlos Henrique — Portfólio

Portfólio profissional de Carlos Henrique, Senior Front-end Developer e Tech
Lead. A interface combina uma direção visual minimalista e escura com detalhes
inspirados nos anos 2000.

## Tecnologias

- React 19 e TypeScript
- React + Vite estático
- CSS responsivo sem framework de UI
- GitHub Pages

## Desenvolvimento

Requer Node.js 22.13 ou superior.

```bash
npm install
npm run dev
```

## Verificações

```bash
npm run typecheck
npm run lint
npm run build
```

O build é gerado em `dist/` sem dependência de servidor. Depois que esta branch
for incorporada à `main`, o workflow em `.github/workflows/deploy-pages.yml`
publicará o site automaticamente no GitHub Pages.
