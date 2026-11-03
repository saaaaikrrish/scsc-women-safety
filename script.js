/**
 * SCSC Women Safety Wing – Shared JavaScript
 * Features:
 * - Accessible mobile navigation toggle (aria-expanded, keyboard escape, outside click)
 * - Dynamic active-link synchronization (handles relative paths & file:// protocols)
 * - Accessible FAQ accordion controller (aria-expanded, keyboard Enter/Space, animated)
 * - Back-to-top button with smooth scrolling and scroll threshold detection
 * - Accessible smooth scrolling for in-page anchors with sticky header offset
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initActiveNavLinks();
  initAccordions();
  initBackToTop();
  initSmoothScroll();
});

/**
 * 1. Mobile Navigation Menu Toggle
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const primaryNav = document.querySelector('.primary-nav');

  if (!toggleBtn || !primaryNav) return;

  function toggleMenu(open) {
    const isCurrentlyOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
    const shouldOpen = open !== undefined ? open : !isCurrentlyOpen;

    toggleBtn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    primaryNav.classList.toggle('is-open', shouldOpen);

    if (shouldOpen) {
      // Find first link in nav and focus it for accessibility
      const firstLink = primaryNav.querySelector('a');
      if (firstLink) firstLink.focus();
    }
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close when pressing Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });

  // Close when clicking outside of nav
  document.addEventListener('click', (e) => {
    if (
      toggleBtn.getAttribute('aria-expanded') === 'true' &&
      !primaryNav.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      toggleMenu(false);
    }
  });
}

/**
 * 2. Active Navigation Link Highlighting
 * Works seamlessly across file://, localhost, and GitHub Pages subfolders.
 */
function initActiveNavLinks() {
  const navLinks = document.querySelectorAll('.nav__link');
  if (!navLinks.length) return;

  // Extract current page file name (defaulting to 'index.html')
  let currentPath = window.location.pathname.split('/').pop();
  if (!currentPath || currentPath === '') {
    currentPath = 'index.html';
  }

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;

    const linkPath = href.split('/').pop().split('#')[0];

    // Check if the current page matches this link
    if (
      linkPath === currentPath ||
      (currentPath === '' && linkPath === 'index.html') ||
      (currentPath === 'index.html' && (linkPath === '' || linkPath === './' || linkPath === 'index.html'))
    ) {
      link.classList.add('nav__link--active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('nav__link--active');
      link.removeAttribute('aria-current');
    }
  });
}

/**
 * 3. Accessible FAQ Accordions
 */
function initAccordions() {
  const accordionTriggers = document.querySelectorAll('.accordion__trigger');

  accordionTriggers.forEach((trigger) => {
    const panelId = trigger.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);

    if (!panel) return;

    // Ensure initial ARIA state matches DOM hidden state
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    if (!isExpanded) {
      panel.setAttribute('hidden', '');
    } else {
      panel.removeAttribute('hidden');
    }

    trigger.addEventListener('click', () => {
      const currentlyOpen = trigger.getAttribute('aria-expanded') === 'true';
      const willOpen = !currentlyOpen;

      trigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');

      if (willOpen) {
        panel.removeAttribute('hidden');
      } else {
        panel.setAttribute('hidden', '');
      }
    });
  });
}

/**
 * 4. Back To Top Button
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  const scrollThreshold = 300;

  function checkScrollPosition() {
    if (window.scrollY > scrollThreshold) {
      backToTopBtn.classList.add('is-visible');
    } else {
      backToTopBtn.classList.remove('is-visible');
    }
  }

  // Throttled passive scroll listener
  window.addEventListener('scroll', checkScrollPosition, { passive: true });
  checkScrollPosition(); // Initial check

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Restore focus to body/skip-link for accessibility
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) skipLink.focus();
  });
}

/**
 * 5. Smooth Scroll for In-Page Anchors with Header Offset
 */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"]):not(.skip-link)');
  const header = document.querySelector('.site-header');

  anchorLinks.forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        const headerOffset = header ? header.offsetHeight + 16 : 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update keyboard focus for accessibility
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });
      }
    });
  });
}
