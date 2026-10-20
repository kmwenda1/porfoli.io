import React, { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles
} from 'lucide-react'

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const email = 'barackakoome@gmail.com'
  const phone = '+254 720 549 139'

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text)
    if (type === 'email') {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open default mail client with encoded parameters
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailtoUrl
    setFormSubmitted(true)
  }

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="section-ambient-glow" aria-hidden="true" />

      <div className="section-header-wrap">
        <p className="eyebrow">
          <span>05</span> GET IN TOUCH
        </p>
        <h2 id="contact-heading" className="projects-headline">
          Let's build something<br />
          <span>reliable together.</span>
        </h2>
        <p className="projects-lead">
          I am actively seeking backend developer and AI/ML engineering internships or junior roles. Whether you have an opportunity or want to discuss systems design, I'd love to hear from you.
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Info & Details */}
        <div className="contact-info-col">
          <div className="availability-card">
            <span className="availability-pulse-dot" />
            <div>
              <strong>Open to Internships &amp; Roles</strong>
              <p>Available for backend engineering, applied AI, or software development positions.</p>
            </div>
          </div>

          <div className="contact-cards">
            {/* Email Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <Mail size={18} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">EMAIL ADDRESS</span>
                <a href={`mailto:${email}`} className="contact-card-value">
                  {email}
                </a>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={() => copyToClipboard(email, 'email')}
                aria-label="Copy email address"
                title="Copy email"
              >
                {copiedEmail ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <Phone size={18} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">PHONE / WHATSAPP</span>
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="contact-card-value">
                  {phone}
                </a>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={() => copyToClipboard(phone, 'phone')}
                aria-label="Copy phone number"
                title="Copy phone"
              >
                {copiedPhone ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <MapPin size={18} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">LOCATION</span>
                <span className="contact-card-value">Nairobi, Kenya (UTC+3)</span>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="contact-socials">
            <span className="social-kicker">PROFILES:</span>
            <div className="social-buttons">
              <a
                href="https://github.com/kmwenda1"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href="https://www.linkedin.com/in/baracka-koome-52b834412/"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Direct Message Form */}
        <div className="contact-form-wrap">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <MessageSquare size={16} className="text-purple" />
              <span>SEND A DIRECT MESSAGE</span>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Your Email</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                required
                placeholder="Internship opportunity / Project collaboration"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                rows={4}
                required
                placeholder="Hi Baraka, we're looking for a backend / AI engineer..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="button button-primary submit-btn">
              <span>Send Message</span>
              <Send size={14} />
            </button>

            {formSubmitted && (
              <p className="form-feedback">
                Mail client opened! If it didn't trigger automatically, please email me directly at{' '}
                <a href={`mailto:${email}`}>{email}</a>.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
