const menuButton = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

const brand = document.querySelector('.brand');
if (brand) {
  const logoPath = brand.getAttribute('href')?.startsWith('../')
    ? '../assets/optimized/logo.png'
    : 'assets/optimized/logo.png';
  brand.setAttribute('aria-label', 'John Okojere home');
  brand.innerHTML = `<img class="brand-logo" src="${logoPath}" width="480" height="212" alt="John Okojere — Technology, Innovation, Security">`;
}

const setMenu = (open) => {
  menu?.classList.toggle('open', open);
  menuButton?.setAttribute('aria-expanded', String(open));
  if (menuButton) menuButton.textContent = open ? 'Close ×' : 'Menu +';
};

menuButton?.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll('[data-copy]').forEach((button) => button.addEventListener('click', async () => {
  const text = document.getElementById(button.dataset.copy)?.textContent.trim();
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    button.textContent = 'Copied ✓';
  } catch {
    button.textContent = 'Select text to copy';
  }
  setTimeout(() => { button.textContent = 'Copy bio'; }, 2000);
}));
