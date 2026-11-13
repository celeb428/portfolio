/* ============================================
   Caleb Ngugi Mburu — Portfolio Scripts
   Particles (polygons + mesh), interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initNav();
  initTyping();
  initProjectFilters();
  initReveal();
  initSkillBars();
  initActiveLink();
  initContactForm();
});

/* ---- Particles.js : connected polygons / triangular mesh ---- */
function initParticles() {
  if (typeof particlesJS === 'undefined') {
    console.warn('particles.js not loaded');
    return;
  }

  particlesJS('particles-js', {
    particles: {
      number: {
        value: 70,
        density: { enable: true, value_area: 900 }
      },
      color: { value: '#19db9c' },
      shape: {
        type: 'polygon',
        stroke: { width: 0, color: '#000000' },
        polygon: { nb_sides: 5 }          // pentagons — clearly visible polygons
      },
      opacity: {
        value: 0.45,
        random: true,
        anim: { enable: true, speed: 0.6, opacity_min: 0.15, sync: false }
      },
      size: {
        value: 3.5,
        random: true,
        anim: { enable: true, speed: 2.5, size_min: 0.8, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 160,
        color: '#19db9c',
        opacity: 0.22,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.4,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: 'window',   /* works even when canvas has pointer-events:none */
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        grab: {
          distance: 180,
          line_linked: { opacity: 0.65 }
        },
        push: { particles_nb: 4 },
        repulse: { distance: 120, duration: 0.4 }
      }
    },
    retina_detect: true
  });
}

/* ---- Mobile navigation ---- */
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const close = document.getElementById('nav-close');
  const menu = document.getElementById('nav-menu');
  const links = document.querySelectorAll('.nav__link');

  if (toggle) {
    toggle.addEventListener('click', () => menu.classList.add('show'));
  }
  if (close) {
    close.addEventListener('click', () => menu.classList.remove('show'));
  }
  links.forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('show'));
  });
}

/* ---- Typing effect for headline ---- */
function initTyping() {
  const el = document.querySelector('.typed-text');
  if (!el) return;

  const phrases = [
    'Building Ideas Into Digital Experiences.',
    'Learning by building real projects.',
    'Turning curiosity into code.'
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 70;

  function type() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 35;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 70;
    }

    if (!isDeleting && charIndex === current.length) {
      typeSpeed = 2200; // pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  // Start after a short delay so reveal can settle
  setTimeout(type, 800);
}

/* ---- Project filters ---- */
function initProjectFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
}

/* ---- Scroll reveal ---- */
function initReveal() {
  const elements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve after reveal for performance
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

/* ---- Animate skill bars when in view ---- */
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar__fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach(bar => observer.observe(bar));
}

/* ---- Active nav link on scroll ---- */
function initActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  function onScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const height = section.offsetHeight;
      const top = section.offsetTop - 100;
      const id = section.getAttribute('id');

      if (scrollY > top && scrollY <= top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active-link');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active-link');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---- Contact form: submit to Formspree (sends email directly) ---- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const status = document.getElementById('form-status');
  const submitBtn = document.getElementById('contact-submit');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = (document.getElementById('name').value || '').trim();
    const email = (document.getElementById('email').value || '').trim();
    const message = (document.getElementById('message').value || '').trim();

    if (!name || !email || !message) {
      if (status) {
        status.innerHTML = '<span style="color:#f0b429">Please fill in all fields.</span>';
      }
      return;
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (status) {
        status.innerHTML = '<span style="color:#f0b429">Please enter a valid email address.</span>';
      }
      return;
    }

    if (submitBtn) {
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled = true;
    }

    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        if (status) {
          status.innerHTML = '<span style="color:#12b07d">Thanks! Your message has been sent.</span>';
        }
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        let msg = 'Something went wrong. Please try again.';
        if (json && json.error) {
          msg = json.error;
        } else if (json && json.errors) {
          // Formspree sometimes returns { errors: [...] }
          msg = Array.isArray(json.errors)
            ? json.errors.map(e => e.message || e).join(' ')
            : 'Validation errors';
        }
        if (status) {
          status.innerHTML = '<span style="color:#f87171">' + msg + '</span>';
        }
      }
    } catch (err) {
      if (status) {
        status.innerHTML = '<span style="color:#f87171">Network error. Please try again later.</span>';
      }
    } finally {
      if (submitBtn) {
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
      }
    }
  });
}
