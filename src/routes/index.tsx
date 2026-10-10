import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import hero from "@/assets/studio-hero.jpg";
const asset = (name: string) => ({ url: `/assets/${name}` });
const portrait = asset("profilepicture.png");
const butterfly = asset("BioSenseButterfly.png");
const report = asset("IYCFEReport.png");
const identity = asset("DBIdentity.png");
const maternity = asset("BainneBeathaReport.png");
const toaster = asset("article-toaster.png");
const pointlessProject = asset("article-project.png");
const friction = asset("article-friction.png");
const prototype = asset("prototype.png");
const momentum = asset("momentum.png");
const participatory = asset("participatory.png");
const studioMark = asset("studio-mark-2026.png");
const biosensePrototype = asset("BioSensePrototype.png");
const templates = asset("Templates.png");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Open Studio — A fresh perspective on change" },
      {
        name: "description",
        content:
          "Open Studio is Megan Etherton’s strategic design practice. Research, co-design and visual communication to shape strategy, policy, governance and culture.",
      },
      { property: "og:title", content: "Open Studio — A fresh perspective on change" },
      {
        property: "og:description",
        content:
          "A strategic design partner for complex challenges. Working openly, thinking together, making change tangible.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  { title: "Helping employers support workplace wellbeing", category: "Health and Wellbeing" },
  { title: "Rapid research to uplift a BCorp’s B2B experience", category: "Organisations" },
  { title: "Creating a unified customer experience strategy", category: "Public services" },
  { title: "Co-designing interventions to improve recruiting", category: "Organisations" },
  {
    title: "Designing and delivering a digital transformation strategy",
    category: "Organisations",
  },
  {
    title: "Improving the antenatal experience at a maternity hospital",
    category: "Health and Wellbeing",
  },
  {
    title: "Co-designing organisational culture across hospitals",
    category: "Health and Wellbeing",
  },
  { title: "Designing tools to help vulnerable jobseekers", category: "Public services" },
  { title: "Increasing diversity in a male-dominated industry", category: "Organisations" },
  { title: "Reducing time to treatment for patients", category: "Health and Wellbeing" },
  {
    title: "Designing and testing a prototype water markets app for farmers",
    category: "Organisations",
  },
];
const portfolio = [
  { title: "BioSense", type: "Brand assets & visual storytelling", image: butterfly.url },
  {
    title: "Infant feeding in emergencies",
    type: "Report design & visual communication",
    image: report.url,
  },
  { title: "DB visual identity", type: "Visual identity & brand design", image: identity.url },
  { title: "Bainne Beatha", type: "Report design", image: maternity.url },
  { title: "Strategic design templates", type: "Templates & visual tools", image: templates.url },
  { title: "BioSense prototype", type: "Prototyping & testing", image: biosensePrototype.url },
];
const publicationUrl = "https://promptsforhumans.substack.com";
const articles = [
  {
    title: "I don’t collaborate with my toaster—do you?",
    excerpt:
      "What a study tells us about women, the workplace, and how AI rewards what some of us have been told to dampen.",
    date: "23 September 2026",
    dateTime: "2026-09-23",
    url: `${publicationUrl}/p/i-dont-collaborate-with-my-toasterdo`,
    image: toaster.url,
  },
  {
    title: "I wasted a week on a pointless project, and it was glorious.",
    excerpt: "On flow, ownership, and the strange relief of a problem you’re allowed to finish.",
    date: "5 September 2026",
    dateTime: "2026-09-05",
    url: `${publicationUrl}/p/i-wasted-a-week-on-a-pointless-project`,
    image: pointlessProject.url,
  },
  {
    title: "AI won’t dress my kids for me, and I’m glad",
    excerpt:
      "A framework for deciding what to do with our daily frustrations and how they might actually serve us.",
    date: "12 August 2026",
    dateTime: "2026-08-12",
    url: `${publicationUrl}/p/ai-wont-dress-my-kids-for-me-and`,
    image: friction.url,
  },
];
const approach = [
  {
    image: prototype.url,
    alt: "Original Open Studio sketch of a pencil and research notes",
    title: "Understand the whole",
    caption:
      "Research lived experiences, make sense of different perspectives, and connect information to find a clear direction.",
  },
  {
    image: participatory.url,
    alt: "Original Open Studio sketch of people sharing ideas around a table",
    title: "Make space for people",
    caption:
      "Go beyond consultation. Bring people into the process and co-design possibilities with those who know the challenge best.",
  },
  {
    image: momentum.url,
    alt: "Original Open Studio sketch of visual storyboards and a pencil",
    title: "Make it tangible",
    caption:
      "Turn the abstract into something we can see, test and shape, through maps, prototypes and visual stories.",
  },
];
const nav = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Prompts for Humans", id: "prompts" },
  { label: "Approach", id: "approach" },
  { label: "Design", id: "design" },
];
const services = [
  "co-design",
  "prototyping",
  "research and insight",
  "digital transformation",
  "evaluation",
];
function StudioMark() {
  return <img className="studio-symbol" src={studioMark.url} width={33} height={32} alt="" />;
}
function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span className="section-number">{number}</span>
      {children}
    </div>
  );
}

const heroWords = ["change", "impact", "collaboration", "insight"];
function RotatingWord() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;
    const syncMotion = () => {
      if (timer !== undefined) clearInterval(timer);
      if (!motion.matches)
        timer = setInterval(() => setActive((index) => (index + 1) % heroWords.length), 2400);
      else setActive(0);
    };
    syncMotion();
    motion.addEventListener("change", syncMotion);
    return () => {
      if (timer !== undefined) clearInterval(timer);
      motion.removeEventListener("change", syncMotion);
    };
  }, []);
  return (
    <>
      <span className="sr-only">change, impact, collaboration and insight.</span>
      <em className="rotating-word" aria-hidden="true">
        {heroWords.map((word, index) => (
          <span key={word} className="hero-word" data-active={index === active}>
            {word}.
          </span>
        ))}
      </em>
    </>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All experience");
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<(typeof portfolio)[number] | null>(null);
  const filtered = projects.filter((p) => filter === "All experience" || p.category === filter);
  const visible = expanded ? filtered : filtered.slice(0, 5);
  return (
    <>
      <header id="top">
        <div className="studio-container site-header">
          <a href="#top" className="wordmark" aria-label="Open Studio home">
            <StudioMark />
            open studio
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map((item) => (
              <a className="nav-link" key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
            <Button variant="studioOutline" className="header-contact" asChild>
              <a href="#contact">
                Let’s talk <ArrowUpRight />
              </a>
            </Button>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {[...nav, { label: "Let’s talk", id: "contact" }].map((item) => (
              <a href={`#${item.id}`} key={item.id} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>
      <main>
        <section className="hero" aria-labelledby="hero-heading">
          <img
            className="hero-art"
            src={hero}
            alt="A sculptural burgundy paper ribbon forming an open, interconnected loop"
            width={1536}
            height={1024}
            fetchPriority="high"
          />
          <div className="studio-container hero-content">
            <div className="eyebrow">
              <span className="status-dot" />
              Independent thinking. Shared possibilities.
            </div>
            <h1 id="hero-heading">
              Open Studio.
              <br />
              Open for
              <br />
              <RotatingWord />
            </h1>
            <p className="hero-copy">
              A strategic design partner bringing a fresh perspective to complex challenges, and the
              people at the heart of them.
            </p>
            <Button variant="studio" className="hero-cta" asChild>
              <a href="#contact">
                Let’s think together <ArrowUpRight />
              </a>
            </Button>
          </div>
          <div className="studio-container hero-bottom">
            <span>Strategy. Policy. Governance. Culture.</span>
            <a href="#about" className="scroll-link">
              A little more about me <ArrowDown size={13} />
            </a>
          </div>
        </section>
        <div className="skill-strip">
          <ul className="studio-container skill-list">
            {services.map((s, i) => (
              <li key={s}>
                {s}
                {i < services.length - 1 && (
                  <span className="skill-bullet" aria-hidden="true">
                    •
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <section id="about" className="section studio-container">
          <div className="about-grid">
            <div>
              <SectionLabel number="01">About Me</SectionLabel>
              <h2 className="about-title">
                Hi, I’m Meg.
                <br />A curious mind.
                <br />A design partner.
              </h2>
            </div>
            <div className="about-copy">
              <p>
                I use design to understand, navigate and shape the unseen drivers of change:{" "}
                <strong className="font-medium">policy, strategy, governance and culture.</strong>
              </p>
              <p className="secondary-copy">
                With a background in architecture, I bring a big-picture perspective and a hands-on
                approach. I make space for different voices, connect the dots, and turn complex
                challenges into shared possibilities.
              </p>
              <a className="text-link" href="mailto:meg@openstudio.ie">
                Get to know me <ArrowUpRight size={15} />
              </a>
            </div>
            <figure className="m-0">
              <img
                className="portrait"
                src={portrait.url}
                alt="Megan Etherton, founder of Open Studio"
                width={812}
                height={972}
                loading="lazy"
              />
              <figcaption className="portrait-caption">Megan Etherton · Open Studio</figcaption>
            </figure>
          </div>
        </section>
        <section id="experience" className="section experience">
          <div className="studio-container">
            <div className="section-heading">
              <div>
                <SectionLabel number="02">Experience</SectionLabel>
                <h2 className="section-title">
                  Different challenges.
                  <br />
                  Meaningful change.
                </h2>
              </div>
              <p className="section-intro">
                A selection of projects from previous roles and as Open Studio. Much of this work is
                confidential, but I’m happy to chat through and provide references.
              </p>
            </div>
            <div className="filters" aria-label="Filter experience">
              {["All experience", "Organisations", "Public services", "Health and Wellbeing"].map(
                (f) => (
                  <Button
                    key={f}
                    variant="studioOutline"
                    className="filter-button"
                    data-active={filter === f}
                    aria-pressed={filter === f}
                    onClick={() => {
                      setFilter(f);
                      setExpanded(false);
                    }}
                  >
                    {f}
                  </Button>
                ),
              )}
            </div>
            <div>
              {visible.map((p) => (
                <div className="project-row" key={p.title}>
                  <span className="project-index">
                    {String(projects.indexOf(p) + 1).padStart(2, "0")}
                  </span>
                  <h3 className="project-name">{p.title}</h3>
                  <span className="project-category">{p.category}</span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </div>
              ))}
            </div>
            {filtered.length > 5 && (
              <Button
                variant="studioOutline"
                className="filter-button mt-7"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Show less" : "More experience"}
                <ArrowDown className={expanded ? "rotate-180" : ""} />
              </Button>
            )}
          </div>
        </section>
        <section id="prompts" className="section prompts-section" aria-labelledby="prompts-heading">
          <div className="studio-container">
            <div className="section-heading prompts-heading">
              <div>
                <SectionLabel number="03">Writing & reflections</SectionLabel>
                <h2 id="prompts-heading" className="section-title">
                  Prompts for Humans
                </h2>
              </div>
              <div className="prompts-intro">
                <p>
                  Leaning into what is uniquely human in the age of AI, Prompts for Humans suggests
                  creative ways for us to explore friction, discomfort, depth, texture, creativity,
                  collaboration and richness.
                </p>
                <Button variant="studioOutline" asChild>
                  <a href={`${publicationUrl}/about`} target="_blank" rel="noreferrer">
                    Explore my Substack <ArrowUpRight />
                  </a>
                </Button>
              </div>
            </div>
            <div className="article-grid">
              {articles.map((article) => (
                <a
                  key={article.url}
                  className="article-link"
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="article-image"
                    src={article.image}
                    alt=""
                    width={570}
                    height={570}
                    loading="lazy"
                  />
                  <time className="article-date" dateTime={article.dateTime}>
                    {article.date}
                  </time>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <span className="article-read">
                    Read on Substack <ArrowUpRight size={15} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section id="approach" className="section studio-container">
          <div className="section-heading">
            <div>
              <SectionLabel number="04">The approach</SectionLabel>
              <h2 className="section-title">
                Big-picture thinking.
                <br />
                Hands-on doing.
              </h2>
            </div>
            <p className="section-intro">
              Strategic design brings the mindset and tools of design to complex, systemic
              challenges.
            </p>
          </div>
          <div className="approach-grid">
            {approach.map((item) => (
              <div key={item.title} className="approach-item">
                <img
                  className="approach-sketch"
                  src={item.image}
                  alt={item.alt}
                  width={624}
                  height={544}
                  loading="lazy"
                />
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="design" className="section design-section">
          <div className="studio-container">
            <div className="section-heading">
              <div>
                <SectionLabel number="05">Visual design</SectionLabel>
                <h2 className="section-title">
                  Good thinking.
                  <br />
                  Clearly communicated.
                </h2>
              </div>
              <p className="section-intro">
                Good strategy deserves good communication. Visual design is woven into my work, and
                available as a standalone service.
              </p>
            </div>
            <div className="portfolio-grid">
              {portfolio.map((p) => (
                <Button
                  key={p.title}
                  variant="ghost"
                  className="portfolio-button"
                  onClick={() => setSelected(p)}
                  aria-label={`View ${p.title}`}
                >
                  <div className="portfolio-image-wrap">
                    <img
                      className="portfolio-image"
                      src={p.image}
                      alt={`${p.title} design work by Open Studio`}
                      width={1320}
                      height={990}
                      loading="lazy"
                    />
                  </div>
                  <div className="portfolio-caption">
                    <span>
                      {p.title}
                      <span className="portfolio-type">{p.type}</span>
                    </span>
                    <ArrowUpRight size={19} />
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="studio-container">
            <SectionLabel number="06">Open for collaboration</SectionLabel>
            <h2 className="contact-heading">
              Something on your mind?
              <br />
              Let’s make a start.
            </h2>
            <div className="contact-bottom">
              <a className="email-link" href="mailto:meg@openstudio.ie">
                meg@openstudio.ie <ArrowUpRight size={23} />
              </a>
              <p className="contact-copy">
                If you have a project, challenge or possibility, I’d love to hear what you’re
                thinking.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer studio-container">
        <span>© {new Date().getUTCFullYear()} Megan Etherton t/a Open Studio</span>
        <div className="footer-links">
          <a
            href={publicationUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1"
          >
            Substack <ArrowUpRight size={12} />
          </a>
          <a
            href="https://www.linkedin.com/in/megan-etherton"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1"
          >
            LinkedIn <ArrowUpRight size={12} />
          </a>
          <a href="#top" className="flex items-center gap-1">
            Back to top <ArrowUpRight size={12} />
          </a>
        </div>
      </footer>
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="preview-dialog">
          <DialogTitle>{selected?.title}</DialogTitle>
          <DialogDescription>{selected?.type}</DialogDescription>
          {selected && (
            <img
              src={selected.image}
              alt={`${selected.title} design work`}
              width={1320}
              height={990}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
