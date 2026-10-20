import React, { useState, useMemo } from 'react'
import {
  ArrowUpRight,
  ExternalLink
} from 'lucide-react'
import { ProjectCategory, projectsData } from '../data/projectsData'

const categories: ProjectCategory[] = ['All', 'Backend', 'AI/ML', 'APIs']

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All')

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projectsData
    }
    return projectsData.filter((p) => p.categories.includes(selectedCategory as any))
  }, [selectedCategory])

  return (
    <section id="work" className="content-section" aria-labelledby="projects-heading">
      <div className="section-header">
        <h2 id="projects-heading" className="section-title">
          Selected work
        </h2>
        <p className="section-description">
          From backend infrastructure and financial ledgers to AI-powered applications, here are key systems and case studies I've built.
        </p>
      </div>

      <div className="filter-pill-row" role="tablist" aria-label="Filter work by domain">
        {categories.map((cat) => {
          const count =
            cat === 'All'
              ? projectsData.length
              : projectsData.filter((p) => p.categories.includes(cat as any)).length
          const isActive = selectedCategory === cat

          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              className={`filter-pill ${isActive ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat} <span className="pill-count">({count})</span>
            </button>
          )
        })}
      </div>

      <div className="project-list">
        {filteredProjects.map((project) => (
          <article key={project.id} className="project-entry">
            <div className="project-entry-top">
              <h3 className="project-heading">
                {project.title} <span className="title-sep">—</span> <span className="project-sub">{project.subtitle}</span>
              </h3>
              <span className="project-context">{project.context}</span>
            </div>

            <p className="project-body-text">{project.description}</p>

            <div className="project-tech-tags" aria-label="Technologies used">
              {project.technologies.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="action-link"
                aria-label={`View ${project.title} repository on GitHub`}
              >
                <span>View repository</span>
                <ArrowUpRight size={14} />
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="action-link live"
                  aria-label={`Open live deployment of ${project.title}`}
                >
                  <span>Live demo</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
