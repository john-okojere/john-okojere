const menuButton = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const footer = document.querySelector('footer');
if (footer && !footer.querySelector('a[href*="linkedin.com/in/okojere"]')) {
  const socialNav = document.createElement('nav');
  socialNav.className = 'footer-social';
  socialNav.setAttribute('aria-label', 'John Okojere contact links');
  socialNav.innerHTML = [
    '<a href="mailto:nnaokojere@gmail.com">Email</a>',
    '<a href="https://www.nnaokojere.space" target="_blank" rel="noopener noreferrer">Website</a>',
    '<a href="https://www.linkedin.com/in/okojere/" target="_blank" rel="noopener noreferrer">LinkedIn</a>',
    '<a href="https://www.instagram.com/john_okojere" target="_blank" rel="noopener noreferrer">Instagram</a>',
    '<a href="https://github.com/john-okojere" target="_blank" rel="noopener noreferrer">GitHub</a>',
    '<a href="https://x.com/JohnOkojere" target="_blank" rel="noopener noreferrer">X / Twitter</a>'
  ].join('');
  footer.insertBefore(socialNav, footer.querySelector('small'));
}
