// Sticky nav
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Menu tabs
const tabs = document.querySelectorAll('.menu__tab');
const panels = document.querySelectorAll('.menu__panel');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('menu__tab--active'));
    panels.forEach(p => p.classList.remove('menu__panel--active'));
    tab.classList.add('menu__tab--active');
    document.getElementById(`tab-${tab.dataset.tab}`).classList.add('menu__panel--active');
  });
});

// Build Your Own Pizza Modal
const byoModal = document.getElementById('byoModal');
const byoSummaryText = document.getElementById('byoSummaryText');

function updateByoSummary() {
  const size = byoModal.querySelector('input[name="byo-size"]:checked')?.value || 'Medium (12")';
  const sauce = byoModal.querySelector('input[name="byo-sauce"]:checked')?.value || 'Marinara';
  const toppings = [...byoModal.querySelectorAll('input[name="byo-topping"]:checked')].map(i => i.value);
  let summary = `${size} · ${sauce} sauce · Mozzarella`;
  if (toppings.length) summary += ` · ${toppings.join(', ')}`;
  byoSummaryText.textContent = summary;
}

function openByoModal() {
  byoModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  updateByoSummary();
}
function closeByoModal() {
  byoModal.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.byo-open-btn').forEach(btn => btn.addEventListener('click', openByoModal));
document.getElementById('byoModalClose').addEventListener('click', closeByoModal);
document.getElementById('byoModalBackdrop').addEventListener('click', closeByoModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeByoModal(); });
byoModal.querySelectorAll('input').forEach(input => input.addEventListener('change', updateByoSummary));

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.menu__item, .contact__card, .hours__row').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
  observer.observe(el);
});
