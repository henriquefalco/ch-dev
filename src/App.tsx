import { useState } from "react";

type ProfileMode = "interface" | "systems";

const profileModes = {
  interface: {
    label: "Interface",
    status: "interface layer / active",
    lines: [
      ["role", "Senior Front-end Developer"],
      ["core", "React + TypeScript"],
      ["architecture", "Micro-frontends"],
      ["product", "Backoffices corporativos"],
      ["experience", "8+ years"],
    ],
  },
  systems: {
    label: "Systems",
    status: "systems layer / active",
    lines: [
      ["runtime", "Node.js + PHP"],
      ["frameworks", "Laravel + CodeIgniter"],
      ["platform", "AWS + Docker"],
      ["data", "SQL + MySQL"],
      ["leadership", "Architecture + Team"],
    ],
  },
} satisfies Record<
  ProfileMode,
  { label: string; status: string; lines: readonly (readonly [string, string])[] }
>;

const impact = [
  {
    index: "01.1",
    title: "Backoffices que movem operações",
    description:
      "Construção e evolução de sistemas corporativos, com novos fluxos, manutenção contínua e suporte a operações críticas.",
    tags: ["React", "Product engineering", "Corporate systems"],
  },
  {
    index: "01.2",
    title: "Front-end distribuído, produto coeso",
    description:
      "Experiência prática com micro-frontends e decisões arquiteturais para preservar autonomia sem perder consistência.",
    tags: ["TypeScript", "Micro-frontends", "Architecture"],
  },
  {
    index: "01.3",
    title: "Fundações full-stack de negócio",
    description:
      "Websites, sistemas financeiros e plataformas de gestão construídos e mantidos com visão de ponta a ponta.",
    tags: ["Node.js", "PHP", "SQL"],
  },
];

const experiences = [
  {
    period: "nov 2025 — agora",
    role: "Senior Frontend Developer",
    company: "Extreme Digital Solutions — EDS",
    description:
      "Atuação sênior em front-end, conectando arquitetura, qualidade de código e necessidades de produto.",
  },
  {
    period: "nov 2023 — dez 2025",
    role: "Líder técnico",
    company: "Superbid",
    description:
      "Definições arquiteturais, organização de time, revisão de código e suporte próximo a desenvolvedores, com foco em qualidade e escalabilidade.",
  },
  {
    period: "fev 2021 — nov 2023",
    role: "Engenheiro de software",
    company: "Superbid",
    description:
      "Desenvolvimento front-end com React, implementação de micro-frontends e evolução de um backoffice corporativo.",
  },
  {
    period: "jun 2019 — fev 2021",
    role: "Full-stack Developer Jr",
    company: "Sold Leilões",
    description:
      "Novas funcionalidades e manutenção de websites, backoffices e sistema financeiro usando PHP, Laravel e CodeIgniter.",
  },
  {
    period: "abr 2018 — mai 2019",
    role: "Desenvolvedor Web — estágio",
    company: "Sold Leilões",
    description:
      "O início da trajetória profissional em desenvolvimento web e sistemas de negócio.",
  },
];

const capabilities = [
  {
    number: "Layer_01",
    title: "Interfaces",
    body: "React, TypeScript, JavaScript, CSS, Tailwind, Redux, GraphQL e arquitetura de micro-frontends.",
  },
  {
    number: "Layer_02",
    title: "Product engineering",
    body: "Backoffices, sistemas de gestão, decisões arquiteturais, revisão de código e entrega orientada ao negócio.",
  },
  {
    number: "Layer_03",
    title: "Systems",
    body: "Node.js, PHP, Laravel, CodeIgniter, Java, Spring Boot, SQL, MySQL, Docker e AWS.",
  },
];

export default function App() {
  const [mode, setMode] = useState<ProfileMode>("interface");
  const profile = profileModes[mode];

  return (
    <>
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Carlos Henrique — início">
          <span className="brand-mark" aria-hidden="true">
            C/
          </span>
          <span className="brand-copy">
            <strong>Carlos Henrique</strong>
            <small>portfolio_200x</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#work">Trabalho</a>
          <a href="#experience">Experiência</a>
          <a href="#about">Sobre</a>
        </nav>

        <a
          className="header-status"
          href="https://www.linkedin.com/in/carlos-henrique-057835a6/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="status-dot" aria-hidden="true" />
          LinkedIn
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div>
              <p className="eyebrow">Senior Front-end Developer / Tech Lead</p>
              <h1 id="hero-title">
                Interfaces que <span>escalam.</span>
                <br />
                Sistemas que sustentam.
              </h1>
              <p className="hero-summary">
                Mais de 8 anos criando aplicações web escaláveis, performáticas
                e orientadas a negócio — com profundidade em front-end e visão
                de ponta a ponta.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Ver trajetória <span aria-hidden="true">↘</span>
                </a>
                <a
                  className="button button-secondary"
                  href="https://www.linkedin.com/in/carlos-henrique-057835a6/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="hero-footnote" aria-label="Resumo de atuação">
              <span>
                Local
                <strong>São Paulo, Brasil</strong>
              </span>
              <span>
                Foco
                <strong>Product engineering</strong>
              </span>
              <span>
                Lente ativa
                <strong>{profile.label}</strong>
              </span>
            </div>
          </div>

          <div className="hero-console" aria-label="Perfil técnico interativo">
            <div className="mode-switch" aria-label="Escolha uma lente profissional">
              {(Object.keys(profileModes) as ProfileMode[]).map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={mode === item ? "is-active" : ""}
                  aria-pressed={mode === item}
                  onClick={() => setMode(item)}
                >
                  0{index + 1} / {profileModes[item].label}
                </button>
              ))}
            </div>

            <div className={`profile-window profile-window--${mode}`}>
              <div className="window-bar">
                <span>build.profile.ts</span>
                <span className="window-controls" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <div className="code-block" aria-live="polite">
                <p className="code-row">
                  <span className="line-number">01</span>
                  <span>
                    <b>const</b> carlos = {"{"}
                  </span>
                </p>
                {profile.lines.map(([key, value], index) => (
                  <p className="code-row" key={key}>
                    <span className="line-number">{String(index + 2).padStart(2, "0")}</span>
                    <span>
                      &nbsp;&nbsp;{key}: <em>“{value}”</em>,
                    </span>
                  </p>
                ))}
                <p className="code-row">
                  <span className="line-number">07</span>
                  <span>{"}"};</span>
                </p>
              </div>
              <div className="window-status">
                <span>{profile.status}</span>
                <span>ready / brt−03</span>
              </div>
            </div>
          </div>
        </section>

        <div className="status-rail" aria-label="Destaques profissionais">
          <span>
            Experience / <b>8+ anos</b>
          </span>
          <span>
            Core / <b>React + TypeScript</b>
          </span>
          <span>
            Architecture / <b>Micro-frontends</b>
          </span>
          <span>
            Scope / <b>Front to back</b>
          </span>
        </div>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="section-index">01 / Impacto selecionado</p>
              <h2 id="work-title">Trabalho que sustenta produto real.</h2>
            </div>
            <p>
              Uma trajetória construída em software corporativo: interfaces
              densas, arquiteturas que precisam crescer e sistemas que não podem
              parar.
            </p>
          </div>

          <div className="impact-list">
            {impact.map((item) => (
              <article className="impact-row" key={item.index}>
                <span className="item-index">{item.index}</span>
                <div>
                  <h3>{item.title}</h3>
                  <ul className="tag-list" aria-label="Tecnologias e competências">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <p>{item.description}</p>
                <span className="row-arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section experience-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-heading">
            <div>
              <p className="section-index">02 / Experiência</p>
              <h2 id="experience-title">Código, contexto e liderança.</h2>
            </div>
            <p>
              Da implementação full-stack à liderança técnica, sempre perto do
              código, do time e das decisões de produto.
            </p>
          </div>

          <ol className="timeline">
            {experiences.map((item, index) => (
              <li key={`${item.company}-${item.role}`}>
                <span className="timeline-number">0{index + 1}</span>
                <time>{item.period}</time>
                <div className="timeline-role">
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <p className="timeline-description">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section" id="capabilities" aria-labelledby="capabilities-title">
          <div className="section-heading">
            <div>
              <p className="section-index">03 / Capabilities</p>
              <h2 id="capabilities-title">Uma stack, três camadas.</h2>
            </div>
            <p>
              Tecnologia apresentada pelo papel que cumpre no produto — não
              como uma parede de badges.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map((item) => (
              <article key={item.number}>
                <span className="item-index">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="manifesto" id="about" aria-labelledby="about-title">
          <p className="eyebrow">Operating principle</p>
          <div>
            <h2 id="about-title">
              O melhor software não parece complicado. <span>Ele parece inevitável.</span>
            </h2>
            <p>
              Sou movido por desafios técnicos, colaboração e pela construção de
              soluções que geram valor real. Gosto de transformar complexidade em
              interfaces claras e fundações confiáveis.
            </p>
          </div>
        </section>

        <section className="proof-section" aria-label="Formação e recomendação">
          <div className="education-block">
            <p className="section-index">04 / Formação</p>
            <h2>Base técnica, aprendizado contínuo.</h2>
            <ul>
              <li>
                <strong>Ciência da Computação</strong>
                <span>UNINOVE · 2018 — 2021</span>
              </li>
              <li>
                <strong>Programação de Computadores</strong>
                <span>ETEC São Paulo · 2011 — 2012</span>
              </li>
              <li>
                <strong>Engenharia de Controle e Automação</strong>
                <span>FMU · 2016 — 2018</span>
              </li>
            </ul>
          </div>

          <figure className="recommendation">
            <figcaption>Peer signal / 2024</figcaption>
            <blockquote>
              “Liderança próxima, orientação clara e foco constante na qualidade
              e no sucesso das entregas.”
            </blockquote>
            <p>— Síntese de recomendação profissional no LinkedIn</p>
          </figure>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <p className="section-index">05 / Contato</p>
          <div className="contact-grid">
            <h2 id="contact-title">Vamos construir algo que mereça existir.</h2>
            <div>
              <p>
                Aberto a boas conversas sobre front-end de alta qualidade,
                arquitetura e engenharia de produto.
              </p>
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/carlos-henrique-057835a6/"
                target="_blank"
                rel="noreferrer"
              >
                Conversar no LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <footer className="site-footer">
            <span>Carlos Henrique / portfolio_200x</span>
            <span>São Paulo / GMT−03</span>
            <span>© 2026 / all systems nominal</span>
          </footer>
        </section>
      </main>
    </>
  );
}
