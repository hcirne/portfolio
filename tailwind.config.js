module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      dark: "#404040",
      light: "#FAFAFA",
      white: "#fff",
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
