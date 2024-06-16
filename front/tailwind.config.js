/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // font_main: ["Roboto", "sans-serif"],
      font_main: ["Ubuntu", "sans-serif"],
      font_carmen: ["Tiny5", "sans-serif"],
    },

    extend: {
      colors: {
        color_carmen: "rgb(55 55 55)",
      },
    },
  },
  plugins: [],
};
