import React from 'react'
import {
  Activity,
  ArrowRight,
  Cpu,
  Database,
  FileText,
  Lock,
  Server,
  ShieldCheck,
  Sparkles,
  Zap
} from 'lucide-react'

interface FlowStep {
  label: string
  sub: string
  icon?: React.ReactNode
  active?: boolean
}

export function SimplePipelineFlow({
  steps,
  variant = 'purple'
}: {
  steps: FlowStep[]
  variant?: 'purple' | 'emerald' | 'blue'
}) {
  return (
    <div className={`simple-pipeline variant-${variant}`} aria-hidden="true">
      <div className="pipeline-track">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <div className={`pipeline-node ${step.active ? 'active' : ''}`}>
              <div className="node-icon-wrap">
                {step.icon}
                <span className="node-glow" />
              </div>
              <div className="node-text">
                <span className="node-label">{step.label}</span>
                <span className="node-sub">{step.sub}</span>
              </div>
            </div>
            {idx < steps.length - 1 && (
              <div className="pipeline-connector">
                <div className="connector-line">
                  <div className="connector-pulse" />
                </div>
                <ArrowRight size={12} className="connector-arrow" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export function ChamaLedgerVisual() {
  const steps: FlowStep[] = [
    { label: 'M-Pesa STK', sub: 'Daraja Ingress', icon: <Zap size={13} /> },
    { label: 'Webhook HMAC', sub: 'Verified', icon: <ShieldCheck size={13} /> },
    { label: 'Event Store', sub: 'Append-Only Log', icon: <Database size={13} />, active: true },
    { label: 'OpenAI Parser', sub: 'Meeting Minutes', icon: <Sparkles size={13} /> }
  ]

  return (
    <div className="visual-container">
      <div className="visual-badge-row">
        <span className="flow-kicker">FINANCIAL EVENT SOURCING PIPELINE</span>
        <span className="flow-status live">
          <span className="pulse-dot" /> DARAJA WEBHOOK READY
        </span>
      </div>
      <SimplePipelineFlow steps={steps} variant="emerald" />
    </div>
  )
}

export function SemanticGateVisual() {
  const steps: FlowStep[] = [
    { label: 'LLM Request', sub: 'POST /chat', icon: <Activity size={13} /> },
    { label: '@SemanticRateLimit', sub: 'Spring AOP', icon: <ShieldCheck size={13} /> },
    { label: 'Redis Sliding Window', sub: 'Token/Cost Quota', icon: <Database size={13} />, active: true },
    { label: 'Upstream & Metrics', sub: 'OpenAI + Prometheus', icon: <Server size={13} /> }
  ]

  return (
    <div className="visual-container">
      <div className="visual-badge-row">
        <span className="flow-kicker">BUDGET-CONTROL ARCHITECTURE</span>
        <span className="flow-status active">
          <span className="pulse-dot" /> TOKEN BUDGET ACTIVE
        </span>
      </div>
      <SimplePipelineFlow steps={steps} variant="purple" />
    </div>
  )
}

export function TwendeVisual() {
  const steps: FlowStep[] = [
    { label: 'Availability', sub: 'Date Overlap', icon: <FileText size={12} /> },
    { label: 'Atomic Lock', sub: 'DB Transaction', icon: <Lock size={12} />, active: true },
    { label: 'M-Pesa Push', sub: 'STK Callback', icon: <Zap size={12} /> },
    { label: 'Confirmed', sub: 'Reconciled', icon: <ShieldCheck size={12} /> }
  ]

  return <SimplePipelineFlow steps={steps} variant="blue" />
}

export function InsuranceRagVisual() {
  const steps: FlowStep[] = [
    { label: 'Policy PDF', sub: 'Document Ingest', icon: <FileText size={12} /> },
    { label: 'pdfplumber', sub: 'Text Extraction', icon: <Server size={12} /> },
    { label: 'ChromaDB', sub: 'Vector Retrieval', icon: <Database size={12} />, active: true },
    { label: 'Groq Llama 3.1', sub: 'Cited Answers', icon: <Sparkles size={12} /> }
  ]

  return <SimplePipelineFlow steps={steps} variant="purple" />
}

export function DogClassifierVisual() {
  const steps: FlowStep[] = [
    { label: 'Image Tensor', sub: '224x224 RGB', icon: <Cpu size={12} /> },
    { label: 'torchvision', sub: 'Augmentations', icon: <Activity size={12} /> },
    { label: 'CNN Backbones', sub: 'ResNet / VGG', icon: <Cpu size={12} />, active: true },
    { label: 'Prediction', sub: 'Softmax Top-1/5', icon: <ShieldCheck size={12} /> }
  ]

  return <SimplePipelineFlow steps={steps} variant="purple" />
}

export function WeatherApiVisual() {
  const steps: FlowStep[] = [
    { label: 'GET /weather', sub: 'HTTP Ingress', icon: <Activity size={12} /> },
    { label: 'FastAPI Router', sub: 'Async Non-Block', icon: <Server size={12} />, active: true },
    { label: 'httpx Client', sub: 'OpenWeatherMap', icon: <Zap size={12} /> },
    { label: 'Pydantic', sub: 'Strict Validation', icon: <ShieldCheck size={12} /> }
  ]

  return <SimplePipelineFlow steps={steps} variant="blue" />
}

export function ProjectVisualRenderer({ type }: { type: string }) {
  switch (type) {
    case 'chama-ledger':
      return <ChamaLedgerVisual />
    case 'semantic-gate':
      return <SemanticGateVisual />
    case 'twende':
      return <TwendeVisual />
    case 'insurance-rag':
      return <InsuranceRagVisual />
    case 'dog-classifier':
      return <DogClassifierVisual />
    case 'weather-api':
      return <WeatherApiVisual />
    default:
      return null
  }
}
