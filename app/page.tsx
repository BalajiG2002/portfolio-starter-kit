import { BlogPosts } from 'app/components/posts'

const projects = [
  {
    id: '01',
    status: 'Ongoing',
    title: 'Enterprise App Generation Platform (KSpec)',
    description:
      'Built a spec-driven pipeline that generates plans and specs for Greenfield and Brownfield enterprise applications before code generation, with LangGraph orchestration across OpenHands agents.',
    date: '2026',
    tags: ['OpenHands', 'LangGraph', 'Spec-Driven Development'],
    metrics: [
      { label: 'SDD', value: 'plan + spec generation' },
      { label: 'Dual model strategy', value: 'cost + latency optimized' }
    ],
    featured: true
  },
  {
    id: '02',
    status: 'Completed',
    title: 'GitHub Copilot Go Lambda Generation Pipeline',
    description:
      'Built a 3-skill workflow (parser, mapper, writer) with complexity-based template selection to auto-generate new API modules from extracted Go code patterns.',
    date: '2026',
    tags: ['Copilot Cloud', 'Go', 'Multi-Agent'],
    metrics: [
      { label: '8 agents', value: 'autonomous pipeline' },
      { label: '34 skills', value: 'productionized workflow' }
    ],
    featured: true
  },
  {
    id: '03',
    status: 'Completed',
    title: 'Multi-Agent Banking Conversational System',
    description:
      'Built an autonomous banking assistant with adaptive agent routing, voice interaction, and RAG-based policy retrieval for Forex, Loan, and Credit workflows.',
    date: '2025',
    tags: ['AutoGen', 'ACP', 'A2A', 'Redis', 'RAG'],
    metrics: [
      { label: '92%', value: 'retrieval accuracy' },
      { label: 'Voice', value: 'STT/TTS enabled' }
    ],
    featured: false
  },
  {
    id: '04',
    status: 'Hackathon Winner',
    title: 'CiviqAI — Civic AI Platform',
    description:
      'Built and owned an ADK-based multi-agent pipeline that auto-routes civic complaints to the correct municipal department with Gemini Vision severity classification and real-time dashboard tracking.',
    date: 'Feb 2026',
    tags: ['Python', 'ADK', 'FastAPI', 'Redis'],
    metrics: [
      { label: '1st Prize', value: 'GDG Chennai' },
      { label: 'Real-time', value: 'dashboard tracking' }
    ],
    featured: true
  }
]

const skills = {
  Languages: ['Python', 'Java', 'SQL'],
  'AI/ML & GenAI': [
    'LLM',
    'RAG',
    'Agentic AI',
    'Prompt Engineering',
    'Vector Embeddings',
    'Semantic Search',
    'Multimodal AI'
  ],
  'Agent Frameworks': [
    'LangChain',
    'LangGraph',
    'AutoGen',
    'ACP',
    'A2A',
    'ADK',
    'MCP',
    'Semantic Kernel',
    'Microsoft Agent Framework (MAF)',
    'DeepAgents',
    'OpenAI Agents SDK',
    'OpenHands'
  ],
  'Retrieval & Graph': ['RAG', 'Vector Search', 'GraphDB', 'Neo4j'],
  'LLM Platforms': ['OpenAI', 'Azure OpenAI', 'Gemini', 'Hugging Face'],
  'Backend & APIs': ['FastAPI', 'Flask', 'Spring Boot', 'REST APIs', 'Microservices'],
  'Data & Cloud': ['Redis', 'MongoDB', 'MySQL', 'AWS Lambda', 'Azure']
}

const experience = [
  {
    company: 'Kumaran Systems Pvt Ltd',
    role: 'Agentic AI Engineer / Generative AI Engineer',
    period: 'Mar 2025 – Present',
    bullets: [
      'Building an enterprise-grade Greenfield/Brownfield application generation platform using OpenHands agents orchestrated through LangGraph nodes and spec-driven development.',
      'Designed dynamic LLM routing in the SDD pipeline: lightweight models for coding/execution, high-capability models for planning/spec generation (KSpec).',
      'Reduced manual Go Lambda API migration effort to near-zero by architecting a GitHub Copilot Cloud pipeline with 8 autonomous agents and 34 skills.',
      'Shipped conversational banking agents for Forex, Loan, and Credit workflows using AutoGen, ACP, and A2A with autonomous orchestrator routing.',
      'Integrated RAG, MCP, and vector search for banking policy/regulation retrieval, achieving 92% retrieval accuracy on complex long-context queries.'
    ]
  },
  {
    company: 'Research Fox Consulting Pvt Ltd',
    role: 'Software Intern (Data)',
    period: '2024',
    bullets: [
      'Built a sentiment analysis chatbot on Telegram for 500+ users, automating review collection and reducing manual analysis effort.',
      'Delivered the automation using Streamlit and WhatsApp.web.js integrations.'
    ]
  }
]

const achievements = [
  '1st Place, GDG Chennai Hackathon — Built and owned a multi-agent civic AI platform end-to-end (Feb 2026)',
  'Reward and Recognition (R&R) Award (x3), Kumaran Systems — Recognized for consistent high performance',
  'Go Extra Mile Award, Kumaran Systems — Recognized by Senior VP for outstanding ownership and delivery',
  'Top 50, Lyzr Agentathon — out of 500+ participants',
  'Recognized as Best Team Player for collaborative delivery across cross-functional projects'
]

const certifications = [
  'Multi-Agent Orchestration — Autogen ACP Framework, DeepLearning.AI (2025)',
  'Certified Agentic AI Engineering — Udemy (2025)',
  'Spring Boot Masterclass — Udemy (2025)',
  'MongoDB — Building RAG and AI Agents'
]

export default function Page() {
  return (
    <section>
      <div className="py-16 border-b border-neutral-200 dark:border-neutral-800">
        <div className="font-mono text-xs text-blue-600 tracking-widest uppercase mb-5 flex items-center gap-2">
          <span className="inline-block w-5 h-px bg-blue-600"></span>
          Agentic AI Engineer
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none tracking-tighter mb-6">
          BALAJI G
        </h1>
        <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed mb-8">
          AI Engineer building Agentic AI, LLM, and RAG-based systems in production. Experienced with LangChain,
          LangGraph, AutoGen, ADK, Semantic Kernel, and Microsoft Agent Framework (MAF), with graph-based
          retrieval using Neo4j and GraphDB.
        </p>
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="font-mono text-xs px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800">
            Bengaluru, India
          </span>
          <span className="font-mono text-xs px-3 py-1.5 rounded border font-medium bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800">
            🏆 GDG Chennai 1st Place
          </span>
          <span className="font-mono text-xs px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800">
            Agentic AI
          </span>
          <span className="font-mono text-xs px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800">
            RAG + Graph Retrieval
          </span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <a
            className="font-mono text-xs text-blue-600 dark:text-blue-400 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-neutral-100 dark:bg-neutral-800 transition-colors hover:bg-blue-50 dark:hover:bg-blue-950"
            href="mailto:adithya8112002@gmail.com"
          >
            adithya8112002@gmail.com
          </a>
          <a
            className="font-mono text-xs text-blue-600 dark:text-blue-400 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-neutral-100 dark:bg-neutral-800 transition-colors hover:bg-blue-50 dark:hover:bg-blue-950"
            href="tel:+916380842335"
          >
            +91 6380842335
          </a>
          <a
            className="font-mono text-xs text-blue-600 dark:text-blue-400 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-neutral-100 dark:bg-neutral-800 transition-colors hover:bg-blue-50 dark:hover:bg-blue-950"
            href="https://linkedin.com/in/balaji-g-5b387a237"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-10 border-b border-neutral-200 dark:border-neutral-800">
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-5">
          <div className="text-4xl font-extrabold text-neutral-900 dark:text-white leading-none tracking-tight">8</div>
          <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400 mt-1.5">Autonomous agents</div>
        </div>
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-5">
          <div className="text-4xl font-extrabold text-neutral-900 dark:text-white leading-none tracking-tight">34</div>
          <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400 mt-1.5">Skills delivered</div>
        </div>
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-5">
          <div className="text-4xl font-extrabold text-neutral-900 dark:text-white leading-none tracking-tight">92%</div>
          <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400 mt-1.5">Retrieval accuracy</div>
        </div>
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-5">
          <div className="text-4xl font-extrabold text-neutral-900 dark:text-white leading-none tracking-tight">Top 50</div>
          <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400 mt-1.5">Lyzr Agentathon</div>
        </div>
      </div>

      <div className="py-12 border-b border-neutral-200 dark:border-neutral-800" id="projects">
        <div className="font-mono text-xs text-neutral-500 tracking-widest uppercase mb-8">Projects</div>
        <div className="flex flex-col gap-px bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={`bg-white dark:bg-neutral-900 p-7 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800 ${proj.featured ? 'border-l-[3px] border-l-green-700 dark:border-l-green-600' : ''}`}
            >
              <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-xs text-neutral-500 mb-2">
                    {proj.id} — {proj.status}
                  </div>
                  <div className="text-lg font-bold text-neutral-900 dark:text-white mb-3 leading-snug">{proj.title}</div>
                  <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">{proj.description}</div>
                </div>
                <div className="flex-shrink-0 flex flex-col items-start md:items-end gap-2">
                  <div className="font-mono text-xs text-neutral-500">{proj.date}</div>
                  <div className="flex flex-wrap gap-1.5 justify-start md:justify-end max-w-full md:max-w-xs">
                    {proj.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="font-mono text-[10px] px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-700"
                      >
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

      <div className="py-12 border-b border-neutral-200 dark:border-neutral-800" id="experience">
        <div className="font-mono text-xs text-neutral-500 tracking-widest uppercase mb-8">Experience</div>
        <div className="flex flex-col gap-0">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 py-6 border-b border-neutral-200 dark:border-neutral-800 last:border-b-0"
            >
              <div className="font-mono text-xs text-neutral-500 pt-1 leading-relaxed whitespace-pre-line">
                {exp.period.replace(' – ', ' –\n')}
              </div>
              <div>
                <div className="text-base font-bold text-neutral-900 dark:text-white mb-1">{exp.company}</div>
                <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400 mb-4">{exp.role}</div>
                <ul className="list-none flex flex-col gap-2">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="font-mono text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-neutral-500"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-12 border-b border-neutral-200 dark:border-neutral-800" id="skills">
        <div className="font-mono text-xs text-neutral-500 tracking-widest uppercase mb-8">Technical Skills</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-5 border border-neutral-200 dark:border-neutral-700">
              <div className="font-mono text-xs text-blue-600 dark:text-blue-400 mb-4 font-medium uppercase tracking-wider">{category}</div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 px-2.5 py-1 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-12 border-b border-neutral-200 dark:border-neutral-800" id="achievements">
        <div className="font-mono text-xs text-neutral-500 tracking-widest uppercase mb-8">Achievements</div>
        <div className="flex flex-col gap-2">
          {achievements.map((achievement, i) => (
            <div
              key={i}
              className="font-mono text-xs text-neutral-600 dark:text-neutral-400 p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700"
            >
              {achievement}
            </div>
          ))}
        </div>
      </div>

      <div className="py-12 border-b border-neutral-200 dark:border-neutral-800">
        <div className="font-mono text-xs text-neutral-500 tracking-widest uppercase mb-8">Education & Certifications</div>
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 py-6 border-b border-neutral-200 dark:border-neutral-800 pb-6 mb-6">
          <div className="font-mono text-xs text-neutral-500 pt-1 leading-relaxed">2020 – 2025</div>
          <div>
            <div className="text-base font-bold text-neutral-900 dark:text-white mb-1">Vellore Institute of Technology</div>
            <div className="font-mono text-xs text-neutral-600 dark:text-neutral-400">M.Tech, Computer Science Engineering — GPA: 8.11/10</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="font-mono text-xs text-neutral-600 dark:text-neutral-400 p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700"
            >
              {cert}
            </div>
          ))}
        </div>
      </div>

      <div className="py-14 text-center">
        <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2.5">Let&apos;s build something.</div>
        <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 mb-8">
          Open to AI Engineer roles focused on Agentic AI, LLM systems, RAG, and scalable backend platforms.
        </p>
        <div className="flex gap-2.5 justify-center flex-wrap">
          <a
            className="font-mono text-xs px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium transition-opacity hover:opacity-80"
            href="mailto:adithya8112002@gmail.com"
          >
            Get in touch
          </a>
          <a
            className="font-mono text-xs px-6 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700"
            href="https://linkedin.com/in/balaji-g-5b387a237"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="font-mono text-xs text-neutral-500 tracking-widest uppercase mb-8">Latest Articles</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
