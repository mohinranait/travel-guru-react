/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary : ['Poppins', 'sans-serif'],
        secondary : ['Bebas Neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

