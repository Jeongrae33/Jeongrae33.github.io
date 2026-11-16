# JeongRae Kim · Research Homepage

국문·영문 연구자 홈페이지입니다. HTML/CSS/JavaScript로 작성되어 빌드나 패키지 설치가 필요하지 않습니다.

## 로컬 보기

`index.html`을 브라우저로 열거나, 저장소 폴더에서 `python -m http.server 8000`을 실행한 뒤 http://localhost:8000 을 엽니다.

## GitHub Pages 배포

GitHub 저장소 Settings → Pages → Build and deployment → Source에서 **GitHub Actions**를 선택합니다. main 브랜치에 push하면 `.github/workflows/pages.yml`이 배포합니다. 최초 설정 후 Actions에서 워크플로를 수동 실행할 수도 있습니다.

Repository: `Jeongrae33.github.io`

Homepage: https://jeongrae33.github.io/

All assets use relative paths.

## 내용 수정

- `index.html`: 국문 내용, `data-en` 속성의 영문 내용
- `styles.css`: 색상, 레이아웃, 모바일 화면
- `script.js`: Language switching and Memory photo viewer
- `assets/`: Profile photo and Memory gallery images
- `publications-data.js`: Publication metadata; add papers here to update the list automatically.
- `publications.js`: Academic list rendering, authorship sorting, and conditional link buttons.
- `architecture.css` / `architecture.js`: Responsive architecture previews and the original-size image viewer.
- `assets/images/sources.json`: Official PDF sources, page/figure numbers, original image dimensions, and checksums.

## Architecture figures

QAM-DETR (Figure 1), SAM3Dual (Figure 1), SAM2Dual (Figure 2), and Continuity-Driven (Figure 2) use the original embedded images from the linked official PDFs, converted losslessly to PNG without redrawing or resizing. The optional `image` field in publication data contains its relative `src`, descriptive `alt`, and native `width` / `height`. Omit this field when no verified figure is available. No TGM-DETR architecture file was available, so its entries remain text-only. Image previews open a dialog with fit-to-screen, original-size scrolling, and a direct original-image link. Existing Memory photos keep their separate viewer.

## Updating publications

Add a record to `window.RESEARCH_PUBLICATIONS.publications` in `publications-data.js`. Include a unique `id`, `title`, `authors` array in actual author order, `venue`, numeric `year`, public `date` (`YYYY-MM-DD` or `YYYY-MM`), `status`, `topic`, and `links` object. Optional `highlight` adds a small award badge. Only verified HTTPS `PDF`, `arXiv`, and `Proceedings` links are rendered; omit unavailable links.

The renderer recognizes `JeongRae Kim` case-insensitively, bolds the name, places first-author papers before co-authored papers, and sorts each group newest first with year headings. For abbreviated challenge reports, `authors` contains the displayed lead author and `includedAuthors` lists the explicitly acknowledged contributors. This is not used to infer author order.

For a submitted manuscript, use `underReview` with `status: 'Submitted'` and `statusConfirmed: true` only after confirming submission. Otherwise the entry remains hidden. Submitted papers have no public-link button unless an actual URL is provided.

English is the default language; the existing Korean switch and Memory gallery are preserved. No backend, dependencies, fetch requests, or build step is required.

Publication metadata was compared against the linked DCASE proceedings/PDF and arXiv abstract pages. The Continuity-Driven entry retains the requested `arXiv Preprint` label pending the owner's venue preference; its arXiv comments currently state acceptance at BMVC 2026. No conference acceptance is inferred for other preprints.

연구 성과와 소속은 제공된 이력서를 기준으로 작성했습니다. TGM-DETR는 제출 상태로 표시했습니다. 원문 링크가 제공되지 않은 논문에는 임의의 링크를 넣지 않았습니다.
