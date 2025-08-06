function scrollToContent() {
  document.getElementById('contact').scrollIntoView({
    behavior: 'smooth'
  });
}

window.addEventListener("load", () => {
  if (window.location.hash) {
    window.scrollTo(0, 0);
    history.replaceState("", document.title, window.location.pathname, window.location.search);
  }
});