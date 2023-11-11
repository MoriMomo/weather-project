/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
  // content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx)"],
  content: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/**/*.tsx",
    "./src/**/*.tsx",

  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D0078",
        secondary: "#6B7800",
      }
    },
    fontFamily: {
      Roboto: ["Roboto, san-serif"]
    },
    container: {
      padding: '2rem',
      center: true,
    },
    screen: {
      sm: '640px',
      md: '768px'
    },
  },
  plugins: []
}