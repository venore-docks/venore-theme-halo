import { generateHueRotationPalettes, THEME_HUE_PRESETS } from "@venore/theme-sdk/palettes";

// Ponto de partida aproxima o rosa/magenta do bloco .dark de theme.css — presets alternativos
// que o admin pode escolher em /admin/settings/brand, girando o matiz a partir daqui.
export const HALO_COLOR_PALETTES = generateHueRotationPalettes(
  {
    light: {
      primary: "oklch(0.53 0.21 340)",
      primaryForeground: "oklch(0.98 0.01 340)",
      accent: "oklch(0.93 0.035 340)",
      accentForeground: "oklch(0.28 0.03 340)",
      ring: "oklch(0.53 0.18 340)",
    },
    dark: {
      primary: "oklch(0.72 0.19 340)",
      primaryForeground: "oklch(0.16 0.02 340)",
      accent: "oklch(0.32 0.05 340)",
      accentForeground: "oklch(0.94 0.02 340)",
      ring: "oklch(0.68 0.18 340)",
    },
  },
  THEME_HUE_PRESETS,
);
