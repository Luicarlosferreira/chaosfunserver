/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      poppins: ["Poppins", "ui-sans-serif"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      BungeeSpice: ["var(--font-Bungee_Spice)"],
      alumni: ["var(--font-Alumni)"],
    },
    extend: {
      backgroundImage: {
        "aside-pattern": "url('/staticAside.jpg')",
        "hero-one-pattern": "url('/wp_.jpg')",
        "hero-two-pattern": "url('/wp_one.jpg')",
      },
      padding: {
        "50%": "0 50%",
        "30%": "11% 5%",
      },
      screens: {
        telemovel: { max: "400px" },
        tablet: { max: "640px" },
        // => @media (min-width: 640px) { ... }

        laptop: { max: "1024px" },
        // => @media (min-width: 1024px) { ... }

        desktop: { max: "1280px" },
        // => @media (min-width: 1280px) { ... }
      },
      keyframes: {
        FadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        Fade: "FadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [""],
};
