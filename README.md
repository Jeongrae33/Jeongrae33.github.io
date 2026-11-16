# Jeongrae Kim · Research Homepage

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

연구 성과와 소속은 제공된 이력서를 기준으로 작성했습니다. TGM-DETR는 제출 상태로 표시했습니다. 원문 링크가 제공되지 않은 논문에는 임의의 링크를 넣지 않았습니다.
