/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#003049",
        secondaryColor: "#669bbc",
        thirdColor: "#dda15e",
        fourthColor : "#a3b18a"
      }
    },
  },
  plugins: [],
}