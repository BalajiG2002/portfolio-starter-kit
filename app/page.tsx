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
      <div className="py-16 border-b border-neutral-200 dark:border-neutral-800">
        <div className="font-mono text-xs text-blue-600 tracking-widest uppercase mb-5 flex items-center gap-2">
          <span className="inline-block w-5 h-px bg-blue-600"></span>
          Agentic AI Engineer
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none tracking-tighter mb-6">
          Balaji G
        </h1>
        <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed mb-8">
          I build AI agents that talk to people and get things done — no human in the loop. 
          From conversational banking systems to 8-agent code generation pipelines.
        </p>
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="font-mono text-xs px-3 py-1.5 rounded border font-medium bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800">
            🏆 GDG Chennai First Prize
          </span>
          <span className="font-mono text-xs px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800">
            Multi-Agent Systems
          </span>
          <span className="font-mono text-xs px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800">
            Voice AI
          </span>
          <span className="font-mono text-xs px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800">
            RAG Pipelines
          </span>
          <span className="font-mono text-xs px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800">
            GitHub Copilot Cloud
          </span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <a className="font-mono text-xs text-blue-600 dark:text-blue-400 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-neutral-100 dark:bg-neutral-800 transition-colors hover:bg-blue-50 dark:hover:bg-blue-950" 
             href="mailto:adithya8112002@gmail.com">
            adithya8112002@gmail.com
          </a>
          <a className="font-mono text-xs text-blue-600 dark:text-blue-400 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-neutral-100 dark:bg-neutral-800 transition-colors hover:bg-blue-50 dark:hover:bg-blue-950" 
             href="tel:+916380842335">
            +91 6380842335
          </a>
          <a className="font-mono text-xs text-blue-600 dark:text-blue-400 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-neutral-100 dark:bg-neutral-800 transition-colors hover:bg-blue-50 dark:hover:bg-blue-950" 
             href="https://www.linkedin.com/in/balaji-g-5b387a237" 
             target="_blank" 
             rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-10 border-b border-neutral-200 dark:border-neutral-800">
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-5">
          <div className="text-4xl font-extrabold text-neutral-900 dark:text-white leading-none tracking-tight">8</div>
          <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400 mt-1.5">Agents built</div>
        </div>
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-5">
          <div className="text-4xl font-extrabold text-neutral-900 dark:text-white leading-none tracking-tight">34</div>
          <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400 mt-1.5">Skills designed</div>
        </div>
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-5">
          <div className="text-4xl font-extrabold text-neutral-900 dark:text-white leading-none tracking-tight">92%</div>
          <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400 mt-1.5">RAG accuracy</div>
        </div>
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-5">
          <div className="text-4xl font-extrabold text-neutral-900 dark:text-white leading-none tracking-tight">1st</div>
          <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400 mt-1.5">GDG Chennai</div>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="py-12 border-b border-neutral-200 dark:border-neutral-800" id="projects">
        <div className="font-mono text-xs text-neutral-500 tracking-widest uppercase mb-8">Projects</div>
        <div className="flex flex-col gap-px bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
          {projects.map((proj) => (
            <div key={proj.id} className={`bg-white dark:bg-neutral-900 p-7 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800 ${proj.featured ? 'border-l-[3px] border-l-green-700 dark:border-l-green-600' : ''}`}>
              <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-xs text-neutral-500 mb-2">{proj.id} — {proj.status}</div>
                  <div className="text-lg font-bold text-neutral-900 dark:text-white mb-3 leading-snug">{proj.title}</div>
                  <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">{proj.description}</div>
                </div>
                <div className="flex-shrink-0 flex flex-col items-start md:items-end gap-2">
                  <div className="font-mono text-xs text-neutral-500">{proj.date}</div>
                  <div className="flex flex-wrap gap-1.5 justify-start md:justify-end max-w-full md:max-w-xs">
                    {proj.tags.map((tag, i) => (
                      <span key={i} className="font-mono text-[10px] px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                {proj.metrics.map((metric, i) => (
                  <div key={i} className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
                    <strong className="text-blue-600 dark:text-blue-400 font-medium">{metric.label}</strong> — {metric.value}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="py-12 border-b border-neutral-200 dark:border-neutral-800" id="experience">
        <div className="font-mono text-xs text-neutral-500 tracking-widest uppercase mb-8">Experience</div>
        <div className="flex flex-col gap-0">
          {experience.map((exp, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 py-6 border-b border-neutral-200 dark:border-neutral-800 last:border-b-0">
              <div className="font-mono text-xs text-neutral-500 pt-1 leading-relaxed whitespace-pre-line">{exp.period.replace(' – ', ' –\n')}</div>
              <div>
                <div className="text-base font-bold text-neutral-900 dark:text-white mb-1">{exp.company}</div>
                <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400 mb-4">{exp.role}</div>
                <ul className="list-none flex flex-col gap-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="font-mono text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-neutral-500" 
                        dangerouslySetInnerHTML={{ __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong class="text-neutral-900 dark:text-white font-medium">$1</strong>') }} />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SKILLS */}
      <div className="py-12 border-b border-neutral-200 dark:border-neutral-800" id="skills">
        <div className="font-mono text-xs text-neutral-500 tracking-widest uppercase mb-8">Technical Skills</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-5 border border-neutral-200 dark:border-neutral-700">
              <div className="font-mono text-xs text-blue-600 dark:text-blue-400 mb-4 font-medium uppercase tracking-wider">{category}</div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item, i) => (
                  <span key={i} className="font-mono text-xs text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 px-2.5 py-1 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION & CERTS */}
      <div className="py-12 border-b border-neutral-200 dark:border-neutral-800">
        <div className="font-mono text-xs text-neutral-500 tracking-widest uppercase mb-8">Education & Certifications</div>
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 py-6 border-b border-neutral-200 dark:border-neutral-800 pb-6 mb-6">
          <div className="font-mono text-xs text-neutral-500 pt-1 leading-relaxed">2020 – 2025</div>
          <div>
            <div className="text-base font-bold text-neutral-900 dark:text-white mb-1">Vellore Institute of Technology</div>
            <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400">M.Tech Computer Science Engineering — GPA 8.11/10</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {certifications.map((cert, i) => (
            <div key={i} className="font-mono text-xs text-neutral-600 dark:text-neutral-400 p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700" 
                 dangerouslySetInnerHTML={{ __html: cert.replace(/—/g, '—<br/>').replace(/^([^—]+)/, '<strong class="text-neutral-900 dark:text-white">$1</strong>') }} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-14 text-center">
        <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2.5">Let's build something.</div>
        <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 mb-8">Open to roles in agentic AI, conversational systems, and voice AI — especially fintech.</p>
        <div className="flex gap-2.5 justify-center flex-wrap">
          <a className="font-mono text-xs px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium transition-opacity hover:opacity-80" 
             href="mailto:adithya8112002@gmail.com">
            Get in touch
          </a>
          <a className="font-mono text-xs px-6 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700" 
             href="https://www.linkedin.com/in/balaji-g-5b387a237" 
             target="_blank" 
             rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </div>

      {/* Blog Section */}
      <div className="mb-8">
        <h2 className="font-mono text-xs text-neutral-500 tracking-widest uppercase mb-8">Latest Articles</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
