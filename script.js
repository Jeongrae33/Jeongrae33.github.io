const languageButton = document.querySelector('#language');
const translated = [...document.querySelectorAll('[data-en]')];
translated.forEach(element => { element.dataset.ko = element.innerHTML; });
function setLanguage(language) {
  const english = language === 'en';
  document.documentElement.lang = english ? 'en' : 'ko';
  translated.forEach(element => { element.innerHTML = english ? element.dataset.en : element.dataset.ko; });
  languageButton.innerHTML = `${english ? 'KO' : 'EN'} <span>↗</span>`;
  languageButton.setAttribute('aria-label', english ? '한국어로 전환' : 'Switch to English');
  document.querySelector('#cv-link').href = `assets/Jeongrae_Kim_CV_${english ? 'EN' : 'KO'}.docx`;
  try { localStorage.setItem('jeongrae-language', language); } catch { /* The page also works without storage. */ }
}
languageButton.addEventListener('click', () => setLanguage(document.documentElement.lang === 'ko' ? 'en' : 'ko'));
try { if (localStorage.getItem('jeongrae-language') === 'en') setLanguage('en'); } catch { /* Use Korean by default. */ }
document.querySelector('#year').textContent = new Date().getFullYear();
