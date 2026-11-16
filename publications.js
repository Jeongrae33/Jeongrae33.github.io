(() => {
  const data = window.RESEARCH_PUBLICATIONS;
  const container = document.querySelector('#publications-list');
  if (!data || !container) return;

  const isOwner = name => String(name).trim().toLowerCase() === 'jeongrae kim';
  const firstAuthor = paper => isOwner(paper.authors[0]);
  const newestFirst = (a, b) => String(b.date || b.year).localeCompare(String(a.date || a.year));
  const make = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  };
  const addNames = (element, names) => names.forEach((name, index) => {
    if (index) element.append(', ');
    element.append(make(isOwner(name) ? 'strong' : 'span', '', name));
  });
  const renderPaper = paper => {
    const item = make('li', 'publication');
    item.id = `publication-${paper.id}`;
    const title = make('h4', 'publication-title', paper.title);
    const authors = make('p', 'publication-authors');
    addNames(authors, paper.authors);
    if (paper.includedAuthors?.length) {
      authors.append(' et al. (including ');
      addNames(authors, paper.includedAuthors);
      authors.append(')');
    }
    item.append(title, authors, make('p', 'publication-venue', `${paper.venue} · ${paper.year}`));
    if (paper.highlight) item.append(make('span', 'publication-award', paper.highlight));
    item.append(make('p', 'publication-topic', `${paper.topic} · ${paper.status}`));
    const links = make('div', 'publication-links');
    Object.entries(paper.links || {}).forEach(([label, url]) => {
      if (!['PDF', 'arXiv', 'Proceedings'].includes(label) || !url) return;
      try { if (new URL(url).protocol !== 'https:') return; } catch { return; }
      const link = make('a', '', label);
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `${label}: ${paper.title} (opens in a new tab)`);
      links.append(link);
    });
    if (links.children.length) item.append(links);
    return item;
  };
  const published = [...data.publications].sort((a, b) => Number(firstAuthor(b)) - Number(firstAuthor(a)) || newestFirst(a, b));
  [true, false].forEach(first => {
    const papers = published.filter(paper => firstAuthor(paper) === first);
    if (!papers.length) return;
    const group = make('div', 'publication-group');
    group.append(make('h3', 'publication-group-title', first ? 'First-author publications' : 'Co-authored publications'));
    [...new Set(papers.map(paper => paper.year))].sort((a, b) => b - a).forEach(year => {
      const row = make('div', 'publication-year-group');
      const list = make('ol', 'publication-list');
      papers.filter(paper => paper.year === year).forEach(paper => list.append(renderPaper(paper)));
      row.append(make('p', 'publication-year', String(year)), list);
      group.append(row);
    });
    container.append(group);
  });

  const submitted = (data.underReview || []).filter(paper => paper.statusConfirmed === true && paper.status === 'Submitted');
  if (submitted.length) {
    const section = make('div', 'publication-group under-review');
    section.id = 'under-review';
    section.append(make('h3', 'publication-group-title', 'Under Review'));
    const list = make('ol', 'publication-list');
    submitted.sort(newestFirst).forEach(paper => list.append(renderPaper(paper)));
    section.append(list);
    container.append(section);
  }
})();
