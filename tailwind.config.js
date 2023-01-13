/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: "#ffffff9c",
        brown: "rgba(30,30,17)"
      },
      backgroundImage:{
        back:"url(./Assets/bgResImage.jpg)"
      }

    },
  },
  plugins: [],
}
