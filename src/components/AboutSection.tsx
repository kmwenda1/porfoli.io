import React from 'react'
import {
  BookOpen,
  GraduationCap,
  MapPin,
  Sparkles,
  Target,
  Terminal,
  Code2
} from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="section-ambient-glow" aria-hidden="true" />

      <div className="section-header-wrap">
        <p className="eyebrow">
          <span>04</span> BACKGROUND &amp; PHILOSOPHY
        </p>
        <h2 id="about-heading" className="projects-headline">
          Engineering reliable systems,<br />
          <span>making AI practical.</span>
        </h2>
        <p className="projects-lead">
          A builder's perspective on backend engineering, data resilience, and bridging software architecture with applied machine learning.
        </p>
      </div>

      <div className="about-grid">
        {/* Main Narrative Column */}
        <div className="about-narrative">
          <div className="narrative-card">
            <h3 className="narrative-title">
              <Terminal size={17} className="text-purple" />
              <span>Who I Am</span>
            </h3>
            <p>
              I'm a backend developer and AWS AI/ML scholar based in <strong>Nairobi, Kenya</strong>. I specialize in designing transactional backend architectures with <strong>Java 21 / Spring Boot</strong> and creating intelligent AI pipelines using <strong>Python, PyTorch, and vector databases</strong>.
            </p>
            <p>
              My focus is on solving concrete real-world challenges. Whether engineering an event-sourced ledger for informal Kenyan chamas (<strong>ChamaLedger</strong>), building semantic token budget limiters for LLM gateways (<strong>SemanticGate</strong>), or eliminating hotel double-booking through atomic concurrency locks (<strong>Twende Systems</strong>), I write code designed for reliability, auditability, and scale.
            </p>
            <p>
              Having completed the <strong>AWS AI/ML Scholars Program</strong> and advancing into the <strong>AWS AI/ML Nanodegree Scholarship</strong> for Future AI Programmers, I actively combine systems-level engineering with modern AI workflows including RAG, embeddings, and fine-tuning.
            </p>
          </div>

          {/* Reading & Continuous Learning */}
          <div className="reading-card">
            <div className="reading-header">
              <BookOpen size={16} className="text-purple" />
              <span className="reading-kicker">ENGINEERING MINDFRAME &amp; BOOKS</span>
            </div>
            <div className="books-list">
              <div className="book-item active">
                <span className="book-status">CURRENTLY READING</span>
                <strong>Atomic Habits</strong>
                <span className="book-author">James Clear</span>
              </div>
              <div className="book-item">
                <span className="book-status">FOUNDATIONAL</span>
                <strong>Designing Data-Intensive Applications</strong>
                <span className="book-author">Martin Kleppmann</span>
              </div>
              <div className="book-item">
                <span className="book-status">STUDIED</span>
                <strong>Clean Code &amp; The Pragmatic Programmer</strong>
                <span className="book-author">R. Martin / D. Thomas &amp; A. Hunt</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Column: Education, Training & Profile */}
        <div className="about-sidebar">
          {/* Education Card */}
          <div className="sidebar-card">
            <div className="sidebar-card-header">
              <GraduationCap size={18} className="text-purple" />
              <div>
                <h4 className="sidebar-card-title">Education</h4>
                <span className="sidebar-card-sub">Zetech University • Nairobi</span>
              </div>
            </div>
            <div className="education-detail">
              <div className="edu-degree">
                <strong>Diploma in Computer Science</strong>
                <span className="edu-years">2024 – 2026</span>
              </div>
              <p className="edu-coursework">
                <strong>Coursework:</strong> Data Structures &amp; Algorithms, Database Systems, Software Engineering, Computer Networks, Object-Oriented Programming.
              </p>
              <div className="final-project-pill">
                <span>Final Project: Twende Systems (Concurrency Booking Engine)</span>
              </div>
            </div>
          </div>

          {/* Quick Stats / Highlights */}
          <div className="sidebar-card">
            <div className="sidebar-card-header">
              <Target size={18} className="text-purple" />
              <div>
                <h4 className="sidebar-card-title">Current Focus</h4>
                <span className="sidebar-card-sub">Availability &amp; Goals</span>
              </div>
            </div>
            <ul className="focus-list">
              <li>
                <span className="focus-dot" />
                <span><strong>Target Roles:</strong> Backend Engineering &amp; AI Engineering Internships</span>
              </li>
              <li>
                <span className="focus-dot" />
                <span><strong>Location:</strong> Nairobi, Kenya (Open to Remote &amp; On-Site)</span>
              </li>
              <li>
                <span className="focus-dot" />
                <span><strong>Primary Stack:</strong> Java 21, Spring Boot 3, Python, PostgreSQL, Redis</span>
              </li>
              <li>
                <span className="focus-dot" />
                <span><strong>AI Focus:</strong> RAG Systems, Vector Search, SageMaker, LLM Cost Governance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
