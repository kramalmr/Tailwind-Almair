/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins" : "Poppins",
      },
      colors: {
        main :"#EADCC7"
      }
    },
  },
  plugins: [],
}

