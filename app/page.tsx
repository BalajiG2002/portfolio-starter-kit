import { BlogPosts } from 'app/components/posts'

interface Project {
  title: string
  duration: string
  framework: string
  description: string
  impact: string[]
  tech: string[]
}

const projects: Project[] = [
  {
    title: 'Multi-Agent Banking Conversational System',
    duration: 'March 2025 - Ongoing',
    framework: 'Microsoft Autogen + ACP',
    description: 'Autonomous banking system handling multi-domain queries (Forex trading, loan processing, credit assessment) with intelligent context management across 100+ turn conversations.',
    impact: [
      '92% accuracy in policy/regulation retrieval',
      'Context continuity across 100+ turn sessions',
      '3 specialized banking domains supported',
      'Real-time progress monitoring & execution'
    ],
    tech: ['Autogen', 'ACP', 'Redis', 'FastAPI', 'MCP', 'RAG', 'Bot Builder SDK']
  },
  {
    title: 'Multi-Agent Voice Assistant with Teams Integration',
    duration: 'February 2025 - Ongoing',
    framework: 'AG2 + A2A',
    description: 'Intelligent calling bot making outbound calls through Microsoft Teams with specialized agents for scheduling, email, and task execution.',
    impact: [
      '60% reduction in response time',
      'Parallel multi-agent execution',
      'Hands-free voice-based automation',
      'Context retention across agent handoffs'
    ],
    tech: ['AG2', 'A2A', 'Azure Speech Services', 'Microsoft Graph API', 'Teams SDK', 'Python']
  },
  {
    title: 'Equity Research Chatbot with Multi-Agent Orchestration',
    duration: 'January 2025 - Ongoing',
    framework: 'ADK + A2A',
    description: 'Comprehensive equity research platform combining market data, fundamentals, analyst coverage, and automated insights through coordinated multi-agent analysis.',
    impact: [
      '<2 minute comprehensive reports (vs 2-3 hours manual)',
      '95%+ accuracy in data aggregation',
      '20+ data source integration',
      '1000+ stock automated coverage'
    ],
    tech: ['ADK', 'A2A', 'RAG', 'ChromaDB', 'Financial APIs', 'Pandas', 'NumPy']
  }
]

const expertise = {
  'Agentic AI Frameworks': ['Microsoft Autogen + ACP', 'AG2 + A2A', 'ADK + A2A'],
  'Multi-Agent Architecture': ['Hub-and-spoke orchestration', 'Sequential agent invocation', 'Parallel execution', 'Autonomous error recovery'],
  'Memory & Retrieval': ['Redis context management', 'Vector embeddings', 'RAG systems', 'MCP protocol'],
  'Integration & Voice': ['Microsoft Teams SDK', 'Bot Builder SDK', 'Azure Speech Services', 'Microsoft Graph API']
}

export default function Page() {
  return (
    <section>
      {/* Hero */}
      <div className="mb-16">
        <div className="mb-4 text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
          Agentic AI Engineer
        </div>
        <h1 className="mb-4 text-5xl md:text-6xl font-bold tracking-tight">
          BALAJI G
        </h1>
        <h2 className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-semibold mb-6">
          Multi-Agent Systems Specialist | Production-Grade Agentic AI
        </h2>
        
        <div className="flex flex-wrap gap-3 mb-12">
          <a
            href="mailto:adithya8112002@gmail.com"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
          >
            <span className="mr-2">📧</span> Email
          </a>
          <a
            href="tel:+916380842335"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-all duration-200"
          >
            <span className="mr-2">📱</span> +91 6380842335
          </a>
          <a
            href="https://linkedin.com/in/balaji-g"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-all duration-200"
          >
            <span className="mr-2">🔗</span> LinkedIn
          </a>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="mb-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">🚀 Featured Projects</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">Production-grade multi-agent systems deployed in financial services & enterprise automation</p>
        </div>

        <div className="space-y-4">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      {project.duration}
                    </span>
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                      {project.framework}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                {project.description}
              </p>

              <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-3 flex items-center">
                    <span className="mr-2">📊</span> Key Impact
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.impact.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-neutral-700 dark:text-neutral-300">
                        <span className="mr-2 text-blue-500 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-3 flex items-center">
                    <span className="mr-2">🛠️</span> Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Expertise */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">🛠️ Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(expertise).map(([category, items]) => (
            <div key={category} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
              <h3 className="font-bold text-lg mb-4 text-neutral-900 dark:text-white">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-center text-neutral-700 dark:text-neutral-300">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mb-20 grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { icon: '🤖', label: 'Agents Deployed', value: '15+' },
          { icon: '🏗️', label: 'Frameworks', value: '3' },
          { icon: '🎯', label: 'Accuracy', value: '92-95%' },
          { icon: '⚡', label: 'Speed Improvement', value: '60-70%' }
        ].map((stat, i) => (
          <div key={i} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 text-center hover:border-blue-400 dark:hover:border-blue-500 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all">
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">🎓 Certifications & Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Certified in Agentic AI Engineering (Udemy, 2025)',
            'Multi-Agent Orchestration: Autogen-ACP Framework (DeepLearning.AI, 2025)',
            'Spring Boot Masterclass (Udemy, April 2025)',
            'AZ-900 - Azure Web Services (In Progress)'
          ].map((cert, i) => (
            <div key={i} className="flex items-start p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
              <span className="mr-3 text-xl">✨</span>
              <span className="text-neutral-700 dark:text-neutral-300">{cert}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mb-16 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 md:p-12 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="mb-8 text-blue-50 max-w-2xl text-lg">
          Let's discuss how multi-agent orchestration and agentic AI can solve your complex business challenges with intelligent automation and real-time decision making.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:adithya8112002@gmail.com"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="https://linkedin.com/in/balaji-g"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>

      {/* Blog Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">📝 Latest Articles</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
