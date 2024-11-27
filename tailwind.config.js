/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      titlefont : ["Platypi", "serif"],
      subfont : ["Poppins", "sans-serif"]
    },
  },
  plugins: [],
}

