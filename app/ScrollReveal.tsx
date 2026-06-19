"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".hero-copy",
  ".intro-section .section-lead",
  ".intro-section .soft-card",
  ".split-grid > *",
  ".program-card",
  ".product-grid > *",
  ".guests-heading",
  ".benefit-card",
  ".mimos-card",
  ".proof-grid > *",
  ".cta-grid > *",
  ".footer-inner",
];

export function ScrollReveal() {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors.join(",")),
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    document.documentElement.classList.add("scroll-reveal-ready");

    elements.forEach((element, index) => {
      element.classList.add("reveal-on-scroll");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 55}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("scroll-reveal-ready");
      elements.forEach((element) => {
        element.classList.remove("reveal-on-scroll", "is-visible");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return null;
}
