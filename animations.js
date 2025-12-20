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
