# Bobby's Restaurant & Lounge - Website Development Plan

> **Purpose**: This document serves as the comprehensive planning guide for building Bobby's Restaurant & Lounge website using Claude Code. It contains design specifications, technical requirements, and implementation phases.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Restaurant Information](#restaurant-information)
3. [Design Direction](#design-direction)
4. [Website Best Practices](#website-best-practices)
5. [Technical Stack](#technical-stack)
6. [Site Architecture](#site-architecture)
7. [Component Breakdown](#component-breakdown)
8. [Implementation Phases](#implementation-phases)
9. [Claude Code Workflow](#claude-code-workflow)
10. [File Structure](#file-structure)
11. [Quality Checklist](#quality-checklist)

---

## Project Overview

**Client**: Bobby's Restaurant & Lounge  
**Location**: 3450 Ocean Dr, Vero Beach, FL 32963-1683  
**Type**: Classic American Bar & Grill  
**Goal**: Create a warm, inviting website that captures the classic American bar atmosphere while providing essential restaurant information and encouraging visits/orders.

**Source**: [TripAdvisor Listing](https://www.tripadvisor.com/Restaurant_Review-g34709-d646786-Reviews-Bobby_s_Restaurant_Lounge-Vero_Beach_Florida.html)

---

## Restaurant Information

### Basic Details

| Field | Value |
|-------|-------|
| **Name** | Bobby's Restaurant & Lounge |
| **Rating** | 4.0/5 (821 reviews) |
| **Ranking** | #18 of 284 Restaurants in Vero Beach |
| **Cuisine** | American, Bar |
| **Price Range** | $$ - $$$ |
| **Phone** | +1 772-231-6996 |
| **Address** | 3450 Ocean Dr, Vero Beach, FL 32963-1683 |

### Hours of Operation

| Day | Hours |
|-----|-------|
| Sunday - Saturday | 11:30 AM - 1:00 AM |
| Sunday Brunch | 11:30 AM - 2:30 PM |

### Features

- Vegetarian friendly
- Gluten free options
- Accepts Credit Cards
- Lunch, Dinner, Brunch, Late Night
- Parking Available

### Review Ratings

| Category | Score |
|----------|-------|
| Service | 4.1 |
| Food | 4.1 |
| Value | 3.7 |
| Atmosphere | 3.8 |

### Menu Highlights

**Appetizers**: Spinach Artichoke Supreme ($15), Danish Baby Back Ribs ($16), Calamari ($14), Fried Shrimp ($24), Homemade Mozzarella Sticks ($16)

**Char-Broiled Burgers**: Bobby's Burger ($16), All-American Burger ($14), Cheeseburger ($15), Bacon-Cheeseburger ($16)

**House Specialties**: Bobby's Baby Back Ribs ($34), Bobby's French Dip Au Jus ($20), Steak Tidbits ($18), Delmonico Steak Sandwich ($20)

**Steaks**: New York Strip (Market), Filet Mignon (Market), Ribeye Steak (Market), Chopped Sirloin ($30)

**Seafood**: Sea Scallops ($30), Shrimp Scampi ($34), Fresh Catch of the Day (Market)

**Wine List**: Extensive selection including Sutter Home wines by the glass, premium selections from Napa Valley, Sonoma, and international regions

---

## Design Direction

### Aesthetic: "Warm Wood & Whiskey"

**Tone**: Vintage Americana meets coastal casual — think dark wood paneling, warm amber lighting, brass accents, and a hint of oceanside charm. The vibe of a neighborhood bar that's been around for decades.

**Memorable Element**: A rich, inviting atmosphere that feels like stepping into the restaurant itself — warm, unpretentious, and welcoming.

### Color Palette

```css
:root {
  /* Primary Colors */
  --color-mahogany: #1a1612;        /* Deep mahogany - backgrounds, headers */
  --color-aged-wood: #2d231a;       /* Aged wood - card backgrounds */
  --color-dark-oak: #3d2e1f;        /* Dark oak - secondary backgrounds */
  
  /* Accent Colors */
  --color-brass: #c9a227;           /* Brass/whiskey - buttons, highlights */
  --color-brass-light: #d4b94a;     /* Light brass - hover states */
  --color-brass-dark: #a68520;      /* Dark brass - active states */
  
  /* Neutral Colors */
  --color-cream: #f5f0e6;           /* Aged paper - text, light sections */
  --color-cream-dark: #e8e0d0;      /* Darker cream - borders */
  --color-warm-white: #faf8f5;      /* Warm white - backgrounds */
  
  /* Accent Red */
  --color-bar-red: #8b2635;         /* Classic bar red - CTAs, specials */
  --color-bar-red-light: #a63344;   /* Light red - hover */
  
  /* Text Colors */
  --color-text-dark: #1a1612;       /* Primary text */
  --color-text-light: #f5f0e6;      /* Light text on dark bg */
  --color-text-muted: #6b5b4f;      /* Muted text */
}
```

### Typography

```css
/* Display/Logo - Classic, refined serif */
--font-display: 'Playfair Display', Georgia, serif;

/* Headings - Bold, all-caps for menu sections */
--font-heading: 'Bebas Neue', 'Oswald', sans-serif;

/* Body - Clean, readable */
--font-body: 'Lato', 'Source Sans Pro', sans-serif;

/* Menu Items - Slightly decorative */
--font-menu: 'Libre Baskerville', Georgia, serif;
```

**Google Fonts Import**:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Bebas+Neue&family=Lato:wght@300;400;700&family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet">
```

### Visual Elements

**Textures to incorporate**:
- Subtle wood grain background overlays
- Paper/menu texture for content areas
- Brass/gold line dividers between sections
- Soft vignette shadows for warm bar lighting feel

**Signature touches**:
- Neon-style glowing text for logo/tagline (subtle)
- Vintage-style menu cards with dotted leader lines
- Photo gallery showing cozy interior
- Decorative brass corner ornaments
- Warm gradient overlays on images

### Design Inspiration

Classic American Bar Elements:
- Dark wood paneling aesthetic
- Polished brass fixtures and accents
- Warm amber lighting feel
- Leather texture accents
- Vintage signage typography
- Aged paper/menu aesthetics
- Brick or stone texture hints
- Stained glass color touches

---

## Website Best Practices

### Critical Features (Research-Backed)

Based on 2025 restaurant website research:

1. **Mobile-First Design** (62.45% of traffic is mobile)
   - Responsive layouts that work on all devices
   - Touch-friendly navigation
   - Fast load times (<3 seconds)
   - Click-to-call phone number

2. **Easy Navigation** (76% say finding info easily is most important)
   - Menu accessible in 1-2 clicks
   - Clear navigation labels
   - Sticky header with key links
   - Prominent contact information

3. **High-Quality Photography**
   - Professional food photos
   - Interior atmosphere shots
   - Appetizing presentation
   - Optimized image sizes

4. **Essential Information Above the Fold**
   - Hours of operation
   - Location/address
   - Phone number
   - Quick links to menu/reservations

5. **Clear Calls-to-Action**
   - "View Menu" prominent
   - "Call Now" for mobile
   - "Get Directions" with map integration
   - Online ordering if available

6. **SEO Optimization**
   - Local keywords (Vero Beach, Florida)
   - Schema markup for restaurants
   - Meta descriptions
   - Fast page load

7. **Social Proof**
   - TripAdvisor rating display
   - Customer testimonials
   - Review snippets

8. **Accessibility**
   - Alt text for images
   - Keyboard navigation
   - Sufficient color contrast
   - Screen reader friendly

### What to Avoid

- Slow loading pages
- Auto-playing audio/video with sound
- Difficult to find menu
- Outdated information
- Poor mobile experience
- Generic stock photos
- Cluttered design
- Missing contact information

---

## Technical Stack

### Recommended: HTML/CSS/JavaScript (Vanilla)

**Why this stack for learning**:
- Direct correlation to C++/Java fundamentals (structured, explicit)
- No framework complexity to learn simultaneously
- Clear file organization
- Easy to debug and understand
- Portable and lightweight
- Great foundation before learning React/Vue

### File Technologies

| Purpose | Technology |
|---------|------------|
| Structure | HTML5 |
| Styling | CSS3 (with CSS Variables) |
| Interactivity | Vanilla JavaScript |
| Icons | Font Awesome or Lucide |
| Fonts | Google Fonts |
| Maps | Google Maps Embed |

### Alternative: React (For More Experience)

If you want to practice more advanced patterns:
- Create React App or Vite
- Component-based architecture
- State management with hooks
- Similar to OOP concepts from Java

---

## Site Architecture

### Page Structure

```
Bobby's Restaurant Website
│
├── index.html (Home Page)
│   ├── Hero Section
│   ├── Quick Info Bar (Hours, Phone, Address)
│   ├── About Preview
│   ├── Menu Highlights
│   ├── Atmosphere Gallery
│   └── Call-to-Action
│
├── menu.html (Full Menu)
│   ├── Menu Navigation
│   ├── Appetizers
│   ├── Soups & Salads
│   ├── Burgers
│   ├── Sandwiches
│   ├── House Specialties
│   ├── Steaks & Seafood
│   └── Wine List
│
├── about.html (About Us)
│   ├── Our Story
│   ├── The Atmosphere
│   ├── Meet the Team (optional)
│   └── Photo Gallery
│
├── specials.html (Events & Specials)
│   ├── Sunday Brunch Feature
│   ├── Daily Specials
│   ├── Happy Hour
│   └── Private Events
│
└── contact.html (Contact & Location)
    ├── Contact Form
    ├── Map Integration
    ├── Hours
    ├── Directions
    └── Phone/Address
```

### Navigation Structure

```
[Logo] Bobby's                    [Menu] [About] [Specials] [Contact] [Call Now]
```

Mobile:
```
[Logo] Bobby's                    [☰ Hamburger Menu]
```

---

## Component Breakdown

### 1. Header/Navigation

```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo]  Bobby's Restaurant & Lounge                            │
│                                                                 │
│  Menu    About    Specials    Contact         📞 (772) 231-6996│
└─────────────────────────────────────────────────────────────────┘
```

**Features**:
- Sticky on scroll
- Transparent → solid background transition
- Mobile hamburger menu
- Click-to-call on mobile

### 2. Hero Section

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│     ╔═══════════════════════════════════════════════════╗       │
│     ║                                                   ║       │
│     ║         BOBBY'S RESTAURANT & LOUNGE              ║       │
│     ║                                                   ║       │
│     ║    "A Vero Beach Tradition Since [Year]"         ║       │
│     ║                                                   ║       │
│     ║         [ View Our Menu ]                        ║       │
│     ║                                                   ║       │
│     ╚═══════════════════════════════════════════════════╝       │
│                                                                 │
│  [Background: Interior/Food Photo with warm overlay]            │
└─────────────────────────────────────────────────────────────────┘
```

### 3. Quick Info Bar

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   📍 3450 Ocean Dr     🕐 Open until 1:00 AM     📞 772-231-6996│
│      Vero Beach, FL       Today: 11:30 AM                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 4. Menu Card Component

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   BOBBY'S BURGER ................................ $16           │
│   10 oz. Oversized sirloin burger smothered in                 │
│   sautéed mushrooms, onions & melted cheese                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Design**: Dotted leader lines between item name and price (like classic menus)

### 5. Footer

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  BOBBY'S              HOURS              CONNECT               │
│  Restaurant           Sun-Sat            📍 Get Directions     │
│  & Lounge            11:30 AM -          📞 (772) 231-6996     │
│                       1:00 AM            📧 Contact Us          │
│  3450 Ocean Dr                                                  │
│  Vero Beach, FL                          [TripAdvisor Logo]    │
│  32963                                   ⭐⭐⭐⭐ 4.0            │
│                                                                 │
│─────────────────────────────────────────────────────────────────│
│  © 2026 Bobby's Restaurant & Lounge. All rights reserved.      │
└─────────────────────────────────────────────────────────────────┘
```

---

## Implementation Phases

### Phase 1: Project Setup & Foundation
**Time Estimate**: 30 minutes

**Tasks**:
1. Create project directory structure
2. Set up base HTML template
3. Create CSS reset and variables file
4. Add Google Fonts
5. Create basic navigation HTML

**Deliverables**:
- `index.html` skeleton
- `css/reset.css`
- `css/variables.css`
- `css/main.css`
- `js/main.js`

### Phase 2: Header & Navigation
**Time Estimate**: 1-2 hours

**Tasks**:
1. Build desktop navigation
2. Create mobile hamburger menu
3. Add sticky scroll behavior
4. Style with wood/brass aesthetic
5. Make click-to-call functional

**Key CSS**:
- Flexbox for layout
- Position sticky
- CSS transitions for hover effects
- Media queries for mobile

### Phase 3: Hero Section
**Time Estimate**: 1-2 hours

**Tasks**:
1. Create full-viewport hero
2. Add background image with overlay
3. Style headline and tagline
4. Create call-to-action button
5. Add subtle animation on load

**Key CSS**:
- Background image techniques
- Gradient overlays
- Text shadow for readability
- CSS animations

### Phase 4: Home Page Content
**Time Estimate**: 2-3 hours

**Tasks**:
1. Build quick info bar
2. Create "About" preview section
3. Design menu highlights grid
4. Build atmosphere gallery
5. Add testimonial/rating section

**Key CSS**:
- CSS Grid for layouts
- Card component styling
- Image gallery techniques

### Phase 5: Menu Page
**Time Estimate**: 3-4 hours

**Tasks**:
1. Create menu category navigation
2. Build menu item components
3. Style with classic menu aesthetic
4. Add dotted leader lines
5. Include wine list section
6. Make responsive for mobile

**Key CSS**:
- Flexbox for menu items
- Border techniques for dotted lines
- Typography hierarchy

### Phase 6: Additional Pages
**Time Estimate**: 2-3 hours

**Tasks**:
1. Build About page with story
2. Create Specials page
3. Design Contact page
4. Add Google Maps embed
5. Create contact form (visual only or functional)

### Phase 7: Footer & Polish
**Time Estimate**: 1-2 hours

**Tasks**:
1. Build footer component
2. Add smooth scroll navigation
3. Implement scroll-to-top button
4. Add page transitions
5. Optimize images
6. Test responsiveness

### Phase 8: Final Testing & Launch
**Time Estimate**: 1-2 hours

**Tasks**:
1. Cross-browser testing
2. Mobile device testing
3. Performance optimization
4. Accessibility check
5. Final review

---

## Claude Code Workflow

### Setting Up Your Project

1. **Create CLAUDE.md file** in your project root:

```markdown
# Bobby's Restaurant Website

## Project Overview
A classic American bar-style website for Bobby's Restaurant & Lounge in Vero Beach, FL.

## Tech Stack
- HTML5
- CSS3 (vanilla, with CSS custom properties)
- Vanilla JavaScript

## Key Commands
- Live server: Use VS Code Live Server extension or `npx serve`
- No build step required

## Code Style
- Use semantic HTML elements
- CSS class naming: BEM-style (block__element--modifier)
- JavaScript: ES6+ features OK
- Comments for complex sections

## Design System
- See css/variables.css for color palette and typography
- Mobile-first responsive design
- Breakpoints: 768px (tablet), 1024px (desktop)

## File Structure
/bobbys-website
├── index.html
├── menu.html
├── about.html
├── specials.html
├── contact.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── main.css
│   └── components/
├── js/
│   └── main.js
├── images/
└── CLAUDE.md
```

### Effective Claude Code Prompts

**For Starting a New Component**:
```
Read the bobbys-website-plan.md file first, then create the [component name] 
following the design specifications. Use the color palette and typography 
from the design section.
```

**For Styling**:
```
Style the [component] with the "Warm Wood & Whiskey" aesthetic described 
in the plan. Use dark wood colors, brass accents, and warm lighting effects.
```

**For Debugging**:
```
The [component] isn't displaying correctly on mobile. Check the responsive 
styles and fix the layout issues.
```

**For Code Review**:
```
Review the [file] for accessibility issues, semantic HTML, and 
CSS best practices.
```

### Recommended Claude Code Commands

Use these in your `.claude/commands/` folder:

**build-component.md**:
```markdown
Build the $ARGUMENTS component for Bobby's website following these steps:
1. Read the design specifications from bobbys-website-plan.md
2. Create the HTML structure with semantic elements
3. Add CSS styles matching the "Warm Wood & Whiskey" aesthetic
4. Add any necessary JavaScript functionality
5. Ensure mobile responsiveness
6. Test the component
```

**style-check.md**:
```markdown
Review the CSS for $ARGUMENTS and ensure it:
1. Uses the design system colors from variables.css
2. Follows mobile-first responsive patterns
3. Has appropriate hover/focus states
4. Maintains consistent spacing
5. Uses the correct typography
```

---

## File Structure

```
bobbys-website/
│
├── CLAUDE.md                    # Claude Code project context
├── bobbys-website-plan.md       # This planning document
│
├── index.html                   # Home page
├── menu.html                    # Full menu page
├── about.html                   # About/story page
├── specials.html                # Events & specials page
├── contact.html                 # Contact & location page
│
├── css/
│   ├── reset.css                # CSS reset/normalize
│   ├── variables.css            # Design tokens (colors, fonts, spacing)
│   ├── main.css                 # Main stylesheet
│   ├── components/
│   │   ├── header.css           # Navigation styles
│   │   ├── hero.css             # Hero section styles
│   │   ├── menu-card.css        # Menu item component
│   │   ├── gallery.css          # Image gallery styles
│   │   └── footer.css           # Footer styles
│   └── pages/
│       ├── home.css             # Home page specific
│       ├── menu.css             # Menu page specific
│       └── contact.css          # Contact page specific
│
├── js/
│   ├── main.js                  # Main JavaScript
│   ├── navigation.js            # Mobile menu toggle
│   └── gallery.js               # Image gallery (if needed)
│
├── images/
│   ├── logo/
│   │   ├── logo.svg
│   │   └── logo-light.svg
│   ├── hero/
│   │   └── interior-hero.jpg
│   ├── food/
│   │   └── [food photos]
│   ├── interior/
│   │   └── [atmosphere photos]
│   └── icons/
│       └── [any custom icons]
│
└── .claude/
    └── commands/
        ├── build-component.md
        └── style-check.md
```

---

## Quality Checklist

### Before Each Phase Completion

- [ ] HTML validates (no errors)
- [ ] CSS validates (no errors)
- [ ] No console errors in JavaScript
- [ ] Responsive at all breakpoints (320px, 768px, 1024px, 1440px)
- [ ] All links work
- [ ] Images have alt text
- [ ] Colors meet contrast requirements (WCAG AA)
- [ ] Interactive elements have focus states
- [ ] Page loads in under 3 seconds

### Final Launch Checklist

- [ ] All pages complete and linked
- [ ] Meta tags (title, description) on all pages
- [ ] Favicon added
- [ ] Open Graph tags for social sharing
- [ ] Google Maps integration working
- [ ] Phone number is click-to-call on mobile
- [ ] Form validation (if contact form)
- [ ] Tested on Chrome, Firefox, Safari
- [ ] Tested on iOS and Android
- [ ] Images optimized and lazy-loaded
- [ ] 404 page created
- [ ] Analytics ready (if needed)

---

## Quick Reference

### Color Classes to Create

```css
.bg-mahogany { background-color: var(--color-mahogany); }
.bg-aged-wood { background-color: var(--color-aged-wood); }
.bg-cream { background-color: var(--color-cream); }
.text-brass { color: var(--color-brass); }
.text-cream { color: var(--color-cream); }
.text-bar-red { color: var(--color-bar-red); }
```

### Spacing Scale

```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
--space-3xl: 4rem;     /* 64px */
```

### Breakpoints

```css
/* Mobile first - no media query needed for mobile */

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1440px) { }
```

---

## Getting Started with Claude Code

1. **Install Claude Code** (if not already installed)
2. **Create your project folder**: `mkdir bobbys-website && cd bobbys-website`
3. **Initialize with Claude Code**: `claude`
4. **First prompt**: "Read the bobbys-website-plan.md file and help me set up the project structure with all the base files."
5. **Follow the phases** in this document, asking Claude to build each component

**Tip**: Keep this document open or paste relevant sections when working with Claude Code. The more context you provide, the better the results!

---

*Document created: January 2026*  
*For use with Claude Code by Anthropic*
