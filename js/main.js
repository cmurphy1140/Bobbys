/**
 * Bobby's Restaurant & Lounge
 * Main JavaScript File
 */

'use strict';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollEffects();
});

/**
 * Navigation functionality
 */
function initNavigation() {
  const header = document.querySelector('.header');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    }

    // Close menu when clicking a link
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }

  // Header scroll behavior - add background on scroll
  if (header) {
    const scrollThreshold = 50;

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
  }
}

/**
 * Scroll effects and animations
 */
function initScrollEffects() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#" or empty
      if (href === '#' || href === '') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with fade-in class
  document.querySelectorAll('.fade-in').forEach(el => {
    fadeInObserver.observe(el);
  });
}

/**
 * Utility: Get current day's hours
 */
function getTodayHours() {
  const hours = {
    open: '11:30 AM',
    close: '1:00 AM',
    brunch: null
  };

  const today = new Date().getDay();

  // Sunday brunch hours
  if (today === 0) {
    hours.brunch = '11:30 AM - 2:30 PM';
  }

  return hours;
}

/**
 * Utility: Format phone number for display
 */
function formatPhone(phone) {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
}
