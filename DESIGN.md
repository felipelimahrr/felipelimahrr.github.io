---
name: Felipe Lima — Video Maker & Creator
description: One dark room, a cut-out portrait in front of his own name, and thin white lines drawn at the FL mark's angle.
colors:
  ground: "#1f2020"
  surface: "#262727"
  veil: "#141515"
  device: "#0d0e0e"
  device-edge: "#3b3c3c"
  ink: "#ffffff"
  text: "#d9d9d9"
  muted: "#a6a7a7"
  mark-red: "#ff3131"
  mark-red-text: "#ff4a4a"
  on-red: "#1a1b1b"
  hairline: "rgba(255, 255, 255, 0.34)"
  hairline-soft: "rgba(255, 255, 255, 0.16)"
typography:
  display:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "15.6cqi"
    fontWeight: 700
    lineHeight: 0.82
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 4.6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  figure:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 7vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 2vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  statement:
    fontFamily: "Open Sans, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1rem + 0.9vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Open Sans, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.94rem + 0.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
  description:
    fontFamily: "Lexend Exa, Open Sans, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 300
    lineHeight: 1.7
    letterSpacing: "0.02em"
  role:
    fontFamily: "Lexend Exa, Open Sans, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 0.9rem + 1.2vw, 2rem)"
    fontWeight: 200
    lineHeight: 1.2
    letterSpacing: "0.03em"
  label:
    fontFamily: "Lexend Exa, Open Sans, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 300
    letterSpacing: "0.18em"
rounded:
  none: "0px"
  device: "30px"
  device-screen: "23px"
spacing:
  gutter: "clamp(16px, 2.4vw, 36px)"
  gap: "clamp(8px, 0.9vw, 14px)"
  section: "clamp(104px, 12vw, 180px)"
  wrap: "1240px"
  nav-height: "68px"
components:
  button-accent:
    backgroundColor: "{colors.mark-red}"
    textColor: "{colors.on-red}"
    rounded: "{rounded.none}"
    padding: "15px 22px"
    height: "52px"
  button-accent-hover:
    backgroundColor: "{colors.mark-red-text}"
  button-ghost:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "15px 22px"
    height: "52px"
  nav:
    textColor: "{colors.ink}"
    height: "{spacing.nav-height}"
    padding: "0 {spacing.gutter}"
  nav-solid:
    backgroundColor: "{colors.ground}"
  nav-cta:
    textColor: "{colors.mark-red-text}"
  media-tile:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
  media-sound-chip:
    backgroundColor: "{colors.veil}"
    textColor: "{colors.ink}"
    padding: "0 10px"
    height: "34px"
  media-tag:
    backgroundColor: "{colors.veil}"
    textColor: "{colors.ink}"
    typography: "{typography.description}"
    padding: "6px 9px"
  phone-frame:
    backgroundColor: "{colors.device}"
    rounded: "{rounded.device}"
    padding: "7px"
  case-nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.description}"
    padding: "16px 0 14px"
  case-nav-link-active:
    textColor: "{colors.ink}"
  whatsapp-dock:
    backgroundColor: "{colors.mark-red}"
    textColor: "{colors.on-red}"
    padding: "12px 16px"
    height: "48px"
---

# Design System: Felipe Lima — Video Maker & Creator

## Overview

**Creative North Star: "The Dark Room Cut by the Mark"**

The site is one continuous #1f2020 room from top to bottom. The hero is a portrait, not a reel: a black-and-white cut-out of Felipe stands centred and bottom-anchored in front of his own name, set huge, uppercase and pale grey behind him, with a thin elliptical orbit drawn around him and the five section links resting on that line. Below the hero the room is calm and capped at a 1240px reading width; work is shown as bare 9:16 video tiles, and each case presents its main piece inside a drawn phone next to a grid of stills.

Structure comes from thin white hairlines: section rules that draw themselves in, the orbit ellipse, a single 29-degree diagonal in the hero, short rules under case names, hairline tops on services and results. The FL mark's slab angle still governs every diagonal and the diagonal clip-path wipe that reveals media. Type does the heavy lifting: Inter Bold speaks, Open Sans explains, thin wide Lexend Exa describes. Red belongs to the mark and to the WhatsApp action.

Motion is cinematic and scrubbed to the scroll: on every load the FL mark is drawn as a red outline, fills, and flies to the nav corner while the curtain wipes away diagonally; the portrait rises out of a blur, the name's letters rise in, the orbit draws itself. On scroll the orbit items travel along the page into the top bar links while the ellipse fades.

**Key Characteristics:**
- One dark ground; light and color come from the photography and footage.
- A cut-out portrait in front of the uppercase name, ringed by a hairline orbit that carries the menu.
- Thin white hairlines as identity: section rules, the orbit, one 29-degree diagonal, short case rules.
- Square corners everywhere except the drawn phone device.
- Red reserved for the FL mark and the WhatsApp action.
- Content capped at 1240px; media vertical-first (9:16).

## Colors

A near-black warm-neutral room with white and pale grey type, and one red that belongs to the logo.

### Primary
- **Mark Red** (mark-red): the FL mark (nav, intro outline and fill, the closing mark once it lights up), the accent button, the fixed WhatsApp dock, focus outlines and text selection. Red fields carry dark on-red text, never white.
- **Mark Red, Text Tone** (mark-red-text): the same red one step lighter, used only for small red text on the dark ground (the nav WhatsApp link) and as the accent button's hover fill.

### Neutral
- **Room Ground** (ground): the page, the solid nav, the sticky case navigator, the mobile menu, the intro curtain.
- **Raised Room** (surface): empty media frames, gallery stills before load, and the closing band.
- **Veil** (veil): the neutral dark behind text that sits on footage, always translucent (0.78 on the sound chip, 0.82 on tags).
- **Device Black** (device) and **Device Edge** (device-edge): only the drawn phone frame (body and 1px border) and the full-screen player's stage.
- **Ink** (ink): headlines, nav and orbit text, orbit dots, statements, result figures.
- **Pale Grey** (text): the hero name, body text, captions, case prose, and the small square on placeholder tags.
- **Muted Grey** (muted): inactive case-navigator links and the small services list label.
- **Dark on Red** (on-red): text and icons on red fills.
- **Hairline** (hairline) and **Soft Hairline** (hairline-soft): all thin rules. The stronger line draws section rules, the orbit, the hero diagonal, case rules and ghost-button outlines; the soft line draws list and figure tops, the nav underline, menu dividers and the case navigator's bottom edge.

### Named Rules
**The Two Red Places Rule.** Mark Red appears only on the FL mark and the WhatsApp action (plus the focus ring and selection, which are accessibility state). No red headings, red icons, red rules or red decoration.

**The Lit-By-Picture Rule.** The room has one background. Contrast and color come from the photography and footage; any plate over media is the neutral Veil, never a tinted gradient.

## Typography

**Display Font:** Inter Bold (with Helvetica Neue, Arial)
**Body Font:** Open Sans (with Segoe UI, Arial)
**Description Font:** Lexend Exa, thin and wide (with Open Sans, Arial); stands in for CyGrotesk Key Thin.

**Character:** A heavy, tightly tracked grotesk shouting the name and titles against a thin, wide, airy face that whispers the descriptions; Open Sans sits between them for anything meant to be read.

### Hierarchy
- **Display** (Inter 700, 15.6cqi of the hero width, line-height 0.82, -0.04em, uppercase, Pale Grey): "FELIPE LIMA" on one line behind the portrait, centred at 47% of the hero height. Below 760px it breaks into two stacked lines at 29cqi (line-height 0.84), set just under the nav.
- **Headline** (Inter 700, clamp(2.25rem, 4.6vw, 4.5rem), 0.98, -0.04em): section titles, balanced wrap, revealed word by word from a mask.
- **Figure** (Inter 700, clamp(3rem, 7vw, 6rem), 0.95, -0.04em, tabular numerals): result numbers.
- **Title** (Inter 700, clamp(1.375rem, 2vw, 2rem), 1.1, -0.03em): services list items; case names use the same size uppercase at 1.05 and -0.02em.
- **Statement** (Open Sans 400, clamp(1.25rem, 1rem + 0.9vw, 1.875rem), 1.45, max 34ch, white): the bio.
- **Body** (Open Sans 400, clamp(1rem, 0.94rem + 0.25vw, 1.125rem), 1.6): reading text in Pale Grey; result notes at 36ch, work captions at 0.875rem.
- **Description** (Lexend Exa 300, 0.875rem, 1.7, 0.02em): case navigator, footer row, phone number, player caption; case prose at 0.9375rem, 1.75, max 60ch.
- **Role** (Lexend Exa 200, clamp(1.25rem, 0.9rem + 1.2vw, 2rem), 1.2, 0.03em, max 12ch): "Video Maker & Creator" top-left of the hero.
- **Label** (Lexend Exa 300, 0.8125rem, 0.18em, uppercase): the nav wordmark; media tags use the face at 0.03em in sentence case.

### Named Rules
**The Three Voices Rule.** Inter Bold speaks, Open Sans explains, Lexend Exa thin describes. Do not set descriptions in Open Sans or titles in Lexend Exa.

**The Tight Display Rule.** Every Inter Bold setting is tracked negative (-0.01em on buttons, -0.02em to -0.04em on titles); thin Lexend Exa is always tracked positive.

## Layout

The hero is full-bleed (100svh, min 600px; 640px on phones) and uses container-query units so the name always spans the same share of the width. Everything after it sits in a centred wrap capped at 1240px plus fluid gutters (clamp(16px, 2.4vw, 36px)), with generous vertical spacing between sections (clamp(104px, 12vw, 180px)). Each section opens with a head: a full-width hairline, then the headline below it.

The hero is a fixed composition: role top-left under the nav, portrait centred and bottom-anchored (min(88svh, 980px) tall; min(64svh, 560px) on phones), the orbit ellipse centred on the portrait, the WhatsApp button bottom-left (full width on phones), "Role para ver" with a down arrow bottom-right (hidden on phones), one diagonal hairline crossing the right side at 70% height.

About follows the hero directly: a 4fr / 8fr split with the headline left and the bio plus a 2-column services list right. Work is a uniform 4-column grid of 9:16 tiles (gap clamp(12px, 1.6vw, 24px)), 2 columns on phones. Cases stack with large gaps (clamp(96px, 11vw, 160px)); each case is a 5fr / 7fr head-and-text row, then a body row of phone frame plus gallery ('grade': 3 by 2 grid sized to the phone height; 'fila': a row of tall stills each 1.07 times the phone width). Results are two columns of figures. The closing band is a 12-column grid with text in the right half over a large outline mark.

Breakpoints at 1024px (about and cases collapse to one column) and 760px (nav height 60px, links collapse to a Menu toggle and full-screen menu, services and results to one column, case body stacks, 'grade' becomes square stills in 3 columns and 'fila' a 2-column grid of 9:16 stills).

## Elevation & Depth

Flat. There are no shadows anywhere. Depth comes from layering in the hero (name behind, portrait in front, orbit and text above), from the portrait's dissolving edges (a mask fading the bottom 14% and the right 12% into the ground), from scrubbed scroll motion (the name drifts up 30%, the portrait settles to 0.94 scale), and from the neutral Veil under text on footage.

### Named Rules
**The No-Shadow Rule.** Separation is a hairline or a tone step, never a box-shadow.

## Shapes

Square corners throughout (0px): buttons, tiles, chips, tags, gallery stills, the 7px orbit dots and tag squares. The single exception is the drawn phone: a 30px outer radius, a 23px screen radius inside 7px of Device Black, a 1px Device Edge border and a pill-shaped camera notch; it exists to read as a phone and is never reused as a generic rounded card.

The mark supplies the other geometry: the 29-degree slab angle (rotate -29deg) for the hero diagonal and the diagonal clip-path wipe that reveals tiles and gallery stills. The orbit is a 1px ellipse, not a diagonal.

### Named Rules
**The Mark Angle Rule.** Any diagonal in the system runs at the FL mark's 29 degrees. No other angles.

**The Hairline Rule.** Lines are 1px, white at 0.34 or 0.16 alpha, and they draw themselves in (scaleX from 0, or stroke-dashoffset for the orbit and marks) rather than appearing.

**The One Device Rule.** Rounded corners belong only to the phone frame that holds a case's main piece.

## Components

### Buttons
Blunt, bold and square.
- **Shape:** square corners (0px), min height 52px.
- **Accent:** Mark Red fill, dark on-red text, Inter 700 at 1rem (-0.01em), 15px by 22px padding, 20px WhatsApp icon left with a 10px gap. Used only for WhatsApp.
- **Ghost:** transparent with a 1px hairline outline and white text; hover brightens the outline to white. Used for Instagram.
- **Hover / Active:** accent shifts to the text-tone red (200ms); press scales to 0.97 (160ms, ease-out). Hover rules apply only on fine pointers. Focus is a 2px red outline at 3px offset.

### Navigation
Fixed bar, transparent over the hero and solid ground after 45% of the hero has scrolled. Left: the red FL mark (14 by 34px) plus "FELIPE LIMA" in the uppercase wide label. Right: five Open Sans links at 0.9375rem with a 1px underline that wipes in from the left on hover and stays on the active section; the WhatsApp link sits last in text-tone red, weight 600. A soft hairline runs under the bar inside the gutters. While the orbit menu is showing, the bar links are hidden. Below 760px the links become a "Menu" toggle opening a full-screen ground menu with Inter Bold items divided by soft hairlines and the accent button at the foot.

### Orbit Menu (signature)
The five section links laid on a 1px hairline ellipse around the portrait (centre 56% down, 33% by 41% of the hero; wider and lower on phones). Each item is a 7px white square sitting exactly on the line plus an Open Sans label (clamp(0.9375rem, 0.85rem + 0.3vw, 1.0625rem)) on the outer side; on phones the labels sit inside the ring. On scroll the items travel, scrubbed, into the matching bar links (or the Menu toggle) while the ellipse fades; scrolling back returns them. Reduced motion removes the orbit and shows the bar links.

### Hero Portrait
A black-and-white cut-out photograph, centred and bottom-anchored in front of the Display name, its straight edges dissolved into the ground by a gradient mask. It enters by rising out of a blur after the intro.

### Media Tile
The unit of all work. A square-cornered 9:16 frame on Raised Room with the poster image covering it and a muted, looping video that fades in when playing (hover or focus on fine pointers; 60% in view on touch). Bottom-right a "Ver com som" chip: 34px tall, Veil at 0.78, sound icon plus 0.8125rem text, lifting 2px on hover. Clicking opens the full-screen Device Black player with sound. A slot without video shows a "Vídeo em breve" tag bottom-left: Veil at 0.82, Lexend Exa 0.8125rem, led by a 7px Pale Grey square. Work tiles carry an Open Sans 0.875rem caption 12px below.

### Case
An uppercase Inter Bold name (optionally under a greyscale client logo, 72px tall) with a 72px hairline rule beneath, Lexend Exa prose beside it, then the phone frame holding the case's video or image beside the gallery. Gallery stills sit on Raised Room and zoom to 1.04 on hover.

### Case Navigator
A sticky text strip under the nav (ground background, soft hairline bottom edge) listing every case in Lexend Exa at 0.875rem, Muted Grey; the case in view turns white with a 1px white underline drawn from the left. Scrolls horizontally without a scrollbar on narrow screens.

### Section Head
A full-width hairline that draws from the left, then the headline revealing word by word from a mask. No label or kicker above it.

### Results
Two large Inter Bold figures, each under a soft hairline top with a short Open Sans note below.

### WhatsApp Dock
A fixed square-cornered red button (48px min height) bottom-right, fading in with a 16px rise after 85% of the hero has scrolled and leaving when the closing band arrives.

### Intro Sequence
Runs on every page load. On empty ground the three mark slabs are drawn as red outlines (stroke-dashoffset, staggered), fill red, lose their outline, and the mark flies to the nav mark's position while the ground curtain wipes away diagonally; then the portrait, name letters, orbit line, diagonal and nav arrive. Any click, key, wheel or touch jumps it to the end; reduced motion removes it.

### Footer
A single Lexend Exa description row: copyright with name and role, the Instagram handle, and "Voltar ao topo", spread across the wrap.

## Do's and Don'ts

### Do:
- **Do** keep the whole page on Room Ground and let photography and footage provide light and color.
- **Do** reveal media with the diagonal clip-path wipe (expo.inOut, 1.1 to 1.2s) and draw hairlines in with scaleX or stroke-dashoffset.
- **Do** run every diagonal at the mark's 29 degrees (rotate -29deg).
- **Do** set titles in Inter 700 with negative tracking and descriptions in thin Lexend Exa with positive tracking.
- **Do** put dark on-red text on red fills; use the text-tone red for small red text on the dark ground.
- **Do** keep content inside the 1240px wrap; only the hero and the closing band go full-bleed.
- **Do** gate hover effects behind (hover: hover) and (pointer: fine), and honor prefers-reduced-motion by skipping the intro, the orbit, Lenis and GSAP reveals.

### Don't:
- **Don't** use Mark Red outside the FL mark and the WhatsApp action.
- **Don't** round corners anywhere but the phone frame, or introduce cards with borders and padding; work sits in bare square media frames.
- **Don't** add box-shadows or glows.
- **Don't** use diagonals at any angle other than the mark's.
- **Don't** put a kicker or eyebrow label above section headlines; the hairline is the section marker.
- **Don't** tint the plates over footage; the veil is neutral.
