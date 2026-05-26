import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to activate scroll reveals and staggered item delays
 * dynamically whenever the user navigates to a new page route.
 */
export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to ensure route markup has fully rendered in DOM
    const timer = setTimeout(() => {
      const reveals = document.querySelectorAll('.reveal');
      if (reveals.length === 0) return;

      // Fallback if browser does not support IntersectionObserver
      if (!('IntersectionObserver' in window)) {
        reveals.forEach(el => el.classList.add('visible'));
        return;
      }

      // Add staggered transition delays to elements inside grids automatically
      const grids = document.querySelectorAll('.planning-grid, .services-grid, .footer-grid, .why-choose-grid, .why-grid');
      grids.forEach(grid => {
        [...grid.children].forEach((child, i) => {
          // If the child or its descendants require reveals, apply index-based transition delay
          if (child.classList.contains('reveal')) {
            child.style.transitionDelay = `${i * 80}ms`;
          } else {
            // Apply delay to internal reveals in grid children
            const internalReveals = child.querySelectorAll('.reveal');
            internalReveals.forEach((ir, index) => {
              ir.style.transitionDelay = `${index * 80}ms`;
            });
          }
        });
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -60px 0px',
          threshold: 0.05
        }
      );

      reveals.forEach(el => observer.observe(el));
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);
}
