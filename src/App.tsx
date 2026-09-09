import { useState } from 'react';
import { blogPosts, howItWorks, navItems, reasons, services } from './data';

const businessInfo = {
  name: 'Umerzai Printing Press',
  phoneDisplay: '03333455436',
  phoneHref: 'tel:+923333455436',
  whatsappHref: 'https://wa.me/923333455436',
  email: 'abs@gmail.com',
  emailHref: 'mailto:abs@gmail.com',
  location: 'Main Bazar, Umerzai',
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const openWhatsApp = () => window.open(businessInfo.whatsappHref, '_blank', 'noopener,noreferrer');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormState((previous) => ({ ...previous, [name]: value }));
    setFormErrors((previous) => ({ ...previous, [name]: '' }));
    if (submitStatus) setSubmitStatus(null);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formState.name.trim()) errors.name = 'Please enter your name.';
    if (!formState.phone.trim()) errors.phone = 'Please enter your phone number.';
    if (!formState.email.trim()) errors.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!formState.service.trim()) errors.service = 'Please select a service.';
    if (!formState.message.trim()) errors.message = 'Please share your message.';

    return errors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSubmitStatus({ type: 'error', message: 'Please fix the highlighted fields and try again.' });
      return;
    }

    setSubmitStatus({
      type: 'success',
      message: 'Your message has been prepared. Please send it via WhatsApp or email to complete your request.',
    });
    setFormErrors({});
    setFormState({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: '',
    });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: businessInfo.name,
            image:
              'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
            description:
              'Umerzai Printing Press provides high-quality printing services in Umerzai, including business card printing, banner printing, brochure printing, flyer printing, poster printing, and invitation card printing.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: businessInfo.location,
              addressLocality: 'Umerzai',
              addressRegion: 'Khyber Pakhtunkhwa',
              addressCountry: 'PK',
            },
            telephone: '+923333455436',
            email: businessInfo.email,
            areaServed: 'Umerzai',
            url: 'https://umerzai-printing-press.local/',
            sameAs: ['https://wa.me/923333455436'],
          }),
        }}
      />

      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand" aria-label="Umerzai Printing Press home">
            <span className="brand-mark">UP</span>
            <span>Umerzai Printing Press</span>
          </a>

          <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="btn btn-primary btn-small" href={businessInfo.whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp Us
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Local printing press in Umerzai</div>
              <h1>High-Quality Printing Services in Umerzai</h1>
              <p>
                Professional design and printing services for businesses, events, schools, and individuals.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href={businessInfo.whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp Us
                </a>
                <a className="btn btn-secondary" href={businessInfo.phoneHref}>
                  Call Now
                </a>
                <a className="btn btn-ghost" href="#services">
                  View Services
                </a>
              </div>
              <ul className="hero-points">
                <li>5+ years experience</li>
                <li>Professional service</li>
                <li>Fast support</li>
              </ul>
            </div>

            <div className="hero-visual" aria-label="Printing materials and design services illustration">
              <div className="visual-card main-card">
                <div className="paper-stack">
                  <span className="paper paper-one" />
                  <span className="paper paper-two" />
                  <span className="paper paper-three" />
                </div>
              </div>
              <div className="visual-card badge-card">
                <span className="badge-pill">Premium Prints</span>
                <strong>Business Cards</strong>
                <small>Brochures • Banners • Flyers</small>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow dark">Our Services</span>
              <h2>Professional Printing for Every Need</h2>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="service-icon" aria-hidden="true">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="card-actions">
                    <a className="btn btn-ghost btn-small" href="#contact">
                      Get a Quote
                    </a>
                    <a className="btn btn-primary btn-small" href={businessInfo.whatsappHref} target="_blank" rel="noreferrer">
                      WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt-bg">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow dark">Why Choose Us</span>
              <h2>Why Choose Us?</h2>
            </div>
            <div className="reasons-grid">
              {reasons.map((item) => (
                <div key={item.title} className="reason-card">
                  <div className="reason-icon" aria-hidden="true">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <div className="about-copy">
              <span className="eyebrow dark">About Us</span>
              <h2>Professional Printing Press Serving Umerzai</h2>
              <p>
                We are a professional local printing press serving customers in Umerzai and surrounding areas. With more than 5 years of experience, we have worked with different clients and provided high-quality printing services for businesses, events, organizations, and individuals.
              </p>
              <p>
                Our goal is to provide high-quality printing, professional designs, reliable service, affordable solutions, and customer satisfaction.
              </p>
              <ul className="feature-list">
                <li>High-quality printing</li>
                <li>Professional designs</li>
                <li>Reliable service</li>
                <li>Affordable solutions</li>
                <li>Customer satisfaction</li>
              </ul>
              <a className="btn btn-primary" href="#contact">
                Need Printing? Contact Us Today
              </a>
            </div>

            <div className="about-visual">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
                alt="Printing press setup with paper and design materials"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow dark">How It Works</span>
              <h2>Simple Process, Quality Results</h2>
            </div>
            <div className="process-grid">
              {howItWorks.map((step, index) => (
                <div key={step.title} className="process-card">
                  <span className="step-number">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="section alt-bg">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow dark">Blog</span>
              <h2>Printing Tips & Business Ideas</h2>
            </div>
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <article key={post.id} className="blog-card">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <div className="blog-body">
                    <span className="blog-date">{post.date}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <a href={`/blog/${post.slug}`} className="text-link">
                      Read More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-details">
              <span className="eyebrow dark">Contact Us</span>
              <h2>Let’s Create Your Next Print</h2>
              <div className="contact-list">
                <div>
                  <strong>WhatsApp:</strong>
                  <a href={businessInfo.whatsappHref} target="_blank" rel="noreferrer">
                    03333455436
                  </a>
                </div>
                <div>
                  <strong>Email:</strong>
                  <a href={businessInfo.emailHref}>{businessInfo.email}</a>
                </div>
                <div>
                  <strong>Location:</strong>
                  <span>{businessInfo.location}</span>
                </div>
              </div>

              <div className="cta-row vertical-mobile">
                <a className="btn btn-primary" href={businessInfo.whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp Us
                </a>
                <a className="btn btn-secondary" href={businessInfo.phoneHref}>
                  Call Now
                </a>
              </div>

              <div className="map-box" aria-label="Map location for Main Bazar, Umerzai">
                <iframe
                  title="Map of Main Bazar, Umerzai"
                  src="https://www.google.com/maps?q=Main%20Bazar%20Umerzai&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="contact-form-wrap">
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <label>
                    Name
                    <input type="text" name="name" value={formState.name} onChange={handleChange} aria-invalid={Boolean(formErrors.name)} />
                    {formErrors.name && <span className="field-error">{formErrors.name}</span>}
                  </label>
                </div>

                <div className="form-row double">
                  <label>
                    Phone Number
                    <input type="tel" name="phone" value={formState.phone} onChange={handleChange} aria-invalid={Boolean(formErrors.phone)} />
                    {formErrors.phone && <span className="field-error">{formErrors.phone}</span>}
                  </label>
                  <label>
                    Email
                    <input type="email" name="email" value={formState.email} onChange={handleChange} aria-invalid={Boolean(formErrors.email)} />
                    {formErrors.email && <span className="field-error">{formErrors.email}</span>}
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    Service Required
                    <select name="service" value={formState.service} onChange={handleChange} aria-invalid={Boolean(formErrors.service)}>
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.title} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                    {formErrors.service && <span className="field-error">{formErrors.service}</span>}
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    Message
                    <textarea name="message" rows={5} value={formState.message} onChange={handleChange} aria-invalid={Boolean(formErrors.message)} />
                    {formErrors.message && <span className="field-error">{formErrors.message}</span>}
                  </label>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Submit
                </button>

                {submitStatus && (
                  <div className={`form-status ${submitStatus.type}`} role="status" aria-live="polite">
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>Umerzai Printing Press</h3>
            <p>High-quality printing services in Main Bazar, Umerzai.</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li>Card Design & Printing</li>
              <li>Brochure Printing</li>
              <li>Business Cards</li>
              <li>Banner Printing</li>
              <li>Flyer Printing</li>
              <li>Poster Printing</li>
              <li>Invitation Cards</li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={businessInfo.phoneHref}>{businessInfo.phoneDisplay}</a>
              </li>
              <li>
                <a href={businessInfo.emailHref}>{businessInfo.email}</a>
              </li>
              <li>{businessInfo.location}</li>
            </ul>
            <div className="footer-icons">
              <a href={businessInfo.whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                💬
              </a>
              <a href={businessInfo.phoneHref} aria-label="Call now">
                📞
              </a>
              <a href={businessInfo.emailHref} aria-label="Email">
                ✉️
              </a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 Umerzai Printing Press. All rights reserved.</p>
        </div>
      </footer>

      <a className="floating-whatsapp" href={businessInfo.whatsappHref} target="_blank" rel="noreferrer" aria-label="Open WhatsApp chat">
        WhatsApp
      </a>
    </>
  );
}

export default App;
