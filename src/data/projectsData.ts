export interface Project {
  id: string
  title: string
  subtitle: string
  context: string
  categories: ('Backend' | 'AI/ML' | 'APIs')[]
  featured: boolean
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  tagline?: string
  visualType?: string
  highlights?: string[]
  problemStatement?: string
}

export type ProjectCategory = 'All' | 'Backend' | 'AI/ML' | 'APIs'

export const projectsData: Project[] = [
  {
    id: 'chama-ledger',
    title: 'ChamaLedger',
    subtitle: 'AI-powered community financial ledger & chama management platform',
    context: 'Featured · Full-stack fintech platform',
    categories: ['Backend', 'AI/ML', 'APIs'],
    featured: true,
    tagline: 'AI-powered community financial ledger & chama management platform',
    description:
      'An append-only financial ledger built on event-sourcing principles in PostgreSQL to ensure tamper-evident records and group accountability for informal investment chamas. Features real-time M-Pesa Daraja payment integration for instant mobile contribution capture, automated loan amortization calculations, and an OpenAI GPT-4o Function Calling parser that converts raw meeting minutes into structured ledger entries and audit reports.',
    technologies: [
      'Java 21',
      'Spring Boot 3',
      'PostgreSQL',
      'M-Pesa Daraja API',
      'OpenAI API',
      'Docker',
      'Next.js 14'
    ],
    highlights: [
      'Append-only financial ledger leveraging event-sourcing principles in PostgreSQL.',
      'AI meeting-minutes parsing using OpenAI Function Calling.',
      'Real-time M-Pesa Daraja payment integration automating mobile money reconciliation.',
      'Role-based REST APIs securing multi-tenant operations.'
    ],
    githubUrl: 'https://github.com/kmwenda1/chama-ledger'
  },
  {
    id: 'semantic-gate',
    title: 'SemanticGate',
    subtitle: 'Semantic rate-limiting library for LLM APIs',
    context: 'Featured · Open-source Spring Boot starter',
    categories: ['Backend', 'APIs', 'AI/ML'],
    featured: true,
    tagline: 'Semantic rate-limiting library for LLM APIs',
    description:
      'A semantic rate-limiting library and Spring Cloud Gateway filter that controls LLM API usage through token and monetary credit budgets per tenant rather than crude request-count throttling. Implemented via Spring AOP (@SemanticRateLimit) with pluggable cost extractors for OpenAI and Anthropic schemas, atomic Redis sliding-window tracking, administrative REST policy APIs, and Prometheus metrics for real-time AI cost governance.',
    technologies: [
      'Java 21',
      'Spring Boot 3',
      'Spring AOP',
      'Spring Cloud Gateway',
      'Redis',
      'Bucket4j',
      'Prometheus'
    ],
    highlights: [
      'Controls token/credit budgets per tenant rather than crude request counts.',
      'Annotation-driven integration using Spring AOP (@SemanticRateLimit).',
      'Pluggable cost extractors supporting OpenAI and Anthropic pricing schemas.',
      'Redis-backed distributed sliding-window budget tracker.'
    ],
    githubUrl: 'https://github.com/kmwenda1/semantic-gate'
  },
  {
    id: 'twende-systems',
    title: 'Twende Systems',
    subtitle: 'Hotel and trip booking platform with atomic transactions',
    context: 'Final year project · Concurrency & booking engine',
    categories: ['Backend', 'APIs'],
    featured: false,
    tagline: 'Hotel and trip booking platform with atomic transactions',
    description:
      'A full-featured hotel and excursion booking platform engineered to eliminate double-booking through a real-time room availability engine with concurrent reservation conflict detection and atomic database transactions. Features end-to-end M-Pesa Daraja STK Push payment integration and automated reconciliation matching confirmation codes to bookings.',
    technologies: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'REST APIs',
      'M-Pesa Daraja API',
      'HTML/CSS/JS'
    ],
    highlights: [
      'Real-time room availability verification with date-range overlap algorithms.',
      'Atomic database transactions preventing double-booking.',
      'End-to-end M-Pesa Daraja STK Push integration with automated reconciliation.'
    ],
    githubUrl: 'https://github.com/kmwenda1/twende-systems'
  },
  {
    id: 'insurance-rag',
    title: 'Insurance Document Assistant',
    subtitle: 'RAG policy analysis and source grounding',
    context: 'Live deployment · Retrieval-Augmented Generation',
    categories: ['AI/ML'],
    featured: false,
    tagline: 'RAG policy analysis and source grounding',
    description:
      'A production RAG application where users upload insurance policy PDFs and ask questions in plain English, getting answers strictly supported by cited source passages. Features layout-aware PDF extraction via pdfplumber, ChromaDB top-5 vector indexing with fastembed, and citation-enforcing Groq-accelerated Llama 3.1 inference.',
    technologies: [
      'Python',
      'Streamlit',
      'ChromaDB',
      'fastembed',
      'Groq (Llama 3.1)',
      'pdfplumber'
    ],
    highlights: [
      'Multi-page PDF extraction and layout-aware chunking pipeline via pdfplumber.',
      'ChromaDB vector indexing with fastembed embeddings.',
      'Citation-enforcing Groq/Llama prompts linking answers to source passages.'
    ],
    githubUrl: 'https://github.com/kmwenda1/inurance-rag',
    liveUrl: 'https://inurance-rag-test.streamlit.app/'
  },
  {
    id: 'dog-breed-classifier',
    title: 'Dog Breed Image Classifier',
    subtitle: 'Pretrained CNN deep learning vision pipeline',
    context: 'Computer vision & model benchmarking',
    categories: ['AI/ML'],
    featured: false,
    tagline: 'Pretrained CNN deep learning vision pipeline',
    description:
      'A computer vision pipeline using pretrained Convolutional Neural Networks (ResNet, AlexNet, VGG) to classify canine breeds in images, benchmarking accuracy trade-offs, parameter efficiency, and inference latency across backbones.',
    technologies: [
      'Python',
      'PyTorch',
      'torchvision',
      'ResNet',
      'AlexNet',
      'VGG'
    ],
    highlights: [
      'End-to-end image tensor preprocessing and normalization with torchvision.',
      'Comparative benchmarking across ResNet, AlexNet, and VGG backbones.',
      'Fine-grained breed taxonomy classification.'
    ],
    githubUrl: 'https://github.com/kmwenda1/predefined-image-classifier-to-identify-dog-breeds'
  },
  {
    id: 'weather-api',
    title: 'Weather API',
    subtitle: 'Real-time asynchronous weather REST service',
    context: 'High-throughput microservice',
    categories: ['Backend', 'APIs'],
    featured: false,
    tagline: 'Real-time asynchronous weather REST service',
    description:
      'An asynchronous FastAPI service that queries live OpenWeatherMap telemetry via non-blocking httpx async client and delivers strictly validated Pydantic JSON contracts, with resilient upstream exception mapping and environment-based secrets management.',
    technologies: [
      'Python',
      'FastAPI',
      'Pydantic',
      'httpx',
      'OpenWeatherMap API'
    ],
    highlights: [
      'Asynchronous endpoint handlers with FastAPI and non-blocking httpx.',
      'Strict schema validation and data contracts with Pydantic.',
      'Resilient upstream error handling with HTTPException mapping.'
    ],
    githubUrl: 'https://github.com/kmwenda1/weather-API'
  }
]
