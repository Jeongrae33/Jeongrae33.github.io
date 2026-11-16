(() => {
  const viewer = document.querySelector('#architecture-viewer');
  if (!viewer) return;
  const image = viewer.querySelector('img');
  const canvas = viewer.querySelector('.architecture-canvas');
  const zoomButton = viewer.querySelector('[data-architecture-zoom]');
  let opener;
  const setZoom = original => {
    canvas.classList.toggle('is-original', original);
    zoomButton.textContent = original ? 'Fit to screen' : 'Original size';
    zoomButton.setAttribute('aria-pressed', String(original));
    canvas.scrollTop = 0;
    canvas.scrollLeft = 0;
  };
  document.addEventListener('click', event => {
    const link = event.target.closest('.architecture-image');
    if (!link || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof viewer.showModal !== 'function') return;
    event.preventDefault();
    opener = link;
    const preview = link.querySelector('img');
    image.src = link.href;
    image.alt = preview.alt;
    viewer.querySelector('#architecture-caption').textContent = preview.alt;
    viewer.querySelector('[data-architecture-original]').href = link.href;
    setZoom(false);
    viewer.showModal();
  });
  zoomButton.addEventListener('click', () => setZoom(!canvas.classList.contains('is-original')));
  image.addEventListener('click', () => setZoom(!canvas.classList.contains('is-original')));
  const closeViewer = () => {
    viewer.close();
    opener?.focus();
  };
  viewer.querySelector('[data-architecture-close]').addEventListener('click', closeViewer);
  viewer.addEventListener('click', event => { if (event.target === viewer) closeViewer(); });
  viewer.addEventListener('close', () => { setZoom(false); opener?.focus(); });
})();
