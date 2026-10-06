// Local progressive enhancement. No analytics, cookies, or tracking.
const descriptions = {search: ['Search with text and price filters', 'Find the detail. Not just the image.'], compare: ['Sift comparison board for saved product listings', 'Your options, side by side.'], home: ['Sift Home showing upcoming dates and reminders', 'Keep later from becoming never.']};
const screen = document.querySelector('#feature-screen');
if (screen) document.querySelectorAll('[data-screen]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-screen]').forEach(item => { item.classList.remove('active'); item.setAttribute('aria-pressed', 'false'); });
    button.classList.add('active'); button.setAttribute('aria-pressed', 'true');
    const selected = button.dataset.screen;
    screen.src = `/assets/${selected}.png`; screen.alt = descriptions[selected][0];
    document.querySelector('#screen-caption').textContent = descriptions[selected][1];
  });
});
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js-motion');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), {threshold: 0.08});
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}
