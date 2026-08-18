# Portfólio — plano de produto e direção visual

## Conceito: Midnight 200X

Um portfólio editorial escuro, preciso e um pouco estranho — como uma interface profissional imaginada em 2003 e refinada em 2026. A nostalgia aparece em detalhes de sistema, tipografia mono, linhas de 1 px, índices numéricos e pequenos estados de conexão. Ela não aparece como um “terminal hacker” espalhado pela página.

Frase-guia: **interfaces que parecem inevitáveis; sistemas que não aparecem, mas sustentam tudo.**

## O que aproveitamos das referências

- **Adham Dannaway:** comunicação instantânea da dualidade profissional e hero memorável.
- **Sharlee:** tipografia com personalidade, ritmo editorial e uso forte de espaço negativo.
- **Michael Rodrigues:** tema escuro, conteúdo técnico explícito e estrutura de portfólio completa.

## O que será diferente

- Nada de retrato dividido, terminal gigante ou neon em excesso.
- A dualidade não será “designer versus coder”. Será **interface versus systems**: duas lentes para o mesmo trabalho.
- Os projetos terão leitura editorial, em linhas grandes, com preview visual no hover/foco.
- O tom Y2K será um subtexto sofisticado, não uma fantasia nostálgica.

## Arquitetura da página

### 1. Header

- Monograma `C/` e identificador `PORTFOLIO_200X`.
- Navegação curta: Work, Experience, About e Contact.
- Estado discreto de disponibilidade.
- Fixo após a primeira rolagem, com fundo opaco e borda inferior.

### 2. Hero — duas lentes, uma pessoa

- Coluna esquerda: posicionamento, resumo profissional e duas ações.
- Coluna direita: painel `build.profile` alternável entre **Interface** e **Systems**.
- A alternância reorganiza palavras-chave e microcopy, sem mudar a identidade do site.
- Uma linha de status fecha o primeiro viewport: localização, foco atual e disponibilidade.

Copy provisória:

> Interfaces precisas. Sistemas que sustentam.
>
> Front-end engineer com repertório de back-end, criando produtos digitais rápidos, claros e feitos para durar.

### 3. Selected work

- Três ou quatro projetos realmente fortes, sem grade de cards genéricos.
- Cada projeto ocupa uma linha editorial com índice, título, contribuição, stack e ano.
- Hover, foco ou toque revela preview do projeto e um resumo de impacto.
- Cada case poderá abrir uma rota própria no futuro; a V1 pode usar painéis expandidos na mesma página.

### 4. Experience

- Linha do tempo vertical compacta.
- Cada posição mostra empresa, período, cargo e de duas a três realizações mensuráveis.
- Tecnologias aparecem como contexto secundário, não como protagonista.

### 5. Capabilities

- Três grupos: **Interfaces**, **Product Engineering** e **Systems**.
- Skills apresentadas por resultado: arquitetura de UI, design systems, performance, APIs, bancos, integrações e observabilidade.
- Evitar “nuvem de badges” de tecnologias.

### 6. About / operating principles

- Texto curto em primeira pessoa.
- Três princípios de trabalho: clareza, qualidade de interação e responsabilidade de ponta a ponta.
- Foto é opcional. Se usada, deve ser monocromática e tratada como elemento editorial, não avatar circular.

### 7. Contact

- Fechamento grande: `Vamos construir algo que mereça existir.`
- Email como ação principal; LinkedIn e GitHub como secundárias.
- Rodapé no formato de status bar: versão, ano e timezone.

## Sistema visual

- **Base:** preto azulado, grafite e branco frio.
- **Acento primário:** ciano elétrico, usado em estados, links e detalhes de interação.
- **Acento secundário:** violeta frio, reservado para a lente Systems.
- **Tipografia display:** Space Grotesk ou Geist Sans.
- **Tipografia técnica:** IBM Plex Mono ou Geist Mono.
- **Grid:** 12 colunas, largura máxima entre 1.280 e 1.440 px, margens generosas.
- **Bordas:** 1 px; raios pequenos, entre 2 e 8 px.
- **Textura:** ruído muito leve e linhas de sistema somente em áreas pontuais.

## Movimento e interação

- Entrada do hero em 500–700 ms, com deslocamento curto e opacidade.
- Cursor customizado somente em desktop com ponteiro preciso; cursor nativo em touch.
- Projetos reagem a hover e foco com o mesmo conteúdo.
- Alternância Interface/Systems acessível por teclado e respeitando `prefers-reduced-motion`.
- Scroll suave apenas quando não prejudicar acessibilidade.
- Nada de animações contínuas ou loaders decorativos.

## Responsividade

- **Desktop:** hero em duas colunas e previews de projeto laterais.
- **Tablet:** hero assimétrico empilhado, preservando o painel `build.profile`.
- **Mobile:** navegação compacta, tipografia fluida, projetos em acordeão e status rail quebrando em linhas.
- Alvo mínimo: 320 px sem scroll horizontal.

## Arquitetura técnica sugerida

- React + TypeScript.
- Uma rota principal na V1, com componentes semânticos por seção.
- CSS moderno com custom properties, container queries quando úteis e animações nativas.
- Motion/Framer Motion somente se as transições justificarem a dependência.
- Conteúdo profissional centralizado em dados tipados para facilitar manutenção.
- Imagens responsivas em AVIF/WebP e carregamento sob demanda.
- Metadados completos, Open Graph, sitemap, schema.org Person e SEO por projeto.
- Acessibilidade WCAG AA, navegação integral por teclado e estados de foco visíveis.

## Componentes previstos

- `SiteHeader`
- `HeroProfile`
- `ProfileLensSwitch`
- `StatusRail`
- `ProjectIndex`
- `ProjectPreview`
- `ExperienceTimeline`
- `CapabilityGroups`
- `AboutStatement`
- `ContactFooter`

## Fases de desenvolvimento

### Fase 1 — conteúdo e direção

- Receber LinkedIn, GitHub, email, currículo e projetos prioritários.
- Transformar experiências em narrativa e selecionar três ou quatro cases.
- Aprovar a direção Midnight 200X e ajustar o mockup.

### Fase 2 — fundação

- Criar o projeto React + TypeScript.
- Definir tokens, fontes, grid, breakpoints e estrutura semântica.
- Implementar header, hero e status rail.

### Fase 3 — conteúdo principal

- Implementar projetos, experiência, capacidades, about e contato.
- Adicionar previews, imagens e estados responsivos.

### Fase 4 — movimento e refinamento

- Implementar transições, hover/focus e microinterações.
- Revisar contraste, teclado, reduced motion e leitores de tela.

### Fase 5 — qualidade e publicação

- Validar mobile, tablet e desktop.
- Auditar performance, SEO e acessibilidade.
- Criar social preview, configurar domínio e publicar.

## Conteúdo necessário antes da implementação

- URL correta do LinkedIn.
- GitHub e email público.
- Nome profissional e cidade/timezone que devem aparecer.
- Três ou quatro projetos: contexto, sua contribuição, stack, resultado e imagens.
- Preferência sobre foto pessoal no hero ou em About.
- Idioma: português, inglês ou bilíngue.

## Critérios de aceite da primeira versão

- A especialidade front-end e a experiência back-end ficam claras no primeiro viewport.
- O site possui identidade própria e não replica a composição das referências.
- Todo conteúdo é legível e navegável a partir de 320 px.
- Interações funcionam por mouse, teclado e toque.
- Nenhuma animação é essencial para compreender o conteúdo.
- O carregamento inicial permanece leve e rápido.
- Projetos e experiência são fáceis de atualizar sem alterar componentes.
