import './styles/index.css'
import './styles/homepage.css'
import heroImage from './assets/teacherstudents.png'
import studentsPresentingImage from './assets/studentspresenting.png'

// Dation Campus Website
// Main JavaScript Entry Point — Homepage

// Social icons SVG
const socialIcons = {
  instagram: `<svg viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`
};

// Initialize the application
const BASE = import.meta.env.BASE_URL;
function init() {
  renderHomePage();
}

// Render the homepage
function renderHomePage() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <!-- Header -->
    <header class="header">
      <a href="${BASE}" class="header__logo">Dation Campus</a>
      <nav class="header__nav" id="mainNav">
        <a href="${BASE}" class="header__nav-link active">Home</a>
        <a href="${BASE}team.html" class="header__nav-link">Equipo</a>
        <a href="${BASE}cursos.html" class="header__nav-link">Cursos</a>
        <a href="${BASE}contact.html" class="header__nav-link">Contacto</a>
      </nav>
      <button class="header__hamburger" id="hamburgerBtn" aria-label="Abrir menú">
        <span></span><span></span><span></span>
      </button>
    </header>
    
    <!-- Hero Section -->
    <section class="hero">
      <div class="container hero__container">
        <div class="hero__content">
          <h1 class="hero__title">
            Prepara tu <span class="accent">futuro</span><br>
            con inteligencia artificial
          </h1>
          <p class="hero__subtitle">
            Cursos diseñados para estudiantes de bachillerato: domina 
            las herramientas de IA y llega a la universidad con 
            una ventaja real en productividad y aprendizaje.
          </p>
          <a href="#beneficios" class="btn btn-primary">DESCUBRE MÁS</a>
        </div>
        <div class="hero__illustration">
          <img src="${heroImage}" alt="Profesor y estudiantes aprendiendo inteligencia artificial" class="hero__image" />
        </div>
      </div>
    </section>
    
    <!-- Intro Section -->
    <section id="beneficios" class="intro-section">
      <div class="container">
        <h2 class="intro-section__title">
          La <span class="accent">ventaja</span> que necesitas
        </h2>
        <p class="intro-section__text">
          La inteligencia artificial está transformando la educación. 
          Los estudiantes que dominan estas herramientas hoy serán los 
          profesionales más preparados del mañana. En Dation Campus, 
          te damos las habilidades prácticas que marcan la diferencia.
        </p>
        <a href="#habilidades" class="btn btn-primary">¡EMPECEMOS!</a>
        <div class="intro-section__illustration">
          <img src="${studentsPresentingImage}" alt="Estudiantes presentando" class="hero__image" style="max-width: 650px;" />
        </div>
      </div>
    </section>
    
    <!-- Skills Steps -->
    <section id="habilidades" class="process-step">
      <div class="container process-step__container">
        <div class="process-step__content">
          <span class="process-step__number">01</span>
          <h2 class="process-step__title">
            Asistencia en los <span class="accent">estudios</span>
          </h2>
          <p class="process-step__text">
            Aprende a usar la IA como tu asistente académico: 
            resúmenes inteligentes, investigación acelerada, 
            redacción asistida y comprensión profunda de temas complejos.
          </p>
          <a href="#paso2" class="btn btn-primary">SIGUIENTE</a>
        </div>
        <div class="process-step__illustration">
          <div class="illustration-placeholder">
            <div class="planet planet--1"></div>
            <div class="planet planet--2"></div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="paso2" class="process-step process-step--gradient">
      <div class="container process-step__container process-step__container--reverse">
        <div class="process-step__content">
          <span class="process-step__number">02</span>
          <h2 class="process-step__title">
            Metas <span class="accent">académicas</span>
          </h2>
          <p class="process-step__text">
            Usa herramientas de IA para planificar tu camino 
            universitario, identificar tus fortalezas y establecer 
            objetivos claros y alcanzables.
          </p>
          <a href="#paso3" class="btn btn-primary">SIGUIENTE</a>
        </div>
        <div class="process-step__illustration">
          <div class="illustration-placeholder" style="background: rgba(255,255,255,0.1);">
            <div class="planet planet--1"></div>
            <div class="planet planet--2"></div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="paso3" class="process-step process-step--alt">
      <div class="container process-step__container">
        <div class="process-step__content">
          <span class="process-step__number">03</span>
          <h2 class="process-step__title">
            <span class="accent">Automatización</span> inteligente
          </h2>
          <p class="process-step__text">
            Deja de perder tiempo en tareas repetitivas. Aprende 
            a automatizar procesos académicos y libera tu tiempo 
            para lo que realmente importa.
          </p>
          <a href="#paso4" class="btn btn-primary">SIGUIENTE</a>
        </div>
        <div class="process-step__illustration">
          <div class="illustration-placeholder">
            <div class="planet planet--1"></div>
            <div class="planet planet--2"></div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="paso4" class="process-step">
      <div class="container process-step__container process-step__container--reverse">
        <div class="process-step__content">
          <span class="process-step__number">04</span>
          <h2 class="process-step__title">
            Análisis de <span class="accent">datos</span>
          </h2>
          <p class="process-step__text">
            Domina el análisis de datos con IA: visualización, 
            interpretación y presentación de información de manera 
            clara y profesional.
          </p>
          <a href="#paso5" class="btn btn-outline">SIGUIENTE</a>
        </div>
        <div class="process-step__illustration">
          <div class="illustration-placeholder">
            <div class="planet planet--1"></div>
            <div class="planet planet--2"></div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="paso5" class="process-step process-step--alt">
      <div class="container process-step__container">
        <div class="process-step__content">
          <span class="process-step__number">05</span>
          <h2 class="process-step__title">
            Proyectos <span class="accent">personales</span>
          </h2>
          <p class="process-step__text">
            Desarrolla aplicaciones simples y útiles con ayuda de IA 
            que puedes integrar en tu vida diaria universitaria: 
            desde organizadores hasta herramientas de estudio personalizadas.
          </p>
          <a href="${BASE}cursos.html" class="btn btn-primary">VER CURSOS</a>
        </div>
        <div class="process-step__illustration">
          <div class="illustration-placeholder">
            <div class="planet planet--1"></div>
            <div class="planet planet--2"></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2 class="cta-section__title">¿Listo para comenzar?</h2>
        <p class="cta-section__text">
          Potencia tu futuro universitario: solicita información 
          sobre nuestros cursos y descubre cómo la IA puede 
          transformar tu experiencia en la universidad.
        </p>
        <a href="${BASE}contact.html" class="btn btn-primary">SOLICITAR INFORMACIÓN</a>
      </div>
    </section>
    
    <!-- Footer -->
    <footer class="footer">
      <div class="container footer__container">
        <a href="${BASE}" class="footer__logo">Dation Campus</a>
        <div class="footer__info">
          <p>Educación en Inteligencia Artificial</p>
          <p><a href="mailto:info@dationcampus.com">info@dationcampus.com</a></p>
        </div>
        <div class="footer__social">
          <a href="#" class="footer__social-link" aria-label="Instagram">
            ${socialIcons.instagram}
          </a>
          <a href="#" class="footer__social-link" aria-label="Facebook">
            ${socialIcons.facebook}
          </a>
          <a href="#" class="footer__social-link" aria-label="LinkedIn">
            ${socialIcons.linkedin}
          </a>
          <a href="#" class="footer__social-link" aria-label="WhatsApp">
            ${socialIcons.whatsapp}
          </a>
        </div>
        <div class="footer__links">
          <a href="${BASE}privacy.html">Política de Privacidad</a>
          <a href="${BASE}cookies.html">Política de Cookies</a>
        </div>
      </div>
    </footer>
  `;

  // Mobile hamburger menu
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mainNav = document.getElementById('mainNav');
  if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      mainNav.classList.toggle('open');
    });
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', init);
