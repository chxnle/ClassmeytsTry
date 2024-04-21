/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#fffdfd",
        white: "#fff",
        "link-color": "#5b86f4",
        "secondary-color-blue": "#394d6a",
        slategray: "#5e7391",
        whitesmoke: "#f5f5f5",
        "text-main-color": "#2e3546",
        "main-color-blue": "#c0d3ee",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        catamaran: "Catamaran",
        comfortaa: "Comfortaa",
        baloo: "Baloo",
      },
    },
    fontSize: {
      mini: "15px",
      xs: "12px",
      sm: "14px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
