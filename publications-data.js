// Add a record here; the page automatically sorts authorship groups and dates.
// Dates use the public submission/publication date, not the conference acceptance date.
window.RESEARCH_PUBLICATIONS = {
  publications: [
    {
      id: 'qam-detr',
      image: { src: 'assets/images/qam-detr-architecture.png', alt: 'QAM-DETR architecture — Figure 1 from the paper', width: 1962, height: 682 },
      title: 'QAM-DETR: Quality-Aware Mamba DETR for Audio Moment Retrieval from Long Audio',
      authors: ['JeongRae Kim', 'Ho jun Jung', 'Yewon Park', 'Changwon Lim'],
      venue: 'DCASE 2026 Workshop',
      year: 2026,
      date: '2026-10',
      status: 'Workshop paper',
      highlight: 'Joint 1st Place, DCASE 2026 Task 6',
      topic: 'Audio Moment Retrieval',
      links: {
        Proceedings: 'https://dcase.community/workshop2026/proceedings',
        PDF: 'https://dcase.community/documents/workshop2026/proceedings/DCASE2026Workshop_Kim_35.pdf'
      }
    },
    {
      id: 'sam3dual',
      image: { src: 'assets/images/sam3dual-architecture.png', alt: 'SAM3Dual architecture — Figure 1 from the paper', width: 2600, height: 862 },
      title: 'SAM3Dual: A 3rd Place Solution to the MOSEv2 Track, 8th LSVOS Challenge',
      authors: ['JeongRae Kim', 'Chaehyun Kim', 'Changwon Lim'],
      venue: 'ECCV 2026 LSVOS Challenge',
      year: 2026,
      date: '2026-08-23',
      status: 'Challenge solution · arXiv preprint',
      highlight: '3rd Place, MOSEv2 Track',
      topic: 'Video Object Segmentation',
      links: { arXiv: 'https://arxiv.org/abs/2608.22193', PDF: 'https://arxiv.org/pdf/2608.22193' }
    },
    {
      id: 'sam2dual',
      image: { src: 'assets/images/sam2dual-architecture.png', alt: 'SAM2Dual architecture — Figure 2 from the paper', width: 5331, height: 1747 },
      title: 'SAM2Dual: Training-Free, Dual Memory for Long-Term Video Object Segmentation',
      authors: ['JeongRae Kim', 'Changwon Lim'],
      venue: 'arXiv Preprint',
      year: 2026,
      date: '2026-08-19',
      status: 'Preprint',
      topic: 'Long-term Video Object Segmentation',
      links: { arXiv: 'https://arxiv.org/abs/2608.18640', PDF: 'https://arxiv.org/pdf/2608.18640' }
    },
    {
      id: 'continuity-driven',
      image: { src: 'assets/images/continuity-architecture.png', alt: 'Continuity-driven method overview — Figure 2 from the paper', width: 1311, height: 627 },
      title: 'Continuity-Driven Representation Learning for Industrial Defect Detection',
      authors: ['Minjong Kim', 'Hyun Jun Kim', 'Jeongrae Kim', 'Heeseung Shin', 'Changwon Lim'],
      venue: 'arXiv Preprint',
      year: 2026,
      date: '2026-08-18',
      status: 'Preprint',
      topic: 'Industrial Defect Detection',
      links: { arXiv: 'https://arxiv.org/abs/2608.17362', PDF: 'https://arxiv.org/pdf/2608.17362' }
    },
    {
      id: 'lsvos-report',
      title: 'Report of the 8th LSVOS Challenge: Complex and Multimodal Video Object Segmentation',
      authors: ['Chang Liu'],
      // An explicitly abbreviated author list, not a claim of author order.
      includedAuthors: ['JeongRae Kim'],
      venue: 'arXiv Preprint / Challenge Report',
      year: 2026,
      date: '2026-09-05',
      status: 'Challenge report · Preprint',
      topic: 'Video Object Segmentation',
      links: { arXiv: 'https://arxiv.org/abs/2609.06078', PDF: 'https://arxiv.org/pdf/2609.06078' }
    }
  ],
  underReview: [
    {
      id: 'tgm-detr',
      image: { src: 'assets/images/tgm-detr-architecture.png', alt: 'TGM-DETR architecture provided by the author', width: 1618, height: 348 },
      title: 'TGM-DETR: Temporally Guided Mamba DETR with Boundary-Aware Verification for Audio Moment Retrieval',
      authors: ['Jeongrae Kim', 'Ho jun Jung', 'Yewon Park', 'Changwon Lim'],
      venue: 'ICASSP 2027 (Submitted)',
      year: 2027,
      status: 'Submitted',
      // Submission confirmed by the supplied research resume and owner instructions.
      statusConfirmed: true,
      topic: 'Audio Moment Retrieval',
      links: {}
    }
  ]
};
