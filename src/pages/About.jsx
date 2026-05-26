import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/shared/SEO';
import SectionHeader from '../components/shared/SectionHeader';
import Button from '../components/shared/Button';

const teamMembers = [
  {
    name: 'Chaitanya Kulkarni',
    role: 'Co-Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: 'A visionary corporate strategist and experiential pioneer with 18+ years of legacy. Former Director of Operations for premium global events groups, Chaitanya co-founded Zylo in 2011 to bring scale and absolute precision to corporate events.',
    traits: ['Corporate Strategy', 'Scale & Precision'],
    linkedin: '#'
  },
  {
    name: 'Chandrika Ganji',
    role: 'Co-Founder & Creative Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'A highly acclaimed spatial designer and luxury brand architect. Chandrika transforms physical environments into breathtaking, immersive sensory brand spaces, leading Zylo\'s experiential creative wing.',
    traits: ['Spatial Architect', 'Luxury Design'],
    linkedin: '#'
  },
  {
    name: 'Arun Mehta',
    role: 'Operations Head',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'Logistics genius and master of AV production who ensures that Zylo\'s complex staging and mega-scale corporate logistics are executed with flawless precision.',
    traits: ['AV Production', 'Logistics Master'],
    linkedin: '#'
  },
  {
    name: 'Neha Patel',
    role: 'Client Relations',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'The heartbeat of our client relations, Neha manages key corporate accounts for over 15 Fortune 500 brands, translating corporate objectives into flawless execution plans.',
    traits: ['Client Success', 'Enterprise Lead'],
    linkedin: '#'
  }
];

const awards = [
  {
    num: '01',
    title: 'Best Corporate Event Company — South India 2024',
    desc: 'Awarded by the Event & Entertainment Management Association (EEMA) at their annual conclave in Mumbai.'
  },
  {
    num: '02',
    title: 'ISO 9001:2015 Certified — Event Management Services',
    desc: 'Certified for our quality management systems across event planning, production, and post-event services.'
  },
  {
    num: '03',
    title: 'Top 10 Event Companies in India — EventFaqs 2023',
    desc: 'Featured in EventFaqs Media\'s prestigious annual ranking of India\'s leading event management companies.'
  },
  {
    num: '04',
    title: '4.9★ Google Rating — 320+ Verified Reviews',
    desc: 'Consistently rated 5 stars by clients across all event categories for quality, professionalism, and creativity.'
  },
  {
    num: '05',
    title: 'Preferred Vendor — 15+ Fortune 500 Companies',
    desc: 'Empanelled as the preferred event partner by leading Indian and multinational corporations.'
  }
];

export default function About() {
  return (
    <>
      <SEO
        title="Our Story — Premium Experiential Design Since 2011 | Zylo Events"
        description="Learn about Zylo Events — the corporate and experiential events wing of Alankaran, delivering premium corporate events, conferences, and brand activations since 2011."
      />

      <main className="about-page">
        {/* Inner Hero */}
        <section
          className="inner-hero"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80')` }}
        >
          <div className="inner-hero-overlay"></div>
          <div className="container inner-hero-content">
            <div className="hero-badge animate-fade-up">
              <span className="badge-dot"></span> Premium Corporate &amp; Experiential Specialists
            </div>
            <h1 className="animate-fade-up">
              About <span style={{ color: 'var(--brand, #3B82F6)' }}>Zylo Events</span>
            </h1>
            <p className="animate-fade-up">
              Crafting extraordinary experiential events since 2011 — powered by the legacy and creative vision of Alankaran.
            </p>
            <div className="inner-hero-breadcrumb animate-fade-up">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>About</span>
            </div>

            {/* Premium Experiential Stats Strip */}
            <div className="about-hero-stats animate-fade-up">
              <div className="about-stat-item">
                <strong>2011</strong>
                <span>Established</span>
              </div>
              <div className="about-stat-divider"></div>
              <div className="about-stat-item">
                <strong>800+</strong>
                <span>Events Designed</span>
              </div>
              <div className="about-stat-divider"></div>
              <div className="about-stat-item">
                <strong>200+</strong>
                <span>Global Brands</span>
              </div>
              <div className="about-stat-divider"></div>
              <div className="about-stat-item">
                <strong>Pan-India</strong>
                <span>Operations</span>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="story-section section-pad-lg">
          <div className="container story-grid">
            <div className="reveal">
              <span className="section-tag">Our Story &amp; Legacy</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Leading the Corporate{' '}
                <span style={{ color: 'var(--brand)' }}>Experiential Revolution</span>
              </h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '16px', lineHeight: '1.75' }}>
                <strong>Incorporated in 2011</strong>, Zylo Events was established with a singular vision: to bridge the gap between heavy corporate logistics and artistic brand storytelling. Founded by corporate strategist <strong>Chaitanya Kulkarni</strong> and later joined by luxury spatial designer <strong>Chandrika Ganji</strong>, Zylo was conceptualized as the specialized corporate and experiential events wing under the illustrious <strong>Alankaran</strong> parent banner.
              </p>
              <p style={{ color: 'var(--text-light)', marginBottom: '16px', lineHeight: '1.75' }}>
                Over the past 15 years, Zylo has grown from a boutique setup into a multi-city experiential events powerhouse. Powered by Alankaran's deep-rooted design legacy and high-end production yards, Zylo has successfully delivered over 800 premium events across India, spanning corporate conferences, brand activations, custom experiential installations, product launches, trade shows, and high-level corporate retreats.
              </p>
              <p style={{ color: 'var(--text-light)', marginBottom: '28px', lineHeight: '1.75' }}>
                Our Brand Philosophy revolves around "experiential architecture"—the belief that every corporate gathering should be an immersive, sensory-rich brand story. From our headquarters in Hyderabad to regional offices in Mumbai and Delhi, we combine ISO 9001 certified execution quality with groundbreaking creative production to serve the world's most prestigious brands.
              </p>
              <div className="founders-quote-box" style={{ borderLeft: '3px solid var(--brand)', paddingLeft: '20px', marginBottom: '28px', fontStyle: 'italic' }}>
                <p style={{ color: 'var(--white)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '8px' }}>
                  "We don't just organize events; we construct high-value spatial environments where brand stories come alive, forging real human connections."
                </p>
                <cite style={{ color: 'var(--brand)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  — Chaitanya &amp; Chandrika, Founders
                </cite>
              </div>
              <Button to="/contact" variant="gold">
                Work With Us →
              </Button>
            </div>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                alt="Zylo Events team collaboration"
                loading="lazy"
                className="story-img"
                style={{ borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              />
              <div className="alankaran-badge-card" style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', position: 'relative' }}>
                <h4 style={{ color: 'var(--white)', marginBottom: '8px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--brand)', fontSize: '1.2rem' }}>✦</span> The Alankaran Connection
                </h4>
                <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', lineHeight: '1.6' }}>
                  As the dedicated corporate and experiential events wing of Alankaran, Zylo Events leverages the immense fabrication yards, direct logistics networks, and unparalleled design legacy of South India's premium events empire.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values */}
        <section className="section-pad-lg mission-vision-section">
          <div className="container">
            <div className="section-header reveal" style={{ marginBottom: '48px' }}>
              <span className="section-tag">What Drives Us</span>
              <h2 className="section-title white">
                Mission, Vision &amp; <span style={{ color: '#BAE6FD' }}>Values</span>
              </h2>
            </div>
            <div className="mission-vision-grid reveal">
              <div className="mv-card">
                <div className="mv-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To deliver world-class corporate and experiential events that evoke emotional resonance, drive brand loyalty, and deliver absolute operational perfection, carrying forward Alankaran's creative pedigree.
                </p>
              </div>
              <div className="mv-card">
                <div className="mv-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To be recognized as India's leading experiential marketing and corporate production authority, setting global benchmarks in technical execution, artistic innovation, and sustainable premium event management.
                </p>
              </div>
              <div className="mv-card">
                <div className="mv-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h3>Our Core Values</h3>
                <p style={{ fontSize: '0.9rem', textAlign: 'left', margin: '0' }}>
                  <strong>Artistry & Innovation:</strong> We believe spatial design is a brand’s greatest storyteller.<br/>
                  <strong>Meticulous Execution:</strong> Flawless logistics, technical operations, and support.<br/>
                  <strong>Unwavering Integrity:</strong> Transparent corporate billing, safety, and excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-pad-lg bg-dark" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="container">
            <SectionHeader
              tag="Leadership &amp; Vision"
              title={<>Leadership Behind <span style={{ color: 'var(--brand)' }}>Extraordinary Events</span></>}
              subtitle="Our executive committee brings together industry-leading operations strategy, luxury spatial design, and world-class event production to deliver unparalleled brand experiences across India."
            />

            <div className="leadership-grid reveal">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="leadership-card"
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--x', `${x}px`);
                    card.style.setProperty('--y', `${y}px`);
                  }}
                >
                  <div className="avatar-container">
                    <div className="avatar-ring"></div>
                    <div className="avatar-image-wrapper">
                      <img
                        src={member.image}
                        alt={`${member.name}, ${member.role}`}
                        loading="lazy"
                        className="avatar-image"
                      />
                    </div>
                  </div>
                  <h3 className="leader-name">{member.name}</h3>
                  <span className="leader-role">{member.role}</span>
                  <div className="leader-traits">
                    {member.traits.map((trait, tIdx) => (
                      <span key={tIdx} className="trait-tag">
                        {trait}
                      </span>
                    ))}
                  </div>
                  <p className="leader-bio">{member.bio}</p>
                  <div className="leader-socials">
                    <a
                      href={member.linkedin}
                      className="leader-social-btn"
                      aria-label={`${member.name} LinkedIn Profile`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition / Awards */}
        <section className="section-pad-lg awards-section">
          <div className="container">
            <SectionHeader
              tag="Recognition"
              title={<>Awards &amp; <span style={{ color: 'var(--brand)' }}>Recognition</span></>}
              subtitle="Our work has been recognised by the industry's most prestigious organisations."
            />

            <div className="awards-list reveal">
              {awards.map((award, idx) => (
                <div key={idx} className="award-item">
                  <div className="award-num">{award.num}</div>
                  <div>
                    <h4>{award.title}</h4>
                    <p>{award.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section
          className="cta-banner"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          aria-label="Call to action"
        >
          <div className="cta-banner-overlay"></div>
          <div className="container cta-banner-content reveal">
            <h2>Where Corporate Events<br />Become Experiential Milestones</h2>
            <p>Let's discuss your next brand activations, conferences, or spatial installations. Connect with our experiential strategy leads today.</p>
            <Button to="/contact" variant="gold" size="lg">
              Get in Touch →
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
