import { ScrollReveal } from "./ScrollReveal";
import { PhotoCarousel } from "./PhotoCarousel";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Sabrina", href: "#sabrina" },
  { label: "O que acontece", href: "#acontece" },
  { label: "Produtos", href: "#produtos" },
  { label: "Contato", href: "#contato" },
];

const logoSrc = "/logo-header.png";

const batePapoItems = [
  "✔ Amor-próprio e autoestima",
  "✔ Autoconhecimento",
  "✔ Desejo feminino",
  "✔ Diferenças entre homens e mulheres",
  "✔ Terapia do vibrador",
  "✔ Quebra de tabus sobre sexualidade",
];

const noiteEspecialItems = [
  "✔ Como fazer um convite especial",
  "✔ Preparação do ambiente",
  "✔ Escolha da lingerie",
  "✔ Memória olfativa",
  "✔ Memória visual",
  "✔ Memória gustativa",
  "✔ Intimidade e conexão",
  "✔ Autonomia e protagonismo feminino",
];

const convidadasItems = [
  { label: "Fazer perguntas sem vergonha", icon: "question" },
  { label: "Compartilhar experiências", icon: "conversation" },
  { label: "Aprender sobre sexualidade sem julgamentos", icon: "learning" },
  { label: "Descobrir novas formas de autocuidado", icon: "selfCare" },
  { label: "Se divertir com as amigas", icon: "joy" },
  { label: "Sair do evento mais confiantes e informadas", icon: "confidence" },
] as const;

const duracaoItems = [
  "• Bate-papo e dinâmica: entre 1h15 e 1h30",
  "• As participantes poderão adquirir os produtos da Loja da Santa : : aproximadamente 15 a 20 minutos após o encerramento",
];

const depoimentos = [
  '"Eu achei que ficaria morrendo de vergonha e acabei dando risada o evento inteiro."',
  '"Aprendi coisas que ninguém nunca tinha me explicado."',
  '"Foi o melhor Chá de Lingerie que já participei."',
  '"Leve, divertido e sem nenhum constrangimento."',
];

function LipsMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 240 128">
      <path
        d="M17 63c24-31 49-37 76-18 17 12 27 12 44 0 27-19 52-13 86 18-27 28-59 43-101 43C78 106 45 91 17 63Z"
        fill="currentColor"
      />
      <path
        d="M20 64c37-6 69-8 98-8 32 0 66 2 104 8-33 8-67 11-103 11-35 0-68-3-99-11Z"
        fill="#FDF0F5"
        opacity=".82"
      />
      <path
        d="M64 51c22 7 41 9 56 9 17 0 35-3 56-9"
        fill="none"
        stroke="#6B1A35"
        strokeLinecap="round"
        strokeWidth="5"
        opacity=".35"
      />
    </svg>
  );
}

type DecorativeMotifVariant = "conversation" | "products" | "guests";

function DecorativeMotif({
  variant,
}: {
  variant: DecorativeMotifVariant;
}) {
  const motif = {
    conversation: (
      <>
        <path d="M50 72c0-25 24-45 54-45h23c31 0 54 20 54 45s-23 45-54 45h-13l-34 26 9-30C66 107 50 91 50 72Z" />
        <path d="M89 68h57" />
        <path d="M89 88h37" />
        <path d="M92 156c9 16 29 27 53 27h17l32 23-8-27c17-8 28-21 28-38 0-13-6-24-16-33" />
      </>
    ),
    products: (
      <>
        <path d="M79 77c0-17 13-30 30-30h18c17 0 30 13 30 30v81c0 23-16 40-39 40s-39-17-39-40Z" />
        <path d="M99 47V28h38v19" />
        <path d="M91 104h54" />
        <path d="M177 94c18 22 29 40 29 57 0 19-14 33-33 33s-33-14-33-33c0-17 12-35 37-57Z" />
        <path d="M48 170c31 21 78 29 129 18" />
      </>
    ),
    guests: (
      <>
        <path d="M64 90c0-27 23-48 52-48s52 21 52 48-23 48-52 48a57 57 0 0 1-17-3l-35 20 10-33a45 45 0 0 1-10-32Z" />
        <path d="M96 85c9-12 26-11 35 0 10-11 27-12 36 0 14 18-12 40-36 57-25-17-49-39-35-57Z" />
        <path d="M52 170c39 23 97 23 139 0" />
      </>
    ),
  }[variant];

  return (
    <span className={`section-motif section-motif-${variant}`} aria-hidden="true">
      <svg viewBox="0 0 240 220">{motif}</svg>
    </span>
  );
}

type TopicSealVariant = "gift" | "clock" | "camera";

function TopicSeal({
  variant,
  className = "",
}: {
  variant: TopicSealVariant;
  className?: string;
}) {
  const icon = {
    gift: (
      <>
        <path d="M68 94h104v70H68Z" />
        <path d="M58 74h124v28H58Z" />
        <path d="M120 74v90" />
        <path d="M84 74c-13-15-9-32 7-34 15-2 24 13 29 34" />
        <path d="M156 74c13-15 9-32-7-34-15-2-24 13-29 34" />
      </>
    ),
    clock: (
      <>
        <circle cx="120" cy="112" r="50" />
        <path d="M120 82v34l24 18" />
        <path d="M94 42 80 28" />
        <path d="m146 42 14-14" />
        <path d="M101 178h38" />
      </>
    ),
    camera: (
      <>
        <path d="M58 86h33l13-18h32l13 18h33v76H58Z" />
        <circle cx="120" cy="123" r="27" />
        <path d="M74 104h18" />
        <path d="M120 96a27 27 0 0 1 27 27" />
      </>
    ),
  }[variant];

  return (
    <span className={`topic-seal ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 240 220">
        <circle className="topic-seal-ring topic-seal-ring-outer" cx="120" cy="110" r="96" />
        <circle className="topic-seal-ring topic-seal-ring-mid" cx="120" cy="110" r="75" />
        <circle className="topic-seal-ring topic-seal-ring-inner" cx="120" cy="110" r="53" />
        <g className="topic-seal-icon">{icon}</g>
      </svg>
    </span>
  );
}

type BenefitIconName = (typeof convidadasItems)[number]["icon"];

function BenefitIcon({ name }: { name: BenefitIconName }) {
  const icon = {
    question: (
      <>
        <path d="M5 18.5 4 21l2.8-1.2A8 8 0 1 0 4 13.7a7.9 7.9 0 0 0 1 4.8Z" />
        <path d="M10.2 9.5a2 2 0 0 1 3.6 1.2c0 1.6-1.8 1.8-1.8 3.1" />
        <path d="M12 16.4h.01" />
      </>
    ),
    conversation: (
      <>
        <path d="M4.5 10.5a5.5 5.5 0 0 1 9.3-4l.2.2" />
        <path d="M6.1 15.4 4 16l.6-2.1a5.5 5.5 0 0 1-.1-3.4" />
        <path d="M10 14a5 5 0 0 0 8.1 3.9L20 18.5l-.6-1.9A5 5 0 1 0 10 14Z" />
        <path d="M13 14h4" />
      </>
    ),
    learning: (
      <>
        <path d="M4 6.5h5.4A3.6 3.6 0 0 1 13 10.1V20a3.8 3.8 0 0 0-3.6-2.4H4Z" />
        <path d="M20 6.5h-5.4A3.6 3.6 0 0 0 11 10.1V20a3.8 3.8 0 0 1 3.6-2.4H20Z" />
        <path d="M12 12.4c1.2-1.5 3.4-1.2 3.4.6 0 1.5-1.7 2.3-3.4 3.6-1.7-1.3-3.4-2.1-3.4-3.6 0-1.8 2.2-2.1 3.4-.6Z" />
      </>
    ),
    selfCare: (
      <>
        <path d="M7 13.5c2.8-.2 5.1-2.4 5.1-5.2 0-.8-.2-1.6-.5-2.3A6.8 6.8 0 0 0 7 13.5Z" />
        <path d="M12 19.5c3.8 0 7-3.1 7-7a6.8 6.8 0 0 0-.7-3.1c-3.4.4-6.1 3.2-6.3 6.7" />
        <path d="M5 19.5c3.5-1.1 6.2-3.5 8.2-7.2" />
      </>
    ),
    joy: (
      <>
        <circle cx="12" cy="12" r="7.5" />
        <path d="M8.8 10h.01" />
        <path d="M15.2 10h.01" />
        <path d="M8.8 14.3c1.8 1.7 4.6 1.7 6.4 0" />
        <path d="M18.5 5.5 20 4" />
        <path d="m4 20 1.5-1.5" />
      </>
    ),
    confidence: (
      <>
        <path d="M12 4.5 14.2 9l4.8.7-3.5 3.4.8 4.8L12 15.6 7.7 18l.8-4.8L5 9.7 9.8 9Z" />
        <path d="M4 20h16" />
        <path d="M8 20c1.4-1.9 2.8-2.8 4-2.8s2.6.9 4 2.8" />
      </>
    ),
  }[name];

  return (
    <span className="benefit-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        {icon}
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <main>
        <section className="hero" id="inicio">
          <header className="site-header container">
            <a className="header-brand" href="#inicio">
              <img className="brand-logo header-logo" src={logoSrc} alt="Santa Sensualidade" />
            </a>

            <nav className="header-nav" aria-label="Seções da página">
              {navItems.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </header>

        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>
              Um Chá de Lingerie ou uma Despedida de Solteira diferente de tudo
              o que você já viu
            </h1>
            <p>
              {
                "Que tal um Chá de Lingerie ou Despedida de solteira  com a sua cara, pensado para  combinar o seu estilo com a energia de suas amigas?"
              }
            </p>
            <a className="button" href="#contato">
              QUERO UM ORÇAMENTO PELO WHATSAPP
            </a>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-target" />
            <img
              className="hero-main-image"
              src="/hero-logo-vidro.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="section intro-section" id="experiencia">
        <div className="container intro-grid">
          <p className="section-lead">
            O Chá de Lingerie da Santa Sensualidade é muito mais do que uma
            brincadeira entre amigas. É uma experiência conduzida por uma
            sexóloga, onde falamos sobre amor-próprio, autoestima, desejo,
            autoconhecimento e prazer de forma leve, divertida e sem
            constrangimentos.
          </p>
          <div className="intro-side">
            <figure className="intro-photo-card">
              <img
                src="/intro-experience.jpg"
                alt="Sabrina Munno conduzindo uma dinamica em um Cha de Lingerie"
              />
            </figure>
            <div className="soft-card">
            <p>Aqui, todas se sentem acolhidas.</p>
            <p>
              Nossa linguagem é lúdica, democrática e respeitosa, permitindo
              que mulheres de diferentes gerações participem juntas, se
              identifiquem e aproveitem cada momento.
            </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bio-section" id="sabrina">
        <div className="container split-grid">
          <div>
            <h2>Prazer, eu sou Sabrina Munno</h2>
            <p>Sou Sexóloga, Psicóloga e educadora sexual,</p>
            <p>
              Há mais de 10 anos ajudo mulheres a compreenderem melhor seu
              corpo, seus desejos e sua sexualidade através de palestras e
              eventos.
            </p>
            <p>
              Minha missão é tornar a sexualidade um tema natural, leve e
              acessível, sempre com muito respeito, informação e bom humor.
            </p>
          </div>
          <div className="bio-photo-card">
            <div className="bio-photo-halo" aria-hidden="true" />
            <img
              className="bio-photo"
              src="/sabrina-munno-profile.png"
              alt="Sabrina Munno"
            />
          </div>
        </div>
      </section>

      <section className="section dark-section" id="acontece">
        <DecorativeMotif variant="conversation" />
        <div className="container">
          <div className="section-heading">
            <h2>
              O que acontece durante o Chá de Lingerie ou Despedida de Solteira?
            </h2>
          </div>

          <div className="program-grid">
            <article className="program-card">
              <h3>1ª Parte – Bate-papo sobre Sexualidade Feminina</h3>
              <p>
                Um momento descontraído onde conversamos sobre temas que fazem
                parte da vida de toda mulher:
              </p>
              <ul>
                {batePapoItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>Tudo isso de forma leve e sem julgamentos.</p>
            </article>

            <article className="program-card">
              <h3>2ª Parte – Dicas de uma &quot;Noite Especial&quot;</h3>
              <p>Sempre pensando na autonomia e protagonismo da mulher</p>
              <p>A parte  favorita das convidadas, onde falamos sobre:</p>
              <ul>
                {noiteEspecialItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Apresentado de forma divertida e educativa, o resultado é um
                momento de muita interação, descontração e troca entre as
                participantes.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section product-section" id="produtos">
        <DecorativeMotif variant="products" />
        <div className="container product-grid">
          <article className="soft-card">
            <h2>Demonstração de Produtos</h2>
            <p>
              Durante o bate papo mostramos diversos tipos de acessórios e
              cosméticos, mostramos as diferenças entre eles, explicamos suas
              funcionalidades e compartilhamos dicas de uso, inclusive suas
              possíveis  aplicações terapêuticas.
            </p>
            <p>É um momento de muita curiosidade, aprendizado e boas risadas.</p>
          </article>

          <article className="soft-card">
            <h2>A Loja da Santa</h2>
            <p>
              Também levamos nosso Mini Sex Shop com produtos cuidadosamente
              selecionados e de excelente qualidade.
            </p>
            <p>
              As participantes podem conhecer os produtos, tirar dúvidas e
              experimentar texturas, aromas e funcionalidades.
            </p>
          </article>
        </div>
      </section>

      <section
        className="section photo-carousel-section"
        aria-label="Fotos do evento"
      >
        <TopicSeal variant="camera" className="photo-carousel-seal topic-seal-light" />
        <div className="container photo-carousel-layout">
          <PhotoCarousel />
        </div>
      </section>

      <section className="section guests-section" id="convidadas">
        <DecorativeMotif variant="guests" />
        <div className="container guests-layout">
          <div className="guests-heading">
            <h2>Por que as convidadas amam?</h2>
            <p>
              Com as nossas especialistas, as convidadas encontram um ambiente
              seguro para:
            </p>
          </div>

          <ul className="benefit-card-grid">
            {convidadasItems.map((item) => (
              <li className="benefit-card" key={item.label}>
                <BenefitIcon name={item.icon} />
                <h3>{item.label}</h3>
              </li>
            ))}
          </ul>

          <aside className="mimos-card">
            <div className="mimos-card-heading">
              <TopicSeal variant="gift" className="mimos-seal topic-seal-light" />
              <h2>Mimos especiais</h2>
            </div>
            <p>
              Mais do que uma atração para o Chá de Lingerie ou Despedida de
              Solteira , essa experiência, que todas levam para a vida, se
              transforma em uma lembrança especial, oferecemos, ainda, um
              presente exclusivo para noiva e sorteamos  produtos para as
              convidadas.
            </p>
          </aside>
        </div>
      </section>

      <section className="section proof-section" id="depoimentos">
        <div className="container proof-grid">
          <div className="proof-feature">
            <div className="duration-card">
              <div className="duration-card-heading">
                <TopicSeal variant="clock" className="duration-seal" />
                <h2>Duração do Evento</h2>
              </div>
              <ul>
                {duracaoItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                A Santa Sensualidade está a 10 anos no mercado já realizou mais de
                1500 eventos e mais de 20mil mulheres já assistiram a nossa
                palestra.
              </p>
            </div>

            <figure className="proof-photo-card">
              <img
                src="/duration-event.jpg"
                alt="Noiva participando do Cha de Lingerie com convidadas"
              />
            </figure>
          </div>

          <div className="proof-testimonials">
            <h2>O que dizem as participantes?</h2>
            <div className="testimonial-grid">
              {depoimentos.map((quote) => (
                <blockquote key={quote}>{quote}</blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section" id="contato">
        <LipsMark className="section-motif-lips" />
        <div className="container cta-grid">
          <div>
            <h2>
              Vamos tornar o seu Chá de Lingerie ou Despedida de Solteira
              inesquecível?
            </h2>
            <p>
              Clique no botão abaixo e solicite informações sobre datas, valores
              e disponibilidade, você receberá um atendimentos personalizado e
              sigiloso.
            </p>
          </div>
          <div className="cta-card">
            <a className="button" href="#contato">
              QUERO UM ORÇAMENTO PELO WHATSAPP
            </a>
            <div className="contact-links">
              <a href="#contato">Instragram</a>
              <a href="#contato">Email</a>
            </div>
          </div>
        </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <nav className="footer-nav" aria-label="Seções do rodapé">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
