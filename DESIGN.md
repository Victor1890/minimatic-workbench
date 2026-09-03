---
version: alpha
name: Zenwood Studio
description: >-
  A boutique web design and branding studio for startups and founders, combining warm minimalism with accessible,
  conversational design language.
logo:
  src: https://framerusercontent.com/images/6yF2H6UbkICXUjT7I74gw3ibLM.png
colors:
  surface: '#fbf9f8'
  surface-dim: '#f7f2eb'
  surface-bright: '#ffffff'
  surface-container-lowest: '#ede6de'
  surface-container-low: '#f7f2eb'
  surface-container: '#fbf9f8'
  surface-container-high: '#e9ded8'
  surface-container-highest: '#ddd2cc'
  on-surface: '#1b1c1c'
  on-surface-variant: '#95908d'
  inverse-surface: '#262626'
  inverse-on-surface: '#fbf9f8'
  outline: '#c7c4c2'
  outline-variant: '#96908d'
  surface-tint: '#17805e'
  primary: '#17805e'
  on-primary: '#ffffff'
  primary-container: '#a8d5c4'
  on-primary-container: '#0d4a38'
  inverse-primary: '#7ec9a8'
  secondary: '#1b1c1c'
  on-secondary: '#fbf9f8'
  secondary-container: '#262626'
  on-secondary-container: '#e9ded8'
  tertiary: '#0099ff'
  on-tertiary: '#ffffff'
  tertiary-container: '#cce5ff'
  on-tertiary-container: '#003d99'
  error: '#d32f2f'
  on-error: '#ffffff'
  error-container: '#ffcdd2'
  on-error-container: '#b71c1c'
  primary-fixed: '#a8d5c4'
  primary-fixed-dim: '#7ec9a8'
  on-primary-fixed: '#0d4a38'
  on-primary-fixed-variant: '#0f5a45'
  secondary-fixed: '#262626'
  secondary-fixed-dim: '#1b1c1c'
  on-secondary-fixed: '#fbf9f8'
  on-secondary-fixed-variant: '#e9ded8'
  tertiary-fixed: '#cce5ff'
  tertiary-fixed-dim: '#99c7ff'
  on-tertiary-fixed: '#003d99'
  on-tertiary-fixed-variant: '#0052cc'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e9ded8'
typography:
  display:
    fontFamily: Bricolage Grotesque Variable
    fontSize: 68px
    fontWeight: '700'
    lineHeight: 76px
    letterSpacing: '-0.02em'
  headline-lg:
    fontFamily: Bricolage Grotesque Variable
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: '-0.015em'
  headline-md:
    fontFamily: Bricolage Grotesque Variable
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: '-0.01em'
  title-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.005em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  container-max: 1280px
elevation:
  sm: 0 1px 2px rgba(0, 0, 0, 0.04)
  md: 0 4px 12px rgba(0, 0, 0, 0.08)
  lg: 0 16px 40px rgba(0, 0, 0, 0.12)
layout:
  containerMaxWidth: 1280px
  gridColumns: 12
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    padding: 12px 28px
    height: 48px
    boxShadow: 0 2px 8px rgba(23, 128, 94, 0.15)
  button-primary-hover:
    backgroundColor: '{colors.primary-fixed-dim}'
    boxShadow: 0 4px 12px rgba(23, 128, 94, 0.25)
  button-primary-active:
    backgroundColor: '#0f5a45'
    boxShadow: inset 0 2px 4px rgba(0, 0, 0, 0.1)
  button-secondary:
    backgroundColor: transparent
    textColor: '{colors.on-surface}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    padding: 12px 28px
    height: 48px
    border: 1px solid {colors.outline}
  button-secondary-hover:
    backgroundColor: '{colors.surface-container-high}'
    border: 1px solid {colors.on-surface-variant}
  button-ghost:
    backgroundColor: transparent
    textColor: '{colors.on-surface}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    padding: 12px 16px
    height: 40px
  button-ghost-hover:
    backgroundColor: '{colors.surface-container-high}'
    textColor: '{colors.primary}'
  card:
    backgroundColor: '{colors.surface-container}'
    rounded: '{rounded.lg}'
    padding: '{spacing.md}'
    boxShadow: '{elevation.sm}'
    border: 1px solid {colors.surface-variant}
  card-hover:
    backgroundColor: '{colors.surface-container-high}'
    boxShadow: '{elevation.md}'
    border: 1px solid {colors.outline}
  input-field:
    backgroundColor: '{colors.surface-container-low}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.DEFAULT}'
    padding: '{spacing.sm}'
    border: 1px solid {colors.outline}
    height: 44px
  input-field-focus:
    borderColor: '{colors.primary}'
    boxShadow: 0 0 0 3px rgba(23, 128, 94, 0.1)
    border: 2px solid {colors.primary}
  badge:
    backgroundColor: '{colors.primary-container}'
    textColor: '{colors.on-primary-container}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.full}'
    padding: 6px 12px
    display: inline-block
  header-nav:
    backgroundColor: '{colors.surface}'
    rounded: '{rounded.full}'
    padding: 6px 16px
    boxShadow: '{elevation.sm}'
    border: 1px solid {colors.surface-variant}
  chip:
    backgroundColor: '{colors.surface-container-high}'
    textColor: '{colors.on-surface}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.full}'
    padding: 8px 16px
    border: 1px solid {colors.outline-variant}
  chip-selected:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    border: 1px solid {colors.primary}
---

## Overview

Zenwood Studio is a web design and branding studio that transforms startup visions into compelling digital experiences. The brand embodies 'Warm Minimalism'—a design philosophy that marries the clarity and restraint of minimalism with the approachability and humanity of warm color palettes and conversational typography. The aesthetic is grounded in a soft, cream-forward surface (#fbf9f8) paired with a confident forest-green primary accent (#17805e), creating an environment that feels both professional and inviting. The UI evokes trust and accessibility: users immediately sense that this is a studio that listens, understands, and delivers with intention.

The voice is direct yet personable, avoiding jargon while maintaining expertise. Zenwood speaks in short, confident sentences: 'Need a cool website? I've got you covered.' The vocabulary is contemporary but not trendy—words like 'cool,' 'covered,' and 'founders' signal a peer-to-peer relationship rather than a top-down service pitch. The brand personality is that of a thoughtful, capable collaborator who knows the startup world and speaks its language.

## Colors

The color system is built on a warm, neutral foundation with a single, decisive accent. The surface stack (#fbf9f8 → #ddd2cc) provides subtle depth without visual noise, using warm beiges and taupes that feel organic and human-scaled. The primary color, forest green (#17805e), is reserved exclusively for interactive elements and brand moments: call-to-action buttons, focus states, and key navigation items. This restraint makes the primary feel earned and impactful—when users see green, they know it's actionable. Secondary colors are the near-black (#1b1c1c) for text and the cool blue (#0099ff) for links and secondary accents, creating a three-color hierarchy that is both sophisticated and easy to parse. The outline and outline-variant tokens (#c7c4c2, #96908d) provide subtle borders and di

## Typography

The type system pairs Bricolage Grotesque Variable for headlines and Inter for body text, creating a dynamic contrast between personality and clarity. Bricolage's geometric, slightly playful character (used at 68px for display, 48px for headline-lg) conveys the studio's creative confidence and contemporary sensibility, while Inter's neutral, highly legible form (18px for body-lg, 16px for body-md) ensures accessibility and professionalism in longer-form content. The headline hierarchy is compressed—display (68px) and headline-lg (48px) are close in scale—to maintain visual drama without overwhelming the page. Body text is set at 16–18px with 24–28px line-height, providing generous breathing room that reflects the brand's unhurried, thoughtful approach. All interactive labels use Inter 600

## Layout

The page rhythm follows a 12-column grid with a maximum container width of 1280px, allowing for flexible, responsive layouts that adapt from mobile (single column) to desktop (multi-column). The spacing scale is semantic: lg spacing (40px) separates major sections, md spacing (24px) groups related content, and sm spacing (12px) provides micro-breathing room within components. The hero section uses a full-bleed background (sky blue gradient, implied by the screenshot) with centered content, establishing visual hierarchy through scale and whitespace rather than color contrast. Cards and containers use 24px padding with 1px borders in outline-variant (#96908d), creating a soft frame that doesn't feel heavy. The gutter (24px) is consistent across all breakpoints, ensuring a predictable rhythm.

## Elevation & Depth

Depth is achieved through a restrained shadow system and subtle border treatment rather than dramatic layering. Level 1 (Base): no shadow, 1px border in surface-variant (#e9ded8) for cards and containers. Level 2 (Elevated/Hover): box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), border in outline (#c7c4c2). Level 3 (Modal/Overlay): box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12), border in outline. Interactive elements (buttons) use a subtle shadow on hover (0 2px 8px rgba(23, 128, 94, 0.15) for primary buttons) to signal lift without creating visual chaos. The shadow palette is warm-tinted (using rgba

## Shapes

The shape philosophy is 'Soft-Technical'—combining the approachability of rounded corners with the precision of a grid-based system. Buttons and interactive elements use full-round (border-radius: 9999px) to signal friendliness and accessibility, while cards and containers use lg (1rem / 16px) for a softer, more organic feel than sharp corners but still maintaining structure. Input fields use DEFAULT (0.5rem / 8px) for a neutral, functional appearance. The full-round radius is applied exclusively to buttons, chips, and badges—elements that demand immediate recognition as interactive. This crea

## Components

### Action Elements
Buttons are the primary interaction pattern. Primary buttons (#17805e background, white text, 48px height, 12px 28px padding, full-round) use a subtle shadow on hover (0 2px 8px rgba(23, 128, 94, 0.15)) and a darker green (#0f5a45) on active state with inset shadow (inset 0 2px 4px rgba(0, 0, 0, 0.1)). Secondary buttons are transparent with a 1px outline in outline (#c7c4c2), shifting to surface-container-high on hover. All buttons use Inter 600 at 14px with 0.02em letter-spacing. Transitions are 200ms ease-out for all state changes, providing responsive feedback without feeling sluggish.

### Containers & Surfaces
Cards use surface-container (#fbf9f8) background with 24px padding, 1px border in surface-variant (#e9ded8), and lg border-radius (16px). On hover, the backg

## Do's and Don'ts

**Do**
- Do use the primary green (#17805e) exclusively for interactive elements—buttons, links, focus states—to create a clear, scannable hierarchy.
- Do maintain the warm, cream-forward surface palette (#fbf9f8, #f7f2eb) as the default background; it's the brand's visual anchor.
- Do pair Bricolage Grotesque for headlines (48px+) and Inter for body text to create dynamic contrast without visual chaos.
- Do use full-round (border-radius: 9999px) only on buttons and chips; use lg (16px) for cards and containers to maintain visual distinction.
- Do apply subtle shadows (0 4px 12px rgba(0, 0, 0, 0.08)) on hover to signal elevation; never exceed 16px blur radius.
- Do use 40px (lg) spacing between major sections and 24px (md) within sections to create a generous, unhurried rhythm.

**Don't**
- Don't introduce new accent colors; the green (#17805e), black (#1b1c1c), and blue (#0099ff) are the complete palette.
- Don't use sharp corners (border-radius: 0) on interactive elements; it contradicts the approachable, warm aesthetic.
- Don't apply heavy shadows (blur > 16px) or multiple layered shadows; the design is grounded and legible, not dramatic.
- Don't mix Bricolage and Inter at the same size; use Bricolage for headlines (48px+) and Inter for body (18px and below).
- Don't use the primary green for backgrounds or large surface areas; reserve it for interactive moments to maintain impact.
- Don't compress spacing below 12px (sm) in content areas; the brand values breathing room and clarity over density.
