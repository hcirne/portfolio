const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.trueGray,
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 700,
      black: 900,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
