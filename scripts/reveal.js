// Scroll + load reveals for Stark AV.
// Elements with .reveal animate in once on intersection. If the visitor prefers
// reduced motion (or IntersectionObserver is unavailable), everything is shown
// immediately so no content is ever hidden.
(function () {
  "use strict";

  var targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  var prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function showAll() {
    targets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  if (prefersReduced || !("IntersectionObserver" in window)) {
    showAll();
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();
