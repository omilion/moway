import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpenCheck,
  CheckCircle2,
  ChevronRight,
  Handshake,
  Mail,
  Menu,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from 'lucide-react';

const services = [
  {
    icon: UsersRound,
    title: 'Incorporación de personas',
    text: 'Búsqueda, evaluación y selección por competencias para equipos que necesitan crecer con criterio.',
  },
  {
    icon: BookOpenCheck,
    title: 'Capacitación & entrenamiento OTEC',
    text: 'Experiencias presenciales, a distancia y blended, diseñadas a la medida de cada cultura organizacional.',
  },
  {
    icon: BarChart3,
    title: 'Consultoría organizacional',
    text: 'Diagnóstico, clima, cambio, indicadores, estructuras, perfiles y desempeño con foco en resultados.',
  },
  {
    icon: Handshake,
    title: 'Coaching ejecutivo & equipos',
    text: 'Acompañamiento para liderazgos, equipos de alto desempeño y conversaciones críticas.',
  },
];

const training = [
  'Liderazgo y gestión del cambio',
  'Comunicación efectiva y feedback',
  'Desarrollo de equipos de alto desempeño',
  'Negociación, influencia y storytelling',
  'Seguridad, salud ocupacional y emergencias',
  'Minería, construcción y operaciones críticas',
];

const consulting = [
  'Planificación estratégica y comercial',
  'Gestión de clima y cultura organizacional',
  'Detección de necesidades de capacitación',
  'Modelo de competencias y evaluación de desempeño',
  'Relacionamiento con comunidades',
  'Investigación y mediación en acoso laboral',
];

const programGroups = [
  {
    title: 'Transversales',
    items: [
      'Inducción organizacional',
      'Liderazgo y gestión del cambio',
      'Comunicación efectiva y reuniones con propósito',
      'Negociación, influencia y presentaciones de alto impacto',
      'Storytelling y formación de facilitadores internos',
      'Calidad de servicio interno y al cliente',
      'Gestión del desempeño, objetivos y feedback',
      'Calidad de vida, pausa activa y autocuidado',
      'Creatividad, innovación y outplacement',
    ],
  },
  {
    title: 'Minería & Construcción',
    items: [
      'Aversión al riesgo e hipobaria',
      'Manejo a la defensiva y vehículos 4x4',
      'Trabajo en altura física y espacios confinados',
      'Bloqueo, tarjetero y análisis de riesgos',
      'Uso y armado de andamios',
      'Trabajo en caliente y sustancias peligrosas',
      'Operación en planta minera de óxidos y sulfuros',
      'Operaciones en puerto de embarque de minerales',
      'Operadores de motoniveladora, retroexcavadora, excavadora y cargador frontal',
    ],
  },
  {
    title: 'Seguridad y Salud Ocupacional',
    items: [
      'Trabajos en altura física según NCh 1258',
      'Armado y desarme de andamios modulares',
      'Operaciones verticales industriales',
      'Rigger y operador pluma según Norma ASME B30',
      'Trabajo seguro con energía eléctrica',
      'Incendio y uso de equipos de extinción',
      'Soporte vital básico y uso de DEA',
      'Formación para comités paritarios',
      'Prevención de riesgos para supervisores SIGO-CODELCO',
    ],
  },
  {
    title: 'Emergencias y Salud',
    items: [
      'Formación y capacitación de brigadas de emergencias',
      'Control de emergencias industriales',
      'Primera respuesta ante materiales peligrosos',
      'Manejo de equipos de extinción',
      'Rescate y soporte vital básico con DEA',
      'Operaciones tácticas de rescate minero',
      'Operaciones tácticas de rescate en altura',
      'Liderazgo y trabajo en equipo',
      'Otros programas a requerimiento',
    ],
  },
];

const clientLogos = Array.from({ length: 19 }, (_, index) => `/assets/Imagen${index + 1}.png`);

const faqs = [
  {
    question: '¿Moway diseña programas a medida?',
    answer:
      'Sí. El trabajo parte con diagnóstico y acercamiento a la realidad de la organización para diseñar experiencias formativas, consultorías o intervenciones ajustadas a cada contexto.',
  },
  {
    question: '¿Trabajan con modalidad online y presencial?',
    answer:
      'Sí. Moway desarrolla cursos presenciales, a distancia y experiencias combinadas, usando plataformas como Moodle, Zoom, Teams u otras definidas por el cliente.',
  },
  {
    question: '¿La capacitación puede usar franquicia tributaria?',
    answer:
      'Sí. El material base indica operación OTEC y franquicia tributaria en modalidades de pre-contrato, contrato y post-contrato, según corresponda.',
  },
  {
    question: '¿Qué tipo de organizaciones atienden?',
    answer:
      'Empresas, instituciones y equipos que requieren fortalecer capital humano, liderazgo, seguridad, minería, construcción, clima, desempeño o desarrollo organizacional.',
  },
];

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [footerLogosBoosted, setFooterLogosBoosted] = useState(false);
  const footerCertificationsRef = useRef(null);

  useEffect(() => {
    const animated = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    animated.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateHeader = () => {
      setHeaderVisible(window.scrollY > 32 || window.location.hash !== '');
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    window.addEventListener('hashchange', updateHeader);
    return () => {
      window.removeEventListener('scroll', updateHeader);
      window.removeEventListener('hashchange', updateHeader);
    };
  }, []);

  useEffect(() => {
    if (!footerCertificationsRef.current) return undefined;

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setFooterLogosBoosted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(footerCertificationsRef.current);

    const updatePageEnd = () => {
      const page = document.documentElement;
      if (window.innerHeight + window.scrollY >= page.scrollHeight - 260) {
        setFooterLogosBoosted(true);
      }
    };

    updatePageEnd();
    window.addEventListener('scroll', updatePageEnd, { passive: true });
    window.addEventListener('resize', updatePageEnd);
    return () => {
      window.removeEventListener('scroll', updatePageEnd);
      window.removeEventListener('resize', updatePageEnd);
      observer.disconnect();
    };
  }, []);

  const closeNav = () => setNavOpen(false);

  return (
    <main>
      <header className={`site-header ${headerVisible || navOpen ? 'is-visible' : ''}`}>
        <a className="brand" href="#inicio" aria-label="Moway inicio">
          <img src="/assets/moway-logo-otec-cropped.png" alt="Moway Consultoría & Formación" />
        </a>
        <button
          className="nav-toggle"
          aria-expanded={navOpen}
          aria-label={navOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setNavOpen(value => !value)}
        >
          <Menu size={22} className="menu-icon" />
          <X size={22} className="close-icon" />
        </button>
        <nav className={`nav-links ${navOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
          <a href="#servicios" onClick={closeNav}>Servicios</a>
          <a href="#formacion" onClick={closeNav}>Formación</a>
          <a href="#confianza" onClick={closeNav}>Clientes</a>
          <a href="#qa" onClick={closeNav}>Q&A</a>
          <a href="#contacto" onClick={closeNav}>Contacto</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy" data-animate>
          <span className="eyebrow">
            <Sparkles size={16} /> Consultoría & Formación
          </span>
          <img className="hero-logo" src="/assets/moway-logo-otec-cropped.png" alt="Moway Consultoría & Formación" />
          <h1>Socios estratégicos en la búsqueda y desarrollo de tu capital humano.</h1>
          <p>
            Diseñamos soluciones customizadas para fortalecer competencias, transformar equipos y
            conectar el aprendizaje con resultados visibles en la organización.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#contacto">
              Hablemos <ArrowRight size={18} />
            </a>
            <a className="btn secondary" href="#servicios">
              Ver soluciones
            </a>
          </div>
        </div>
        <div className="hero-visual" data-animate>
          <img src="/assets/team-hands.webp" alt="Equipo uniendo manos en colaboración" />
          <div className="floating-note">
            <Award size={20} />
            <span>Experiencias a medida para equipos reales</span>
          </div>
        </div>
      </section>

      <section className="section intro" data-animate>
        <div className="section-kicker">Nosotros</div>
        <div className="intro-grid">
          <h2>Un equipo interdisciplinario para diagnosticar, diseñar e implementar cambios sustentables.</h2>
          <p>
            Trabajamos en relaciones estrechas y de largo plazo, entendiendo la realidad de cada
            cliente para crear intervenciones innovadoras, medibles y adaptadas a su contexto.
          </p>
        </div>
      </section>

      <section className="section services" id="servicios">
        <div className="section-heading" data-animate>
          <span className="section-kicker">Expertos en personas</span>
          <h2>Soluciones integradas para cada etapa del talento.</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title} data-animate style={{ '--delay': `${index * 80}ms` }}>
                <Icon size={26} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section split" id="formacion">
        <div className="split-media" data-animate>
          <img src="/assets/training-room.webp" alt="Personas participando en una instancia de formación" />
        </div>
        <div className="split-copy" data-animate>
          <span className="section-kicker">Herramientas de formación</span>
          <h2>Aprendizajes que se transfieren al puesto de trabajo.</h2>
          <p>
            Co-construimos experiencias presenciales, online y en plataformas como Moodle, Zoom o
            Teams, manteniendo interacción permanente entre facilitadores y participantes.
          </p>
          <ul className="check-list">
            {training.map(item => (
              <li key={item}>
                <CheckCircle2 size={18} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section consulting">
        <div className="section-heading compact" data-animate>
          <span className="section-kicker">Desarrollo organizacional</span>
          <h2>Diagnóstico profundo, intervenciones concretas.</h2>
          <p>
            Identificamos variables críticas para elevar competitividad, productividad y bienestar.
          </p>
        </div>
        <div className="consulting-layout">
          <div className="consulting-list" data-animate>
            {consulting.map(item => (
              <div className="consulting-row" key={item}>
                <ChevronRight size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="consulting-panel" data-animate>
            <img src="/assets/workshop-table.webp" alt="Mesa de trabajo con notebook y documentos" />
            <div className="panel-overlay">
              <ShieldCheck size={22} />
              <span>Cambios sustentables, medibles y adaptados a la cultura.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section programs" id="programas">
        <div className="section-heading" data-animate>
          <span className="section-kicker">Programas de capacitación</span>
          <h2>Oferta formativa para equipos, operaciones e industrias exigentes.</h2>
          <p>
            Programas adaptables a la realidad del cliente, con foco en transferencia al puesto de
            trabajo, seguridad, liderazgo y desempeño organizacional.
          </p>
        </div>
        <div className="program-grid">
          {programGroups.map((group, index) => (
            <article className="program-card" key={group.title} data-animate style={{ '--delay': `${index * 80}ms` }}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section trust" id="confianza">
        <div className="trust-copy" data-animate>
          <span className="section-kicker">Han confiado en nosotros</span>
          <h2>Experiencia con organizaciones exigentes y equipos diversos.</h2>
          <p>
            Moway ha desarrollado programas y consultorías para compañías, instituciones y aliados
            que requieren rigor técnico, flexibilidad y cercanía.
          </p>
        </div>
        <div className="client-wall" data-animate>
          {clientLogos.map((logo, index) => (
            <div className="client-logo" key={logo}>
              <img src={logo} alt={`Cliente Moway ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="section qa" id="qa">
        <div className="section-heading compact" data-animate>
          <span className="section-kicker">Q&A</span>
          <h2>Preguntas frecuentes antes de iniciar.</h2>
          <p>
            Respuestas rápidas para entender cómo trabaja Moway y qué tipo de soluciones puede
            construir con tu organización.
          </p>
        </div>
        <div className="faq-list" data-animate>
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <article className={`faq-item ${isOpen ? 'is-open' : ''}`} key={faq.question}>
                <button
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronRight size={20} />
                </button>
                <div className="faq-answer" id={`faq-answer-${index}`} hidden={!isOpen}>
                  <p>{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section cta" id="contacto">
        <div className="cta-inner" data-animate>
          <div>
            <span className="section-kicker">Contacto</span>
            <h2>Construyamos una solución para tu organización.</h2>
            <p>
              Agenda una conversación para evaluar necesidades de capacitación, consultoría o
              desarrollo de equipos.
            </p>
          </div>
          <div className="contact-grid">
            <a href="mailto:klarrain@moway.cl" className="contact-card">
              <Mail size={22} />
              <span>Karen Larraín</span>
              <strong>klarrain@moway.cl</strong>
            </a>
            <a href="mailto:vdonoso@moway.cl" className="contact-card">
              <Mail size={22} />
              <span>Viviana Donoso</span>
              <strong>vdonoso@moway.cl</strong>
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-top">
            <div className="footer-brand">
              <img src="/assets/moway-logo-otec-cropped.png" alt="Moway" />
              <p>
                Consultoría, formación y desarrollo organizacional para transformar capacidades en
                resultados visibles. OTEC con respaldo SENCE y certificación Icontec NCh 2728.
                OC-CER471157.
              </p>
            </div>
            <div className="footer-accreditations">
              <div
                ref={footerCertificationsRef}
                className={`footer-certifications ${footerLogosBoosted ? 'is-boosted' : ''}`}
                aria-label="Certificaciones y acreditaciones"
              >
                <img className="footer-logo-sence" src="/assets/logo-sence.png" alt="SENCE" />
                <img className="footer-logo-icontec" src="/assets/logo-icontec.webp" alt="Icontec NCh 2728 OC-CER471157" />
              </div>
            </div>
          </div>
          <div className="footer-bottom-grid">
            <div className="footer-contact">
              <span className="footer-label">Conversemos</span>
              <a href="mailto:klarrain@moway.cl">klarrain@moway.cl</a>
              <a href="mailto:vdonoso@moway.cl">vdonoso@moway.cl</a>
              <a href="https://www.moway.cl">www.moway.cl</a>
            </div>
            <nav className="footer-nav" aria-label="Servicios">
              <span className="footer-label">Servicios</span>
              <a href="#servicios">Incorporación</a>
              <a href="#formacion">Capacitación OTEC</a>
              <a href="#confianza">Clientes</a>
            </nav>
            <nav className="footer-nav" aria-label="Sitio">
              <span className="footer-label">Sitio</span>
              <a href="#inicio">Inicio</a>
              <a href="#qa">Q&A</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </div>
          <div className="footer-legal">
            <span>© 2026 Moway Consultoría & Formación. Todos los derechos reservados.</span>
            <span>Capital humano, capacitación OTEC y desarrollo organizacional.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
