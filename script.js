// ── Build menu from menu.js config ───────────────────────────────
function buildMenu() {
  if (typeof MENU === 'undefined') return;

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function fmt(n) { return '$' + n.toFixed(2); }

  const ICON_CAL = `<svg class="pizza-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3,18 Q3,5 12,3 Q21,5 21,18" stroke-linejoin="round"/><path d="M3,18 C4,16.5 5,18.5 6.5,17 C8,16 9,18.5 10.5,17.5 C12,16.5 12.5,18.5 13.5,17.5 C15,16.5 16,18.5 17.5,17 C19,16 20,16.5 21,18"/><circle cx="10" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="14" cy="8" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="13" r="1" fill="currentColor" stroke="none"/><circle cx="9" cy="14" r="0.8" fill="currentColor" stroke="none"/></svg>`;
  const ICON_CAL_LG = `<svg style="width:32px;height:32px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3,18 Q3,5 12,3 Q21,5 21,18" stroke-linejoin="round"/><path d="M3,18 C4,16.5 5,18.5 6.5,17 C8,16 9,18.5 10.5,17.5 C12,16.5 12.5,18.5 13.5,17.5 C15,16.5 16,18.5 17.5,17 C19,16 20,16.5 21,18"/><circle cx="10" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="14" cy="8" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="13" r="1" fill="currentColor" stroke="none"/><circle cx="9" cy="14" r="0.8" fill="currentColor" stroke="none"/></svg>`;
  const ICON_6 = `<svg class="pizza-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="7" y1="3.4" x2="17" y2="20.6"/><line x1="17" y1="3.4" x2="7" y2="20.6"/></svg>`;
  const ICON_8 = `<svg class="pizza-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="4.9" y1="4.9" x2="19.1" y2="19.1"/><line x1="19.1" y1="4.9" x2="4.9" y2="19.1"/></svg>`;

  function simpleItem(item) {
    const photo = item.photo ? `<div class="menu__item-photo-wrap"><img src="${esc(item.photo)}" alt="${esc(item.name)} at Rusted Sun Pizzeria" class="menu__item-photo"></div>` : '';
    const tag   = item.tag   ? `<span class="menu__item-tag">${esc(item.tag)}</span>` : '';
    const price = item.price !== undefined ? `<span class="menu__item-price">${fmt(item.price)}</span>` : '';
    const desc  = item.desc  ? `<p class="menu__item-desc">${item.desc}</p>` : '';
    const cls   = ['menu__item', item.photo && 'menu__item--photo', item.featured && 'menu__item--featured'].filter(Boolean).join(' ');
    return `<div class="${cls}">${photo}<div class="menu__item-header"><h3 class="menu__item-name">${esc(item.name)}</h3>${tag}${price}</div>${desc}</div>`;
  }

  function pizzaItem(item) {
    const photo = item.photo ? `<div class="menu__item-photo-wrap"><img src="${esc(item.photo)}" alt="${esc(item.name)} at Rusted Sun Pizzeria" class="menu__item-photo"></div>` : '';
    const tag   = item.tag   ? `<span class="menu__item-tag">${esc(item.tag)}</span>` : '';
    const cls   = ['menu__item', 'menu__item--featured', item.photo && 'menu__item--photo'].filter(Boolean).join(' ');
    return `<div class="${cls}">${photo}<div class="menu__item-header"><h3 class="menu__item-name">${esc(item.name)}</h3>${tag}</div><p class="menu__item-desc">${item.desc}</p><div class="menu__item-prices"><span class="menu__price-group"><span class="menu__price-size">Calzone</span><span class="menu__price-amt">${fmt(item.calzone)}</span></span><span class="menu__price-div">·</span><span class="menu__price-group"><span class="menu__price-size">12"</span><span class="menu__price-amt">${fmt(item.small)}</span></span><span class="menu__price-div">·</span><span class="menu__price-group"><span class="menu__price-size">16"</span><span class="menu__price-amt">${fmt(item.large)}</span></span></div></div>`;
  }

  function pastaItem(item) {
    const tag    = item.tag ? `<span class="menu__item-tag">${esc(item.tag)}</span>` : '';
    const prices = item.prices.map((p, i) =>
      `<span class="menu__price-group"><span class="menu__price-size">${esc(p.label)}</span><span class="menu__price-amt">${fmt(p.price)}</span></span>${i < item.prices.length - 1 ? '<span class="menu__price-div">·</span>' : ''}`
    ).join('');
    return `<div class="menu__item menu__item--featured"><div class="menu__item-header"><h3 class="menu__item-name">${esc(item.name)}</h3>${tag}</div><p class="menu__item-desc">${item.desc}</p><div class="menu__item-prices">${prices}</div></div>`;
  }

  function byoPricingTable(byo) {
    const rows = byo.pricing.map(row => {
      const pfx = row.isAddon ? '+' : '';
      return `<div class="byo-tier-row${row.isAddon ? ' byo-tier-row--note' : ''}"><span>${esc(row.label)}</span><span>${pfx}${fmt(row.calzone)}</span><span>${pfx}${fmt(row.small)}</span><span>${pfx}${fmt(row.large)}</span></div>`;
    }).join('');
    return `<div class="byo-tier-table"><div class="byo-tier-header"><span></span><span>Calzone ${ICON_CAL}</span><span>12" ${ICON_6}<span class="byo-slice-note">6 slices</span></span><span>16" ${ICON_8}<span class="byo-slice-note">8 slices</span></span></div>${rows}</div>`;
  }

  function byoCard(byo, type) {
    const isCalzone = type === 'calzone';
    const icon  = isCalzone ? `<div class="menu__byo-icon">${ICON_CAL_LG}</div>` : `<div class="menu__byo-icon">✦</div>`;
    const title = isCalzone ? 'Create Your Own Calzone' : 'Create Your Own';
    const cols  = 4;
    const perCol = Math.ceil(byo.toppings.length / cols);
    const toppingColsHtml = Array.from({ length: cols }, (_, i) => byo.toppings.slice(i * perCol, (i + 1) * perCol))
      .filter(c => c.length)
      .map(c => `<ul>${c.map(t => `<li>${esc(t)}</li>`).join('')}</ul>`)
      .join('');
    return `<div class="menu__item menu__item--byo menu__item--byo-expanded"><div class="byo-expanded__header">${icon}<h3 class="menu__item-name">${title}</h3><p class="menu__item-desc">Mozzarella always included. Choose your sauce and toppings — call us to order.</p></div><div class="byo-expanded__body"><div class="byo-expanded__left"><div class="byo-expanded__group"><h4 class="byo-expanded__label">Sauce <span class="byo-expanded__note">choose one</span></h4><p class="byo-expanded__sauce">${byo.sauces.map(esc).join(' · ')}</p></div><div class="byo-expanded__group"><h4 class="byo-expanded__label">Toppings</h4><div class="byo-expanded__toppings">${toppingColsHtml}</div></div></div><div class="byo-expanded__right"><h4 class="byo-expanded__label">Pricing</h4>${byoPricingTable(byo)}</div></div></div>`;
  }

  function fill(sel, html) {
    const el = document.querySelector(sel);
    if (el) el.innerHTML = html;
  }

  // Starters
  fill('#tab-appetizers .menu__grid', MENU.starters.map(simpleItem).join(''));

  // Salads
  fill('#tab-salads .menu__grid', MENU.salads.map(simpleItem).join(''));

  // Pizzas — specialty items + Create Your Own card
  fill('#tab-pizzas .menu__grid', MENU.pizzas.map(pizzaItem).join('') + byoCard(MENU.byo, 'pizza'));

  // Calzones — featured pizza, info card, Create Your Own calzone card
  const fp = MENU.pizzas.find(p => p.calzoneFeature);
  const featuredHtml = fp ? (() => {
    const imgSrc = fp.calzonePhoto || fp.photo;
    const photoHtml = imgSrc ? `<div class="menu__item-photo-wrap"><img src="${esc(imgSrc)}" alt="${esc(fp.name)} Calzone at Rusted Sun Pizzeria" class="menu__item-photo"></div>` : '';
    const tagHtml   = fp.tag ? `<span class="menu__item-tag">${esc(fp.tag)}</span>` : '';
    return `<div class="menu__item menu__item--featured${imgSrc ? ' menu__item--photo' : ''}">${photoHtml}<div class="menu__item-header"><h3 class="menu__item-name">${esc(fp.name)} Calzone</h3>${tagHtml}</div><p class="menu__item-desc">${fp.desc} Folded and baked golden. Served with marinara dipping sauce.</p><div class="menu__item-prices"><span class="menu__price-group"><span class="menu__price-size">Calzone</span><span class="menu__price-amt">${fmt(fp.calzone)}</span></span></div></div>`;
  })() : '';
  const infoCard = `<div class="menu__item"><h3 class="menu__item-name">Any House Pizza as a Calzone</h3><p class="menu__item-desc">Every pizza on our menu — Bleu Chicken, Round Up, Mediterranean, Hawaiian, and more — can be folded into a calzone. See the Pizzas tab for full descriptions and calzone pricing.</p></div>`;
  fill('#tab-calzones .menu__grid', featuredHtml + infoCard + byoCard(MENU.byo, 'calzone'));

  // Pasta
  fill('#tab-pasta .menu__grid', MENU.pasta.map(pastaItem).join(''));

  // Desserts
  fill('#tab-desserts .menu__grid', MENU.desserts.map(simpleItem).join(''));

  // Beverages
  fill('#tab-beverages .menu__grid', MENU.beverages.map(simpleItem).join(''));
}
buildMenu();

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
    const activePanel = document.getElementById(`tab-${tab.dataset.tab}`);
    activePanel.classList.add('menu__panel--active');
    activePanel.querySelectorAll('.menu__item').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
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

document.querySelectorAll('.menu__panel--active .menu__item, .contact__card, .hours__row').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
  observer.observe(el);
});
