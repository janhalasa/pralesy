# Design System Document

## 1. Overview & Creative North Star: "The Silent Sentinel"

This design system is built to transform the digital presence of a forest conservation NGO from a basic information repository into a high-end editorial experience. The **Creative North Star** is "The Silent Sentinel"—a philosophy that balances the ancient, established authority of the forest (Trustworthy) with the vibrant, living urgency of conservation (Modern).

The system breaks away from "template-style" web design by utilizing **Organic Asymmetry**. Elements are not always trapped within rigid boxes; instead, high-resolution immersive imagery is layered with sophisticated typography and floating UI elements. By using large-scale serif headings and a "breathable" layout, we create a sense of serenity that invites the user to linger, while sharp, tonal accents signal the urgency of the mission.

---

## 2. Colors

The palette is rooted in a deep, atmospheric forest floor. We move beyond simple "green and white" by utilizing a complex range of tonal greens, earthy umbers, and "off-surface" neutrals.

### The "No-Line" Rule
To achieve a premium, editorial feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries between content blocks must be defined exclusively through background color shifts. For example, a donation section might use `surface-container-low` to distinguish itself from the `surface` background.

### Surface Hierarchy & Nesting
Treat the interface as a physical stack of fine paper or frosted glass. Use the `surface-container` tiers to create natural depth:
- **Surface (fef7ff):** The base canvas.
- **Surface-Container-Low (f9f1fd):** Primary content areas.
- **Surface-Container-Highest (e7e0eb):** Key interaction points or "pinned" cards.

### The "Glass & Gradient" Rule
For elements meant to "float" over immersive forest imagery (like news headlines or navigation), use **Glassmorphism**. Apply `surface` or `surface-variant` colors at 70-80% opacity combined with a `backdrop-blur` of 12px-20px. 

### Signature Textures
Main CTAs and Hero backgrounds should avoid flat fills. Use subtle linear gradients transitioning from `primary` (#304800) to `primary_container` (#336633) at a 135-degree angle to add a rich, velvet-like visual soul.

---

## 3. Typography

The typography strategy is a dialogue between the old and the new.

*   **Display & Headlines (Noto Serif):** Headings use a sophisticated serif to establish historical weight and academic trustworthiness. These should be set with tighter letter spacing (-0.02em) to feel cohesive.
*   **Titles & Body (Inter):** A clean, modern sans-serif provides maximum readability. For body text, use `body-lg` (1rem) with a generous line-height (1.6) to ensure the content feels open and approachable.
*   **Labels (Work Sans):** Functional labels (categories, dates, metadata) use Work Sans. These should often be in uppercase with increased letter-spacing (0.05em) to differentiate from narrative text.

---

## 4. Elevation & Depth

We reject the "heavy shadow" aesthetic of the early 2010s. Depth is achieved through **Tonal Layering**.

### The Layering Principle
Instead of a shadow, place a `surface-container-lowest` card on a `surface-container-low` section. This create a "soft lift" that feels integrated into the environment rather than hovering awkwardly over it.

### Ambient Shadows
Where floating is necessary (e.g., a primary Donation Modal), use extra-diffused shadows:
- **Blur:** 32px to 64px.
- **Opacity:** 4% - 6%.
- **Color:** Tint the shadow using the `on-surface` token (#1d1a22) to ensure it looks like a natural occlusion of light.

### The "Ghost Border" Fallback
If an element lacks sufficient contrast against its background, use a **Ghost Border**: the `outline-variant` token (#c1c9bc) set at 15% opacity. This provides a whisper of a boundary without breaking the organic flow.

---

## 5. Components

### Buttons
*   **Primary:** A gradient fill (`primary` to `primary_container`) with `on_primary` text. Use `rounded-md` (0.375rem) to maintain a professional edge.
*   **Secondary:** An "outline" style using the **Ghost Border** (20% opacity `outline-variant`) with `primary` text.
*   **Tertiary:** Text-only with a 2px underline that expands on hover.

### News Cards
*   **Structure:** No borders or dividers. The image sits at the top with a `rounded-lg` clip. 
*   **Typography:** The date uses `label-sm` in `tertiary`. The headline uses `title-lg` (Inter) for a modern, urgent look.
*   **Interaction:** On hover, the background shifts slightly to `surface-container-high`.

### Donation Sections
*   **Layout:** Immersive full-bleed forest imagery as a backdrop.
*   **Container:** A glassmorphic panel (`surface` @ 80% + blur) positioned asymmetrically (e.g., anchored to the right 1/3 of the screen).
*   **Urgency Color:** Use `secondary` (#bc0000) sparingly—only for the "Donate Now" CTA or a critical "Forest at Risk" badge.

### Input Fields
*   **Style:** Minimalist under-line style or a very subtle `surface-container-highest` fill.
*   **States:** On focus, the bottom border animates from `outline-variant` to `primary`.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins (e.g., 8rem on the left, 12rem on the right) to create an editorial, "un-templated" feel.
*   **Do** allow imagery to bleed off the edge of the screen or overlap between two background sections.
*   **Do** use the Spacing Scale (4, 8, 12, 16) to create vast "breathing room" between major sections to lower the user's heart rate (Serenity).

### Don't:
*   **Don't** use 100% opaque black (#000000) for text. Use `on_surface` (#1d1a22) for better tonal harmony.
*   **Don't** use "Drop Shadows" on text. If text is hard to read on imagery, use a soft `surface` gradient overlay behind the text.
*   **Don't** use divider lines to separate list items. Use vertical white space (`spacing-6`) or a subtle background shift.
*   **Don't** use bright, saturated greens. Stick to the `primary` and `primary_container` tokens which are desaturated and "earthy."