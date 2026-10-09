import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowUpRight, ArrowDown, Asterisk, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import hero from '@/assets/studio-hero.jpg'
import portrait from '@/assets/profilepicture.png.asset.json'
import butterfly from '@/assets/BioSenseButterfly.png.asset.json'
import report from '@/assets/IYCFEReport.png.asset.json'
import identity from '@/assets/DBIdentity.png.asset.json'
import maternity from '@/assets/BainneBeathaReport.png.asset.json'
import toaster from '@/assets/article-toaster.png.asset.json'
import pointlessProject from '@/assets/article-project.png.asset.json'
import friction from '@/assets/article-friction.png.asset.json'
import handshake from '@/assets/handshake.png.asset.json'
import flashlight from '@/assets/flashlight.png.asset.json'
import iterative from '@/assets/iterative.png.asset.json'
import prototype from '@/assets/prototype.png.asset.json'
import momentum from '@/assets/momentum.png.asset.json'
import participatory from '@/assets/participatory.png.asset.json'
import horizons from '@/assets/horizons.png.asset.json'
import userresearch from '@/assets/userresearch.png.asset.json'
import synthesis from '@/assets/synthesis.png.asset.json'

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Open Studio — A fresh perspective on change' },
    { name: 'description', content: 'Open Studio is Megan Etherton’s strategic design practice. Research, co-design and visual communication to shape strategy, policy, governance and culture.' },
    { property: 'og:title', content: 'Open Studio — A fresh perspective on change' },
    { property: 'og:description', content: 'A strategic design partner for complex challenges. Working openly, thinking together, making change tangible.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
})

const projects = [
  { title: 'Helping employers support workplace wellbeing', category: 'Organisations' },
  { title: 'Rapid research to uplift a BCorp’s B2B experience', category: 'Organisations' },
  { title: 'Creating a unified customer experience strategy', category: 'Public services' },
  { title: 'Co-designing interventions to improve recruiting', category: 'Organisations' },
  { title: 'Improving internal processes with digital transformation', category: 'Organisations' },
  { title: 'Improving the antenatal experience at a maternity hospital', category: 'Healthcare' },
  { title: 'Co-designing organisational culture across hospitals', category: 'Healthcare' },
  { title: 'Designing tools to help vulnerable jobseekers', category: 'Public services' },
  { title: 'Increasing diversity in a male-dominated industry', category: 'Organisations' },
  { title: 'Reducing time to treatment for patients', category: 'Healthcare' },
]
const portfolio = [
  { title: 'BioSense', type: 'Brand assets & visual storytelling', image: butterfly.url },
  { title: 'Infant feeding in emergencies', type: 'Report design & visual communication', image: report.url },
  { title: 'DB visual identity', type: 'Visual identity & brand design', image: identity.url },
  { title: 'Bainne Beatha', type: 'Report design', image: maternity.url },
]
const publicationUrl = 'https://promptsforhumans.substack.com'
const articles = [
  { title: 'I don’t collaborate with my toaster—do you?', excerpt: 'What a study tells us about women, the workplace, and how AI rewards what some of us have been told to dampen.', date: '23 September 2026', dateTime: '2026-09-23', url: `${publicationUrl}/p/i-dont-collaborate-with-my-toasterdo`, image: toaster.url },
  { title: 'I wasted a week on a pointless project, and it was glorious.', excerpt: 'On flow, ownership, and the strange relief of a problem you’re allowed to finish.', date: '5 September 2026', dateTime: '2026-09-05', url: `${publicationUrl}/p/i-wasted-a-week-on-a-pointless-project`, image: pointlessProject.url },
  { title: 'AI won’t dress my kids for me, and I’m glad', excerpt: 'A framework for deciding what to do with our daily frustrations and how they might actually serve us.', date: '12 August 2026', dateTime: '2026-08-12', url: `${publicationUrl}/p/ai-wont-dress-my-kids-for-me-and`, image: friction.url },
]
const sketches = [
  { image: handshake.url, title: 'Work openly', caption: 'Works collaboratively and openly with stakeholders.' },
  { image: flashlight.url, title: 'See the big picture', caption: 'Helps make sense of big-picture problem spaces.' },
  { image: iterative.url, title: 'Frame and reframe', caption: 'Works iteratively, framing and reframing challenges and ideas.' },
  { image: prototype.url, title: 'Try things out', caption: 'Facilitates prototyping, drafting and sketching to maintain momentum.' },
  { image: momentum.url, title: 'Make it tangible', caption: 'Develops visuals, maps and storyboards to make the intangible tangible.' },
  { image: participatory.url, title: 'Design together', caption: 'Goes beyond consultation and facilitates participatory design.' },
  { image: horizons.url, title: 'Look ahead', caption: 'Is future-orientated, mapping outcomes to close and far horizons.' },
  { image: userresearch.url, title: 'Understand lived experience', caption: 'Carries out design research with users to gain deep insight into lived experiences.' },
  { image: synthesis.url, title: 'Connect the dots', caption: 'Synthesises disparate pieces of information to define clear directions.' },
]
const nav = [{ label: 'About', id: 'about' }, { label: 'Experience', id: 'experience' }, { label: 'Prompts for Humans', id: 'prompts' }, { label: 'Approach', id: 'approach' }, { label: 'Design', id: 'design' }]
function StudioMark() { return <svg className="studio-symbol" viewBox="0 0 40 40" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"><path d="M20 4v32M6.2 12l27.6 16M6.2 28l27.6-16" /></g></svg> }
function SectionLabel({ number, children }: { number: string, children: React.ReactNode }) { return <div className="section-label"><span className="section-number">{number}</span>{children}</div> }

function Index() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All experience')
  const [expanded, setExpanded] = useState(false)
  const [selected, setSelected] = useState<(typeof portfolio)[number] | null>(null)
  const filtered = projects.filter(p => filter === 'All experience' || p.category === filter)
  const visible = expanded ? filtered : filtered.slice(0, 5)
  return <>
    <header id="top">
      <div className="studio-container site-header">
        <a href="#top" className="wordmark" aria-label="Open Studio home"><StudioMark />open studio</a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(item => <a className="nav-link" key={item.id} href={`#${item.id}`}>{item.label}</a>)}
          <Button variant="studioOutline" className="header-contact" asChild><a href="#contact">Let’s talk <ArrowUpRight /></a></Button>
        </nav>
        <Button variant="ghost" size="icon" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{[...nav, { label: 'Let’s talk', id: 'contact' }].map(item => <a href={`#${item.id}`} key={item.id} onClick={() => setMenuOpen(false)}>{item.label}</a>)}</nav>}
    </header>
    <main>
      <section className="hero" aria-labelledby="hero-heading">
        <img className="hero-art" src={hero} alt="A sculptural burgundy paper ribbon forming an open, interconnected loop" width={1536} height={1024} fetchPriority="high" />
        <div className="studio-container hero-content">
          <div className="eyebrow"><span className="status-dot" />Independent thinking. Shared possibilities.</div>
          <h1 id="hero-heading">Open Studio.<br />Open for<br /><em>change.</em></h1>
          <p className="hero-copy">A strategic design partner bringing a fresh perspective to complex challenges — and the people at the heart of them.</p>
          <Button variant="studio" className="hero-cta" asChild><a href="#contact">Let’s think together <ArrowUpRight /></a></Button>
        </div>
        <div className="studio-container hero-bottom"><span>Strategy. Policy. Governance. Culture.</span><a href="#about" className="scroll-link">A little more about me <ArrowDown size={13} /></a></div>
      </section>
      <div className="skill-strip"><div className="studio-container skill-list">{['Strategic design', 'Research & insight', 'Co-design', 'Prototyping', 'Visual communication'].map(s => <span key={s} className="flex items-center gap-6">{s}<Asterisk aria-hidden="true" /></span>)}</div></div>
      <section id="about" className="section studio-container">
        <div className="about-grid">
          <div><SectionLabel number="01">A little introduction</SectionLabel><h2 className="about-title">Hi, I’m Meg.<br />A curious mind.<br />A design partner.</h2></div>
          <div className="about-copy"><p>I use design to understand, navigate and shape the unseen drivers of change: <strong className="font-medium">policy, strategy, governance and culture.</strong></p><p className="secondary-copy">With a background in architecture, I bring a big-picture perspective and a hands-on approach. I make space for different voices, connect the dots, and turn complex challenges into shared possibilities.</p><a className="text-link" href="mailto:meg.openstudio@gmail.com">Get to know me <ArrowUpRight size={15} /></a></div>
          <figure className="m-0"><img className="portrait" src={portrait.url} alt="Megan Etherton, founder of Open Studio" width={812} height={972} loading="lazy" /><figcaption className="portrait-caption">Megan Etherton · Open Studio</figcaption></figure>
        </div>
      </section>
      <section id="experience" className="section experience"><div className="studio-container">
        <div className="section-heading"><div><SectionLabel number="02">Experience</SectionLabel><h2 className="section-title">Different challenges.<br />Meaningful change.</h2></div><p className="section-intro">A selection of projects from previous roles and as Open Studio. Much of this work is confidential; the impact is always human.</p></div>
        <div className="filters" aria-label="Filter experience">{['All experience', 'Organisations', 'Public services', 'Healthcare'].map(f => <Button key={f} variant="studioOutline" className="filter-button" data-active={filter === f} aria-pressed={filter === f} onClick={() => { setFilter(f); setExpanded(false) }}>{f}</Button>)}</div>
        <div>{visible.map(p => <div className="project-row" key={p.title}><span className="project-index">{String(projects.indexOf(p) + 1).padStart(2, '0')}</span><h3 className="project-name">{p.title}</h3><span className="project-category">{p.category}</span><ArrowUpRight size={17} aria-hidden="true" /></div>)}</div>
        {filtered.length > 5 && <Button variant="studioOutline" className="filter-button mt-7" onClick={() => setExpanded(!expanded)}>{expanded ? 'Show less' : 'More experience'}<ArrowDown className={expanded ? 'rotate-180' : ''} /></Button>}
      </div></section>
      <section id="prompts" className="section prompts-section" aria-labelledby="prompts-heading"><div className="studio-container">
        <div className="section-heading prompts-heading"><div><SectionLabel number="03">Writing & reflections</SectionLabel><h2 id="prompts-heading" className="section-title">Prompts for Humans</h2></div><div className="prompts-intro"><p>Ideas for humans to explore friction, discomfort, depth, texture, creativity, collaboration and richness in the age of AI.</p><Button variant="studioOutline" asChild><a href={`${publicationUrl}/about`} target="_blank" rel="noreferrer">Explore my Substack <ArrowUpRight /></a></Button></div></div>
        <div className="article-grid">{articles.map(article => <a key={article.url} className="article-link" href={article.url} target="_blank" rel="noreferrer"><img className="article-image" src={article.image} alt="" width={570} height={570} loading="lazy" /><time className="article-date" dateTime={article.dateTime}>{article.date}</time><h3 className="article-title">{article.title}</h3><p className="article-excerpt">{article.excerpt}</p><span className="article-read">Read on Substack <ArrowUpRight size={15} /></span></a>)}</div>
      </div></section>
      <section id="approach" className="section studio-container">
        <div className="section-heading"><div><SectionLabel number="04">The approach</SectionLabel><h2 className="section-title">What’s strategic design?</h2></div><p className="section-intro">Strategic design brings the mindset and tools of design to complex, systemic challenges. Open, collaborative and always moving forward.</p></div>
        <div className="strategy-sketches">{sketches.map(sketch => <figure key={sketch.title} className="strategy-sketch"><img className="strategy-sketch-image" src={sketch.image} alt={`Original Open Studio sketch: ${sketch.title.toLowerCase()}`} width={400} height={300} loading="lazy" /><figcaption><h3>{sketch.title}</h3><p>{sketch.caption}</p></figcaption></figure>)}</div>
      </section>
      <section id="design" className="section design-section"><div className="studio-container">
        <div className="section-heading"><div><SectionLabel number="05">Visual design</SectionLabel><h2 className="section-title">Good thinking.<br />Clearly communicated.</h2></div><p className="section-intro">Good strategy deserves good communication. Visual design is woven into my work — and available as a standalone service.</p></div>
        <div className="portfolio-grid">{portfolio.map(p => <Button key={p.title} variant="ghost" className="portfolio-button" onClick={() => setSelected(p)} aria-label={`View ${p.title}`}><div className="portfolio-image-wrap"><img className="portfolio-image" src={p.image} alt={`${p.title} design work by Open Studio`} width={1320} height={990} loading="lazy" /></div><div className="portfolio-caption"><span>{p.title}<span className="portfolio-type">{p.type}</span></span><ArrowUpRight size={19} /></div></Button>)}</div>
      </div></section>
      <section id="contact" className="contact-section"><div className="studio-container">
        <SectionLabel number="06">Open for collaboration</SectionLabel><h2 className="contact-heading">Something on your mind?<br />Let’s make a start.</h2><div className="contact-bottom"><a className="email-link" href="mailto:meg.openstudio@gmail.com">meg.openstudio@gmail.com <ArrowUpRight size={23} /></a><p className="contact-copy">A project, a challenge, or a possibility.<br />I’d love to hear what you’re thinking.</p></div>
      </div></section>
    </main>
    <footer className="site-footer studio-container"><span>© {new Date().getUTCFullYear()} Megan Etherton t/a Open Studio</span><div className="footer-links"><a href={publicationUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1">Substack <ArrowUpRight size={12} /></a><a href="https://www.linkedin.com/in/megan-etherton" target="_blank" rel="noreferrer" className="flex items-center gap-1">LinkedIn <ArrowUpRight size={12} /></a><a href="#top" className="flex items-center gap-1">Back to top <ArrowUpRight size={12} /></a></div></footer>
    <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null) }}><DialogContent className="preview-dialog"><DialogTitle>{selected?.title}</DialogTitle><DialogDescription>{selected?.type}</DialogDescription>{selected && <img src={selected.image} alt={`${selected.title} design work`} width={1320} height={990} />}</DialogContent></Dialog>
  </>
}
