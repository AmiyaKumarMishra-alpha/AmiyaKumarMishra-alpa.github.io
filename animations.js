document.addEventListener('DOMContentLoaded', () => {
  // Ensure page is visible on load
  document.body.style.opacity = '1';

  document.querySelectorAll("a").forEach(link => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", e => {
        e.preventDefault();
        const href = link.getAttribute("href");

        document.body.style.opacity = "0";
        setTimeout(() => {
          window.location.href = href;
        }, 200);
      });
    }
  });
});

// When navigating with the back/forward cache (bfcache), make sure the page becomes visible again
window.addEventListener('pageshow', (ev) => {
  if (ev.persisted) {
    document.body.style.opacity = '1';
  }
});
