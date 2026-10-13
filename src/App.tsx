import { useMemo, useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, Check, Copy, ExternalLink, Github,
  Linkedin, Mail, Menu, X, FileJson
} from "lucide-react";
import projectsData from "./data/projects.json";

type Project = {
  slug: string; name: string; status: string; category: string; summary: string;
  details: string; stack: string[]; repository: string; evidence: string; evidenceStatus: string;
};
const projects = projectsData as Project[];
const github = "https://github.com/Anirudh2627";
const linkedin = "https://www.linkedin.com/in/d-v-anirudh-773a99371/";
// Add the correct public X profile and email before deploying.
const xProfile = "https://x.com/anirudhdv27";
const publicEmail = "anirudhduvvuri123@gmail.com";

function Diagram() {
  return <svg className="system-diagram" viewBox="0 0 520 340" role="img" aria-label="Sketch-style diagram of a retrieve, reason, act and evaluate loop">
    <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="currentColor" strokeWidth="1.1"/></marker></defs>
    <g className="scribble" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
      <path d="M28 120 l28 -2 l2 42 l-28 2 z M34 112 l28 -2 l2 42 M40 104 l28 -2 l2 42"/>
      <path d="M74 139 C94 138 101 138 119 138" markerEnd="url(#arrow)"/><path d="M206 139 C225 137 235 139 254 139" markerEnd="url(#arrow)"/><path d="M341 139 C359 138 369 138 389 139" markerEnd="url(#arrow)"/>
      <path d="M133 114 C130 108 136 103 144 105 L194 104 C200 106 201 112 200 119 L199 159 C198 165 192 166 185 165 L138 166 C132 164 131 159 132 151 Z"/>
      <path d="M269 113 C273 108 279 108 286 109 L331 108 C337 110 339 115 338 122 L339 158 C337 164 331 165 324 164 L276 165 C270 164 268 160 269 153 Z"/>
      <path d="M404 112 C409 107 414 109 422 109 L466 109 C472 111 473 116 472 123 L472 158 C470 164 464 165 457 164 L412 165 C406 164 404 159 405 152 Z"/>
      <path d="M300 171 C300 190 300 197 300 214" markerEnd="url(#arrow)"/><path d="M267 242 C244 241 229 241 209 241" markerEnd="url(#arrow)"/>
      <path d="M133 225 C132 220 137 216 143 216 L195 216 C201 218 202 222 201 230 L201 253 C200 260 194 262 187 261 L139 261 C133 259 132 254 133 247 Z"/>
      <path d="M206 241 C222 241 237 241 254 241" markerEnd="url(#arrow)"/><path d="M343 242 C363 241 378 241 398 241" markerEnd="url(#arrow)"/>
      <path d="M404 218 C409 213 414 215 422 215 L466 215 C472 217 473 222 472 229 L472 252 C470 258 464 260 457 259 L412 260 C406 259 404 254 405 247 Z"/>
      <path d="M143 95 C165 75 191 76 209 91" strokeDasharray="4 5"/><path d="M399 93 C372 72 348 75 331 92" strokeDasharray="4 5"/>
    </g>
    <g className="diagram-label">
      <text x="165" y="142" textAnchor="middle">retrieve</text><text x="303" y="142" textAnchor="middle">reason</text><text x="438" y="142" textAnchor="middle">act</text><text x="166" y="244" textAnchor="middle">evaluate</text><text x="438" y="244" textAnchor="middle">feedback</text>
      <text x="26" y="185" className="note">data</text><text x="26" y="202" className="note">video · docs · web</text><text x="120" y="66" className="note">retrieve evidence</text><text x="258" y="65" className="note">reason over context</text><text x="390" y="65" className="note">tools & APIs</text><text x="248" y="289" className="note">grounded · verifiable · safe</text>
    </g>
  </svg>;
}

function AgentView() {
  const [copied, setCopied] = useState(false);
  const profile = {
    name: "D. V. Anirudh",
    role: "Computer science student building AI systems",
    interests: ["AI/ML", "LLM engineering", "RAG", "AI agents", "Inference systems", "Backend engineering"],
    education: { institution: "VIT Chennai", degree: "B.Tech in Computer Science" },
    links: { github, linkedin, x: xProfile || null, email: publicEmail || null, llms: "/llms.txt", fullProfile: "/llms-full.txt", profileJson: "/profile.json", projectsJson: "/projects.json" },
    projectCount: projects.length,
    note: "Check each linked repository for current implementation details. Planned features and unverified metrics are explicitly marked."
  };
  const json = JSON.stringify({ ...profile, projects }, null, 2);
  async function copyProfile() {
    try { await navigator.clipboard.writeText(json); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = "/profile.json"; }
  }
  return <main className="agent-page">
    <div className="agent-intro"><span className="eyebrow">MACHINE-READABLE PROFILE</span><h1>Agent view<span className="period">.</span></h1><p>Structured information about my work, interests, and projects. Follow source links for implementation details; don't infer features or results that aren't documented.</p></div>
    <div className="agent-actions">
      <a className="button button-primary" href="/llms.txt"><FileJson size={16}/> Read llms.txt <ArrowUpRight size={15}/></a>
      <a className="button button-secondary" href="/llms-full.txt">Full text profile <ArrowUpRight size={15}/></a>
      <button className="button button-secondary" onClick={copyProfile}>{copied ? <Check size={16}/> : <Copy size={16}/>} {copied ? "Copied" : "Copy structured profile"}</button>
    </div>
    <div className="agent-grid">
      <section className="data-card"><div className="card-heading"><span>01 / PROFILE</span><a href="/profile.json">profile.json <ExternalLink size={12}/></a></div><pre>{JSON.stringify(profile, null, 2)}</pre></section>
      <section className="data-card"><div className="card-heading"><span>02 / PROJECT INDEX</span><a href="/projects.json">projects.json <ExternalLink size={12}/></a></div><div className="agent-project-list">{projects.map(p => <article className="agent-project" key={p.slug}><div><h3>{p.name}</h3><span className={`status status-${p.status}`}>{p.status}</span></div><p>{p.summary}</p><a href={p.repository} target="_blank" rel="noreferrer">Source repository <ArrowUpRight size={13}/></a></article>)}</div></section>
    </div>
    <p className="agent-footnote">This view is static structured data, not an autonomous agent endpoint. No user prompts are executed and no private information is exposed.</p>
  </main>;
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.slug === "youtube-rag") return <div className="pipeline-visual">
    <div className="pipe-node"><span className="tiny-icon">▶</span><small>YouTube URL</small></div><span className="pipe-arrow">→</span><div className="pipe-node"><span className="paper-icon">▤</span><small>Transcript</small></div><span className="pipe-arrow">→</span><div className="pipe-node"><span className="paper-icon">▤</span><small>Chunks</small></div>
    <div className="pipeline-second"><span>Hybrid retrieval</span><span>Rerank</span><span>Grounded answer + timestamps</span></div>
  </div>;
  if (project.slug === "specmatch") return <div className="chart-visual"><span className="chart-title">Speculative decoding / inference</span><svg viewBox="0 0 360 170" aria-label="Conceptual inference pipeline illustration"><path d="M35 12V135H344" fill="none" stroke="currentColor" strokeWidth="1"/><path d="M35 118 C80 80 100 61 145 49 S245 26 338 19" fill="none" stroke="#9ca3af" strokeWidth="2"/><path d="M35 128 C75 108 100 94 145 83 S250 62 338 51" fill="none" stroke="#2e68b2" strokeWidth="2"/><path d="M35 132 C78 121 100 113 145 104 S245 86 338 75" fill="none" stroke="#15324e" strokeWidth="2"/><text x="38" y="153">Draft</text><text x="160" y="153">Verify</text><text x="295" y="153">Accept</text></svg><span className="chart-note">Conceptual illustration · not benchmark data</span></div>;
  return <div className="security-visual"><div className="security-box">Agent / MCP client</div><span>→</span><div className="security-gateway">Bastion<br/><small>policy gateway</small></div><div className="security-branches"><span>Tool permissions</span><span>Approval flow</span><span>Audit logs</span></div><span className="planned-label">Planned system diagram</span></div>;
}

export default function App() {
  const [view, setView] = useState<"human" | "agent">("human");
  const [page, setPage] = useState<"home" | "projects">("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const featured = useMemo(() => projects.filter(p => ["youtube-rag", "specmatch", "bastion"].includes(p.slug)), []);
  const remaining = useMemo(() => projects.filter(p => !["youtube-rag", "specmatch", "bastion"].includes(p.slug)), []);
  function navigate(next: "home" | "projects") { setPage(next); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }
  function navigateToSection(next: "home" | "projects", id: string) { setPage(next); setMenuOpen(false); window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 50); }
  function toggleView(next: "human" | "agent") { setView(next); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }
  const socials = <>
    <a href={github} target="_blank" rel="noreferrer"><Github size={15}/> GitHub <ArrowUpRight size={12}/></a>
    <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn <ArrowUpRight size={12}/></a>
    {xProfile && <a href={xProfile} target="_blank" rel="noreferrer">𝕏 X <ArrowUpRight size={12}/></a>}
    {publicEmail && <a href={`mailto:${publicEmail}`}><Mail size={15}/> Email <ArrowUpRight size={12}/></a>}
  </>;
  return <div className="site-shell">
    <header className="site-header">
      <a className="wordmark" href="#home" onClick={e => { e.preventDefault(); navigate("home"); }}>anirudh<span>.</span></a>
      <button className="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
        {view === "human" ? <>
          <button className={page === "home" ? "nav-current" : ""} onClick={() => navigate("home")}>Home</button>
          <button className={page === "projects" ? "nav-current" : ""} onClick={() => navigate("projects")}>Projects</button>
          <button onClick={() => navigateToSection("projects", page === "home" ? "about" : "contact")}>{page === "home" ? "About" : "Contact"}</button>
        </> : <><a href="/llms.txt">llms.txt</a><a href="/projects.json">Project data</a><a href="/profile.json">Profile JSON</a></>}
        <button className="nav-agent-link" onClick={() => toggleView(view === "human" ? "agent" : "human")}>{view === "human" ? "Agent view" : "Human view"} <ArrowUpRight size={13}/></button>
      </nav>
      <div className="header-right"><a className="header-github" href={github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a><span className="header-divider"/><div className="view-toggle" role="group" aria-label="Choose portfolio view"><button className={view === "human" ? "active" : ""} aria-pressed={view === "human"} onClick={() => toggleView("human")}>Human</button><button className={view === "agent" ? "active" : ""} aria-pressed={view === "agent"} onClick={() => toggleView("agent")}>Agent</button></div></div>
    </header>

    {view === "agent" ? <AgentView/> : page === "home" ? <main>
      <section className="hero">
        <div className="hero-copy"><span className="eyebrow">COMPUTER SCIENCE · AI SYSTEMS</span><h1>I build systems<br/>that make AI <em>useful.</em></h1><p className="hero-subtitle">LLM applications, retrieval systems, and tools for making agents more reliable.</p>
          <div className="hero-actions"><button className="button button-primary" onClick={() => navigate("projects")}>Explore selected work <ArrowDownRight size={16}/></button><button className="button button-secondary" onClick={() => navigateToSection("projects", "about")}>A little about me <ArrowUpRight size={15}/></button></div>
          <div className="social-links">{socials}</div>
        </div><div className="hero-art"><Diagram/><span className="diagram-caption">A rough map of the systems I like building.</span></div>
      </section>

      <section className="home-block skills-block" id="skills">
        <div className="section-top"><div><span className="eyebrow">TOOLS I USE AND IDEAS I WORK WITH</span><h2>Skills in motion<span className="period">.</span></h2></div><span className="section-note">A living toolkit, not a static checklist.</span></div>
        <div className="skills-motion" aria-label="Animated skills and technologies">
          <div className="skills-track track-forward"><div className="skills-track-inner">{["Python", "PyTorch", "RAG", "Transformers", "LLM Engineering", "Embeddings", "NLP", "Model Evaluation", "Python", "PyTorch", "RAG", "Transformers", "LLM Engineering", "Embeddings", "NLP", "Model Evaluation"].map((skill, i) => <span className={`floating-skill skill-tone-${i % 4}`} key={`a-${i}`}>{skill}</span>)}</div></div>
          <div className="skills-track track-reverse"><div className="skills-track-inner">{["FastAPI", "Hybrid Search", "ChromaDB", "BM25", "Cross-encoders", "SQL", "Redis", "Docker", "FastAPI", "Hybrid Search", "ChromaDB", "BM25", "Cross-encoders", "SQL", "Redis", "Docker"].map((skill, i) => <span className={`floating-skill skill-tone-${(i + 1) % 4}`} key={`b-${i}`}>{skill}</span>)}</div></div>
          <div className="skills-track track-forward track-slow"><div className="skills-track-inner">{["AI Agents", "Tool Use", "Git", "Linux", "React", "Streamlit", "REST APIs", "Inference", "AI Agents", "Tool Use", "Git", "Linux", "React", "Streamlit", "REST APIs", "Inference"].map((skill, i) => <span className={`floating-skill skill-tone-${(i + 2) % 4}`} key={`c-${i}`}>{skill}</span>)}</div></div>
        </div>
        <p className="skills-footnote"><span className="live-dot"/> Constantly learning. These are tools and areas I work with, not a claim of equal expertise in all of them.</p>
      </section>

      <section className="home-block exploring-block" id="exploring"><div><span className="eyebrow">WHAT I'M LOOKING INTO NOW</span><h2>Currently exploring<span className="period">.</span></h2><p className="exploring-intro">Questions I'm trying to answer through small, testable builds and deeper technical reading.</p><button className="text-link exploring-project-link" onClick={() => navigate("projects")}>See the projects behind the curiosity <ArrowUpRight size={14}/></button></div><div className="exploring-list"><div><span>01</span><strong>Agent security</strong><small>Tool permissions, untrusted inputs, auditability</small></div><div><span>02</span><strong>Inference</strong><small>KV cache, scheduling, latency under load</small></div><div><span>03</span><strong>Document AI</strong><small>Extraction quality, confidence, human review</small></div><div><span>04</span><strong>Small-model tuning</strong><small>Quality, latency, and cost trade-offs</small></div></div></section>
    </main> : <main className="projects-page">
      <section className="projects-heading"><span className="eyebrow">02 / SPEC // PROJECTS</span><h1>Selected works<span className="period">.</span></h1><p>Projects, experiments, and systems I've been building. Featured work first; more of the work below.</p></section>
      <section className="featured-projects"><div className="section-top"><div><span className="eyebrow">01 — 03 / FEATURED</span><h2>Selected projects<span className="period">.</span></h2></div><span className="section-note">The projects I'd start a technical conversation with.</span></div>
        <div className="featured-grid">{featured.map((p, i) => <article className={`project-card ${i === 0 ? "project-card-featured" : ""}`} key={p.slug}><div className={`project-visual visual-${p.slug}`}><ProjectVisual project={p}/></div><div className="project-card-body"><div className="project-meta"><span>PRJ_0{i+1} / {p.category}</span><span className={`status status-${p.status}`}>{p.status === "in-progress" ? "In progress" : "Built"}</span></div><h3>{p.name}</h3><p>{p.summary}</p><p className="project-details">{p.details}</p><div className="tag-list">{p.stack.map(t => <span className="tag" key={t}>{t}</span>)}</div><div className="project-card-footer"><a href={p.repository} target="_blank" rel="noreferrer"><Github size={14}/> Repository <ArrowUpRight size={13}/></a><span>{p.evidenceStatus === "planned" ? "WORK IN PROGRESS" : p.category.toUpperCase()}</span></div></div></article>)}</div>
      </section>
      <section className="more-work"><div className="section-top"><div><span className="eyebrow">04 — 0{remaining.length+3} / MORE WORK</span><h2>More projects<span className="period">.</span></h2></div><span className="section-note">Scroll around. There's more to explore.</span></div><div className="more-projects-grid">{remaining.map((p, i) => <article className="more-project-card" key={p.slug}><div className="project-meta"><span>PRJ_{String(i+4).padStart(2,"0")} / {p.category.toUpperCase()}</span><span className={`status status-${p.status}`}>{p.status === "in-progress" ? "In progress" : "Built"}</span></div><h3>{p.name}</h3><p>{p.summary}</p><div className="tag-list">{p.stack.map(t => <span className="tag" key={t}>{t}</span>)}</div><div className="more-card-footer"><a href={p.repository} target="_blank" rel="noreferrer">Repository <ArrowUpRight size={13}/></a><span>{p.evidenceStatus === "planned" ? "PLANNED" : p.evidenceStatus === "verify-repository" ? "DETAILS TO VERIFY" : "PROJECT"}</span></div></article>)}</div></section>
      <section className="home-block about-section project-about" id="about"><div className="about-heading"><span className="eyebrow">A LITTLE CONTEXT</span><h2>Curious about the<br/>parts beneath the demo.</h2></div><div className="about-copy"><p>I'm a computer science student at VIT Chennai interested in building AI systems that hold up outside a notebook: retrieval pipelines, LLM applications, agent tooling, and the infrastructure around them.</p><p>I like taking a system apart, figuring out where it fails, and making those failure modes measurable. This site is a living record of the projects, experiments, and questions I'm working through.</p><div className="skill-groups"><div><span>ML / AI</span><p>Python · PyTorch · NLP · Embeddings · RAG</p></div><div><span>Systems</span><p>FastAPI · REST APIs · SQL · Redis · Docker</p></div><div><span>Workflow</span><p>Git · Linux · Testing · Evaluation</p></div></div></div></section>
      <section className="project-cta"><div><span className="eyebrow">ALSO BUILDING THE NEXT THING</span><h2>Have a project in mind?</h2><p>I'm interested in practical AI systems, careful evaluation, and engineering problems that don't end at a demo.</p></div><div className="cta-actions"><button className="button button-primary" onClick={() => navigateToSection("projects", "contact")}>Get in touch <ArrowUpRight size={15}/></button><a className="button button-secondary" href={github} target="_blank" rel="noreferrer">Browse GitHub <Github size={15}/></a></div></section>
      <footer className="site-footer" id="contact"><div><span className="eyebrow">OPEN TO INTERESTING PROBLEMS</span><h2>Let's build something<br/><em>worth explaining.</em></h2></div><div className="footer-links">{socials}<a href="/llms.txt">Agent-readable profile <ArrowUpRight size={14}/></a></div><div className="footer-bottom"><span>Designed to be useful to humans and machines.</span><span>© {new Date().getFullYear()} Anirudh</span></div></footer>
    </main>}
  </div>;
}
