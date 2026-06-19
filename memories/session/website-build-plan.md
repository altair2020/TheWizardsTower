# Website Build Plan — The Wizard's Tower (OSM)

## Status: Planning → Building

---

## Asset Inventory

### Images (9 confirmed, `./images/`)

All images viewed and verified 2026-05-23.

#### STATE IMAGES — Blender viewport character portraits (use as bullet-point icons ~80px)

| File | What you actually see | Alt text for HTML | Icon usage |
|------|----------------------|-------------------|------------|
| `image_001.png` | Close-up bust. Large dome-shaped brown hair, dark bushy beard, prominent pointed ears, bright green eyes, warm expression. Leather shoulder pads with bolt studs. Grey Blender viewport background. | Hero portrait — curious expression | Story beat 1 — "The call arrives" |
| `image_002.png` | Low-angle T-pose crop (upper body, arms extended). Distinctive swept-back hair with multiple sections pinned by grey metal clips/screws — punk warrior look. Brown goatee. Prominent pointed ears. Green eyes with skeptical squint. Brown leather shoulder guards with bolt studs. Blender grey grid viewport, green axis line visible. | Hero portrait — skeptical look | Story beat 2 — "The Dwarf Lords plead" |
| `image_003.png` | Very close face crop. Short round brown hair cap, heavy brown goatee, large goblin ears, intense squinting green eyes. Grey chest plate, brown studed shoulder guards. Expression: stern, focused. Blender viewport. | Hero portrait — battle-ready | Story beat 3 — "The goblin menace stirs" |

#### CHARACTER MODEL

| File | What you actually see | Alt text for HTML | Section usage |
|------|----------------------|-------------------|---------------|
| `image.png` | Full body T-pose. Low-poly goblin-eared dwarf warrior. Brown top-knot bun hair. Brown goatee. Green eyes. Layered brown leather armour: chest plate, padded shoulders with bolt studs, grey under-tunic, leather trousers, dark boots. Fingerless gloves. Belt with square buckle. Blender grey grid background. | The hero — full character reveal in leather armour | Meet the Hero section — "before" |

#### IN-ENGINE SCREENSHOTS — outdoors

| File | What you actually see | Alt text for HTML | Section usage |
|------|----------------------|-------------------|---------------|
| `image_004.png` | Hero in full ornate black plate armour with runic/geometric cross engravings. Open-faced dark angular helm. Goblin ears and green eyes visible. Wizard NPC visible upper-right (tall dark-robed figure, wide-brim hat, white hair). Stone path, dark trees. Editor XYZ gizmo at feet. | The hero in endgame black plate armour — the Wizard watches | Meet the Hero — "after" / gear progression |
| `image_005.png` | Hero in black plate armour wearing a dark angular visor/face mask — glowing green eyes peering through. More menacing appearance. Enemy/NPC with orange fire glow visible upper-right. Dark outdoor scene, distant green foliage. | The hero fully armoured, visor down — night encounter | About the Game / cinematic shot |

#### IN-ENGINE SCREENSHOTS — dungeon combat

| File | What you actually see | Alt text for HTML | Section usage |
|------|----------------------|-------------------|---------------|
| `image_006.png` | Very close dramatic crop. Hero in leather armour and dark angular visor helm, wide green eyes, enormous bushy beard. Raised glowing amber/gold shield (green rim) blocking incoming red cube projectiles. Fallen sword at bottom-left. White selection ring. Dungeon floor visible. | Hero blocking a barrage of projectiles with a glowing shield | Gameplay Features highlight |
| `image_007.png` | Mid-shot. Hero in leather armour with small open-faced helm (brown, small decorative horn/spike). Dark bushy beard. Top-knot hair visible above helm. Holding glowing golden shield to right side. Red cube projectiles on both sides. Dark dungeon background. Advancing forward. | Hero advancing through the dungeon, shield raised | Gallery |
| `image_008.png` | Wide dungeon combat. Hero (leather armour, bun hair) holding glowing amber shield. Multiple enemies simultaneously: skeletal/zombie figure with shield on left, small armoured goblin on right. Red projectiles scattered. Black-and-yellow checkerboard dungeon floor. Selection ring visible. | The hero surrounded by enemies on the dungeon floor | Hero banner (above-fold backdrop) + Gallery |

### YouTube Videos (6 unique, `youtubelinks.txt`)

| ID | Embed URL |
|----|-----------|
| `X74Gjh8vBUM` | https://www.youtube.com/embed/X74Gjh8vBUM |
| `nGpO5VxHEMk` | https://www.youtube.com/embed/nGpO5VxHEMk |
| `mPnx58qF_ko` | https://www.youtube.com/embed/mPnx58qF_ko |
| `w7AVl_Lo7YE` | https://www.youtube.com/embed/w7AVl_Lo7YE |
| `EB7Y82HQh2Q` | https://www.youtube.com/embed/EB7Y82HQh2Q |
| `zizwpBhn2oE` | https://www.youtube.com/embed/zizwpBhn2oE |

---

## Files to Create

| File | Purpose |
|------|---------|
| `index.html` | Main page — lean HTML shell + critical CSS inline |
| `style.css` | Full stylesheet — loaded async after above-fold |
| `main.js` | Minimal JS — YouTube facade loader, lightbox, nav scroll |

---

## Page Architecture (top to bottom)

1. **Sticky Nav** — Studio logo "The One Sandaled Men" + "Support on Patreon" CTA
2. **Hero** — Full viewport, game title, tagline, two CTAs, `image_008.png` backdrop
3. **About the Game** — Premise + world description, 2-col layout with `image_005.png`
4. **The Story** — Character state images as visual bullet points next to narrative paragraphs
   - `image_001.png` → "The wizard arrives in the Magical Kingdom..."
   - `image_002.png` → "The Dwarf Lords make their plea..."
   - `image_003.png` → "A goblin menace threatens the land..."
5. **Meet the Hero** — Character progression (leather → plate armour), `image.png` + `image_004.png`
6. **Gameplay Features** — Hack & slash, loot, dungeon crawling — `image_006.png`
7. **Screenshot Gallery** — CSS grid, all 9 images, lightbox on click
8. **Dev Videos** — 6 YouTube video cards using facade pattern (poster + click to load)
9. **Future Horizons** — Multiplayer, dungeon builder, modding section
10. **Supporter Tiers** — 3 tier cards (Wanderer $3 / Knight $10 / Tower Guardian $25)
11. **About Studio** — OSM story, social links
12. **Footer** — Copyright + Patreon CTA

---

## Design System

```css
:root {
  --bg:       #0d0e14;   /* near-black */
  --surface:  #1a1c26;   /* card background */
  --raised:   #22253a;   /* elevated surface */
  --gold:     #c9882a;   /* primary accent */
  --glow:     #f0a83a;   /* hover/highlight */
  --text:     #e8e2d4;   /* warm off-white */
  --muted:    #8a8070;   /* secondary text */
  --border:   #2e3148;   /* subtle borders */
  --cta:      #f05a28;   /* Patreon orange */
  --cta-h:    #ff7040;   /* CTA hover */
}
```

- **Fonts**: `Cinzel` (headings) + `Inter` (body) via Google Fonts — single deferred link
- **Layout**: max-width 1200px, centred
- **Breakpoints**: 480px, 768px, 1024px (mobile-first)

---

## Performance Strategy (initial load < 14KB)

- **HTML shell** targets ~6–8KB of raw text
- **Critical CSS** inlined in `<style>` (~3–4KB) — above-fold only (nav + hero)
- **style.css** loaded with `<link rel="preload" as="style">` + `onload` swap
  - Using external script tag (not inline handler) to respect strict CSP
- **All images** use `loading="lazy"` except hero backdrop
- **Hero image** uses `fetchpriority="high"`, explicit `width`/`height`
- **YouTube videos** — facade pattern: `<img>` poster thumbnail + JS swap to `<iframe>` on click
  - Thumbnail URL: `https://img.youtube.com/vi/{ID}/hqdefault.jpg`
  - Zero iframes on initial load
- **Google Fonts** — `display=swap`, `preconnect` hints only
- **No JS libraries** — vanilla JS < 60 lines total

---

## "StateBehaviour images as bullet points" — Implementation

Character state images (`image_001`, `image_002`, `image_003`) used as icon-style
left-aligned markers beside story paragraphs in the narrative section. Each image
floats or sits in a small round/hex frame (~80px) beside a block of copy.

Example structure:
```html
<div class="story-beat">
  <img src="./images/image_001.png" alt="The wizard surveys the land" width="80" height="80" loading="lazy">
  <p>Deep in the Magical Kingdom, where wizards, fairies, goblins, dwarfs and elves
     have always lived in tenuous peace, the balance begins to shift...</p>
</div>
```

---

## Accessibility (WCAG 2.2 AA)

- All `<img>` have descriptive `alt` text
- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`
- Skip link as first focusable element
- Keyboard-navigable: nav, lightbox (Escape to close), video play buttons
- Colour contrast ≥ 4.5:1 for body text, ≥ 3:1 for UI elements
- `lang="en"` on `<html>`
- `aria-label` on icon-only buttons
- Focus visible on all interactive elements

---

## Build Order & Checkpoints

Checkpoints are saved to `memories/session/checkpoint.md` after every major step.

- [x] Asset inventory complete
- [x] Plan documented
- [ ] index.html — HTML shell + critical CSS inline
- [ ] style.css — full deferred stylesheet
- [ ] main.js — YouTube facade loader, lightbox, nav scroll behaviour
