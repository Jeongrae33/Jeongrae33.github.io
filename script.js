const languageButton = document.querySelector('#language');
const translated = [...document.querySelectorAll('[data-en]')];
const translatedImages = [...document.querySelectorAll('[data-alt-en]')];
translatedImages.forEach(image => { image.dataset.altKo = image.alt; });
translated.forEach(element => { element.dataset.ko = element.innerHTML; });
function setLanguage(language) {
  const english = language === 'en';
  document.documentElement.lang = english ? 'en' : 'ko';
  translated.forEach(element => { element.innerHTML = english ? element.dataset.en : element.dataset.ko; });
  translatedImages.forEach(image => { image.alt = english ? image.dataset.altEn : image.dataset.altKo; });
  languageButton.innerHTML = `${english ? 'KO' : 'EN'} <span>↗</span>`;
  languageButton.setAttribute('aria-label', english ? '한국어로 전환' : 'Switch to English');
  try { localStorage.setItem('jeongrae-language', language); } catch { /* The page also works without storage. */ }
}
languageButton.addEventListener('click', () => setLanguage(document.documentElement.lang === 'ko' ? 'en' : 'ko'));
try { if (localStorage.getItem('jeongrae-language') === 'en') setLanguage('en'); } catch { /* Use Korean by default. */ }
document.querySelector('#year').textContent = new Date().getFullYear();

const viewer = document.querySelector('#photo-viewer');
let previousPhoto;
document.querySelectorAll('.memory-photo').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof viewer.showModal !== 'function') return;
    event.preventDefault();
    previousPhoto = link;
    const photo = link.querySelector('img');
    viewer.querySelector('img').src = link.href;
    viewer.querySelector('img').alt = photo.alt;
    viewer.querySelector('p').textContent = photo.alt;
    viewer.showModal();
  });
});
viewer.querySelector('button').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
viewer.addEventListener('close', () => previousPhoto?.focus());
