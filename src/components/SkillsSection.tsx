import React from 'react'
import {
  Award,
  CheckCircle,
  Cpu,
  Database,
  Layers,
  Server,
  Terminal,
  Zap
} from 'lucide-react'

interface SkillGroup {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  skills: { name: string; highlight?: boolean }[]
}

const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    title: 'Backend & Systems Architecture',
    icon: <Server size={18} className="text-purple" />,
    description: 'High-throughput enterprise backends, secure multi-tenant APIs, and event-driven architectures.',
    skills: [
      { name: 'Java 21', highlight: true },
      { name: 'Spring Boot 3', highlight: true },
      { name: 'Python / FastAPI', highlight: true },
      { name: 'Spring Security (RBAC)' },
      { name: 'Spring AOP' },
      { name: 'Spring Cloud Gateway' },
      { name: 'Event-Sourcing Principles' },
      { name: 'Atomic Transactions & Locks' },
      { name: 'RESTful API Design' },
      { name: 'WebSockets' }
    ]
  },
  {
    id: 'ai-ml',
    title: 'Applied AI & Machine Learning',
    icon: <Cpu size={18} className="text-purple" />,
    description: 'Context-grounded RAG systems, vector embeddings, fine-tuning, and computer vision pipelines.',
    skills: [
      { name: 'Amazon SageMaker', highlight: true },
      { name: 'PyTorch / torchvision', highlight: true },
      { name: 'ChromaDB (Vector DB)', highlight: true },
      { name: 'RAG Architectures' },
      { name: 'fastembed' },
      { name: 'Groq / Llama 3.1' },
      { name: 'OpenAI Function Calling' },
      { name: 'Streamlit' },
      { name: 'CNN Backbones (ResNet, VGG)' },
      { name: 'MLOps & Evaluation' }
    ]
  },
  {
    id: 'data',
    title: 'Persistence & Distributed Caching',
    icon: <Database size={18} className="text-purple" />,
    description: 'Relational data modeling, ACID transactions, append-only logs, and sliding-window rate limiters.',
    skills: [
      { name: 'PostgreSQL', highlight: true },
      { name: 'Redis (Sliding Window)', highlight: true },
      { name: 'MySQL' },
      { name: 'Bucket4j Token Buckets' },
      { name: 'Schema Optimization' },
      { name: 'Connection Pooling' },
      { name: 'Pessimistic/Optimistic Locks' }
    ]
  },
  {
    id: 'devops-integrations',
    title: 'DevOps, Metrics & Integrations',
    icon: <Zap size={18} className="text-purple" />,
    description: 'Production containerization, mobile money integrations, and real-time observability.',
    skills: [
      { name: 'M-Pesa Daraja API', highlight: true },
      { name: 'Docker', highlight: true },
      { name: 'Prometheus & Micrometer', highlight: true },
      { name: 'Git & GitHub' },
      { name: 'Maven' },
      { name: 'Linux / Bash' },
      { name: 'Pydantic Data Contracts' },
      { name: 'Postman' }
    ]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-heading">
      <div className="section-ambient-glow" aria-hidden="true" />

      <div className="section-header-wrap">
        <p className="eyebrow">
          <span>03</span> SKILLS &amp; CAPABILITIES
        </p>
        <h2 id="skills-heading" className="projects-headline">
          Technical arsenal &amp;<br />
          <span>core expertise.</span>
        </h2>
        <p className="projects-lead">
          Combining robust JVM and Python backend engineering with hands-on applied AI, vector search, and cloud-native practices.
        </p>
      </div>

      {/* AWS AI/ML Scholarship Highlight Banner */}
      <div className="aws-banner" role="region" aria-label="AWS AI/ML Scholarship Programs">
        <div className="aws-banner-icon">
          <Award size={24} />
        </div>
        <div className="aws-banner-content">
          <div className="aws-badge-row">
            <span className="aws-pill primary">AWS SCHOLAR</span>
            <span className="aws-pill success">AWS AI/ML SCHOLARS PROGRAM (COMPLETED)</span>
            <span className="aws-pill in-progress">FUTURE AI PROGRAMMER NANODEGREE (ACTIVE)</span>
          </div>
          <h3 className="aws-title">Amazon Web Services AI/ML Scholar</h3>
          <p className="aws-description">
            Selected for a competitive AWS-sponsored scholarship cohort focused on practical ML deployment, Amazon SageMaker, neural network architectures, and MLOps workflows. Selected to continue into the advanced follow-on Nanodegree track for Future AI Programmers.
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.id} className="skill-card">
            <div className="skill-card-header">
              <div className="skill-icon-wrap">{group.icon}</div>
              <div>
                <h3 className="skill-card-title">{group.title}</h3>
                <p className="skill-card-desc">{group.description}</p>
              </div>
            </div>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`skill-tag ${skill.highlight ? 'highlight' : ''}`}
                >
                  {skill.highlight && <span className="tag-dot" aria-hidden="true" />}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
