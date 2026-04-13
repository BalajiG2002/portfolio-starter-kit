import { BlogPosts } from 'app/components/posts'

const projects = [
  {
    id: '01',
    status: 'Ongoing',
    title: 'GitHub Copilot Go Lambda Generation Pipeline',
    description: 'Replaced manual Go Lambda API migration work with a fully automated agentic pipeline. Phase 1 extracts 18 pattern types from the existing codebase into 7 design documents. Phase 2 generates new modules using a 3-skill workflow — parser → mapper → writer — with a complexity analyzer selecting template coverage per module. 100% data-driven, zero hardcoding.',
    date: 'Mar 2025 –',
    tags: ['Copilot Cloud', 'Go', 'Multi-Agent', '8 agents', '34 skills'],
    metrics: [
      { label: '8 agents', value: '1 orchestrator + 7 workers' },
      { label: '2-phase', value: 'extract then generate' },
      { label: 'Zero hardcoding', value: '100% data-driven' },
      { label: '5–6', value: 'human review gates' }
    ],
    featured: true
  },
  {
    id: '02',
    status: 'Jun–Aug 2025',
    title: 'Multi-Agent Banking Conversational System',
    description: 'Autonomous banking assistant for Forex, Loan, and Credit workflows. Orchestrator agent routes tasks across specialized sub-agents with no manual handoffs. Multi-modal voice (STT/TTS via Bot Builder SDK), Redis context management across 100+ turn sessions, RAG + MCP with vector search.',
    date: 'Jun 2025',
    tags: ['Autogen', 'ACP', 'A2A', 'Bot Builder SDK', 'Redis', 'RAG'],
    metrics: [
      { label: '92%', value: 'retrieval accuracy' },
      { label: '3 domains', value: 'Forex, Loan, Credit' },
      { label: 'Voice-first', value: 'STT/TTS' },
      { label: '100+', value: 'turn context continuity' }
    ],
    featured: false
  },
  {
    id: '03',
    status: 'Feb 2026',
    title: 'CiviqAI — Civic Complaint Platform 🏆',
    description: 'Won First Prize at GDG Chennai (24-hour build, first ever hackathon). Multi-agent ADK pipeline routes civic complaints from citizens to the right municipal department — zero manual intervention. Gemini Vision classifies severity from photos, geo-clusters by zone, auto-emails the correct department, tracks resolution live via SSE.',
    date: 'Feb 2026',
    tags: ['ADK', 'FastAPI', 'Gemini Vision', 'Redis', 'React', 'SSE'],
    metrics: [
      { label: 'GDG Chennai', value: 'First Prize' },
      { label: '24-hour', value: 'build' },
      { label: 'Zero', value: 'manual intervention' },
      { label: 'Real-time', value: 'SSE tracking' }
    ],
    featured: true
  },
  {
    id: '04',
    status: 'Feb 2025',
    title: 'Multi-Agent Voice Assistant (Teams Integration)',
    description: 'Intelligent calling bot making outbound calls through Microsoft Teams. Specialized agents for scheduling, email, and task execution. Parallel multi-agent execution with context retention across agent handoffs.',
    date: 'Feb 2025 –',
    tags: ['AG2', 'A2A', 'Azure Speech', 'Teams SDK'],
    metrics: [
      { label: '60%', value: 'reduction in response time' },
      { label: 'Parallel', value: 'multi-agent execution' }
    ],
    featured: false
  },
  {
    id: '05',
    status: 'Jan 2025',
    title: 'Equity Research Chatbot',
    description: 'Multi-agent orchestration for comprehensive equity research. Combines market data, fundamentals, analyst coverage, and automated insights. Reduced research time from 2–3 hours to under 2 minutes across 1000+ stocks.',
    date: 'Jan 2025',
    tags: ['ADK', 'A2A', 'RAG', 'ChromaDB'],
    metrics: [
      { label: '<2 min', value: 'vs 2–3 hrs manual' },
      { label: '95%+', value: 'data accuracy' },
      { label: '1000+', value: 'stocks covered' }
    ],
    featured: false
  }
]

const skills = {
  'AI & Agents': ['Autogen', 'ACP', 'A2A', 'ADK', 'LangChain', 'MCP', 'OpenAI', 'Gemini'],
  'RAG & Memory': ['RAG', 'Vector Embeddings', 'Redis', 'ChromaDB', 'Vector Search'],
  'Backend / Frontend': ['FastAPI', 'Flask', 'Spring Boot', 'Python', 'Java', 'React', 'SSE', 'Streamlit'],
  'Infra & Tools': ['AWS Lambda', 'Azure', 'MongoDB', 'MySQL', 'Git', 'Bot Builder SDK', 'Docker']
}

const experience = [
  {
    company: 'Kumaran Systems Pvt Ltd',
    role: 'Agentic AI Engineer / Generative AI Engineer',
    period: 'Mar 2025 – Present',
    bullets: [
      'Architected GitHub Copilot Cloud pipeline — 8 agents, 34 skills — replacing manual Go Lambda API migration work',
      'Shipped conversational banking agents for Forex, Loan, Credit using Autogen + ACP + A2A',
      'Built multi-modal voice agent (STT/TTS); integrated RAG + MCP achieving 92% retrieval accuracy',
      'Redis-backed context management across 100+ turn banking conversations',
      'Participated in backend microservices hackathons; implemented autonomous error handling in agentic workflows'
    ]
  },
  {
    company: 'Research Fox Consulting Pvt Ltd',
    role: 'Software Intern (Data)',
    period: 'Jan 2024 – Jun 2024',
    bullets: [
      'Built sentiment analysis chatbot on Telegram supporting 500+ users with interactive visual insights',
      'Automated review collection using WhatsApp.web.js and Streamlit; cut manual analysis time significantly'
    ]
  }
]

const certifications = [
  'Multi-Agent Orchestration — Autogen ACP Framework, DeepLearning.AI (2025)',
  'Certified Agentic AI Engineering — Udemy (2025)',
  'Spring Boot Masterclass — Udemy (April 2025)'
]

export default function Page() {
  return (
    <section>
      {/* HERO */}
      <div className="portfolio-hero">
        <div className="hero-tag">
          <span className="tag-line"></span>
          Agentic AI Engineer
        </div>
        <h1 className="hero-title">Balaji G</h1>
        <p className="hero-sub">
          I build AI agents that talk to people and get things done — no human in the loop. 
          From conversational banking systems to 8-agent code generation pipelines.
        </p>
        <div className="hero-badges">
          <span className="badge win">🏆 GDG Chennai First Prize</span>
          <span className="badge">Multi-Agent Systems</span>
          <span className="badge">Voice AI</span>
          <span className="badge">RAG Pipelines</span>
          <span className="badge">GitHub Copilot Cloud</span>
        </div>
        <div className="contact-row">
          <a className="contact-link" href="mailto:adithya8112002@gmail.com">adithya8112002@gmail.com</a>
          <a className="contact-link" href="tel:+916380842335">+91 6380842335</a>
          <a className="contact-link" href="https://www.linkedin.com/in/balaji-g-5b387a237" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-num">8</div>
          <div className="stat-label">Agents built</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">34</div>
          <div className="stat-label">Skills designed</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">92%</div>
          <div className="stat-label">RAG accuracy</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">1st</div>
          <div className="stat-label">GDG Chennai</div>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="portfolio-section" id="projects">
        <div className="section-label">Projects</div>
        <div className="projects-list">
          {projects.map((proj) => (
            <div key={proj.id} className={`proj-card ${proj.featured ? 'featured' : ''}`}>
              <div className="proj-top">
                <div className="proj-left">
                  <div className="proj-num">{proj.id} — {proj.status}</div>
                  <div className="proj-name">{proj.title}</div>
                  <div className="proj-desc">{proj.description}</div>
                </div>
                <div className="proj-right">
                  <div className="proj-date">{proj.date}</div>
                  <div className="proj-tags">
                    {proj.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="proj-metrics">
                {proj.metrics.map((metric, i) => (
                  <div key={i} className="metric">
                    <strong>{metric.label}</strong> — {metric.value}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="portfolio-section" id="experience">
        <div className="section-label">Experience</div>
        <div className="exp-list">
          {experience.map((exp, idx) => (
            <div key={idx} className="exp-item">
              <div className="exp-date">{exp.period.replace(' – ', ' –\n')}</div>
              <div>
                <div className="exp-company">{exp.company}</div>
                <div className="exp-role">{exp.role}</div>
                <ul className="exp-bullets">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SKILLS */}
      <div className="portfolio-section" id="skills">
        <div className="section-label">Technical Skills</div>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-card">
              <div className="skill-cat">{category}</div>
              <div className="skill-items">
                {items.map((item, i) => (
                  <span key={i} className="skill-pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION & CERTS */}
      <div className="portfolio-section">
        <div className="section-label">Education & Certifications</div>
        <div className="exp-item" style={{ borderBottom: '0.5px solid var(--border)', paddingBottom: '1.4rem', marginBottom: '1.2rem' }}>
          <div className="exp-date">2020 – 2025</div>
          <div>
            <div className="exp-company">Vellore Institute of Technology</div>
            <div className="exp-role">M.Tech Computer Science Engineering — GPA 8.11/10</div>
          </div>
        </div>
        <div className="certs-list">
          {certifications.map((cert, i) => (
            <div key={i} className="cert" dangerouslySetInnerHTML={{ __html: cert.replace(/—/g, '—<br/>').replace(/^([^—]+)/, '<strong>$1</strong>') }} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="portfolio-cta">
        <div className="cta-title">Let's build something.</div>
        <p className="cta-sub">Open to roles in agentic AI, conversational systems, and voice AI — especially fintech.</p>
        <div className="cta-btns">
          <a className="btn-primary" href="mailto:adithya8112002@gmail.com">Get in touch</a>
          <a className="btn-secondary" href="https://www.linkedin.com/in/balaji-g-5b387a237" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </div>

      {/* Blog Section */}
      <div className="blog-section">
        <h2 className="section-label">Latest Articles</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
