/**
 * Five-pillar positioning framework — spec §2.3.
 * Shared by the homepage and can be reused on the About page / Gantry category.
 * Each SVG is sized to viewBox="0 0 40 40" and inherits color from the wrapper.
 */
export interface Pillar { icon: string; title: string; body: string; }

export const homepagePillars: Pillar[] = [
  {
    icon: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="28" height="24" rx="2"/>
      <line x1="13" y1="5" x2="13" y2="13"/>
      <line x1="27" y1="5" x2="27" y2="13"/>
      <line x1="6" y1="17" x2="34" y2="17"/>
      <text x="20" y="29" text-anchor="middle" font-family="Inter, sans-serif" font-size="8.5" font-weight="700" fill="currentColor" stroke="none">23</text>
    </svg>`,
    title: 'Twenty-Three Years. Built in North America.',
    body: "Designing, welding, and manufacturing portable aluminum lifting equipment in Canada since 2003. North American sourced components. 10-year warranty across the full portfolio.",
  },
  {
    icon: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4 L34 10 L34 21 C34 27 27 34 20 36 C13 34 6 27 6 21 L6 10 Z"/>
      <polyline points="14,20 19,25 26,16"/>
    </svg>`,
    title: 'Designed to North American Codes.',
    body: 'ASME B30.17, ASME BTH-1, OSHA, CSA B167, and CSA S157. CSA W47.2 certified for fusion welding of aluminum by the Canadian Welding Bureau. Built for the jurisdictions you work in.',
  },
  {
    icon: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="9" r="4"/>
      <line x1="12.5" y1="11.5" x2="26.5" y2="25.5"/>
      <circle cx="30" cy="30" r="4"/>
      <line x1="17" y1="12" x2="13" y2="17"/>
      <line x1="27" y1="32" x2="31" y2="27"/>
    </svg>`,
    title: 'Lightweight by Design.',
    body: '1-2 people and 2 wrenches for lower capacity setup. Standard facility equipment for higher capacities — no crane truck required. Rolls while fully loaded.',
  },
  {
    icon: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="13" height="13" rx="1"/>
      <rect x="22" y="5" width="13" height="13" rx="1"/>
      <rect x="5" y="22" width="13" height="13" rx="1"/>
      <rect x="22" y="22" width="13" height="13" rx="1"/>
      <line x1="18" y1="11.5" x2="22" y2="11.5"/>
      <line x1="18" y1="28.5" x2="22" y2="28.5"/>
      <line x1="11.5" y1="18" x2="11.5" y2="22"/>
      <line x1="28.5" y1="18" x2="28.5" y2="22"/>
    </svg>`,
    title: 'One Supplier. Every Capacity.',
    body: 'Portable aluminum cranes from 1,100 to 22,000 lb, plus davits, lifting beams, and accessories. Top beams and trolleys interchange across product ranges — train once, stock fewer parts.',
  },
  {
    icon: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5 C13 5 8 10 8 17 C8 25 20 34 20 34 C20 34 32 25 32 17 C32 10 27 5 20 5 Z"/>
      <circle cx="20" cy="16" r="3.5"/>
    </svg>`,
    title: 'Near Every Jobsite.',
    body: 'Deployed across every state and every province through a nationwide network of rental partners. Rent for the project, own for the fleet, or evaluate before committing.',
  },
];

/**
 * Gantry-specific 6-point credibility strip — spec §4 Gantry category page.
 */
export const gantryPillars: Pillar[] = [
  {
    icon: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="9" r="4"/>
      <line x1="12.5" y1="11.5" x2="26.5" y2="25.5"/>
      <circle cx="30" cy="30" r="4"/>
    </svg>`,
    title: 'Lightweight Aluminum.',
    body: 'Easier handling at every capacity from 1,100 to 22,000 lb.',
  },
  {
    icon: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="16" width="24" height="18" rx="1"/>
      <path d="M14 16 L14 10 L26 10 L26 16"/>
      <circle cx="13" cy="36" r="1.5"/>
      <circle cx="27" cy="36" r="1.5"/>
    </svg>`,
    title: 'No Crane Truck Required.',
    body: '1-2 people and 2 wrenches on lower capacities. Standard facility equipment on higher capacities.',
  },
  {
    icon: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <line x1="8" y1="14" x2="32" y2="14"/>
      <line x1="6" y1="14" x2="6" y2="30"/>
      <line x1="34" y1="14" x2="34" y2="30"/>
      <rect x="16" y="18" width="8" height="6" rx="0.5"/>
      <circle cx="10" cy="32" r="2"/>
      <circle cx="30" cy="32" r="2"/>
      <path d="M6 34 L34 34" stroke-dasharray="2 2"/>
    </svg>`,
    title: 'Rolls While Fully Loaded.',
    body: 'Reposition with the load on — no need to unload and re-rig.',
  },
  {
    icon: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="13" height="13" rx="1"/>
      <rect x="22" y="5" width="13" height="13" rx="1"/>
      <rect x="5" y="22" width="13" height="13" rx="1"/>
      <rect x="22" y="22" width="13" height="13" rx="1"/>
    </svg>`,
    title: 'Modular Interchangeable Components.',
    body: 'Top beams and trolleys interchange within product ranges.',
  },
  {
    icon: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4 L34 10 L34 21 C34 27 27 34 20 36 C13 34 6 27 6 21 L6 10 Z"/>
      <polyline points="14,20 19,25 26,16"/>
    </svg>`,
    title: 'North American Codes.',
    body: 'ASME B30.17, BTH-1, OSHA, CSA B167, CSA S157, CSA W47.2.',
  },
  {
    icon: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="13"/>
      <text x="20" y="24" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="currentColor" stroke="none">10 YR</text>
    </svg>`,
    title: '10-Year Warranty. 125% Load Tested.',
    body: 'Industry-leading warranty. Every unit load-tested to 125% of rated capacity with a Certificate of Test.',
  },
];
