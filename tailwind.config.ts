import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Read out of public/images/the-insurance-agent-wordmark.svg - the blue the brackets
        // are filled with, #3C5BAA, is the brand. Taken from the vector rather than sampled off a
        // raster, so it is the exact value the logo uses and not a close neighbour.
        //
        // Same two-tone problem the CFO site has, for the same reason: at 45% lightness this
        // blue is legible on the light grounds and disappears against the near-black one. So
        // `brand` is the wordmark colour and `brand-tint` is the same hue lifted, which is what
        // the dark sections use.
        brand: {
          DEFAULT: "#3C5BAA",
          dark: "#293E74",
          tint: "#869CD4",
        },
        // The dark ground carries a trace of the brand hue rather than being neutral black, so
        // the blue sits on something rather than beside it.
        ground: "#0B0F1C",
        cream: "#F1F3F6",
        ink: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
export default config;
