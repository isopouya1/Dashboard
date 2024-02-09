/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    colors:{
      "transparent":"transparent",
      "white": "#ffffff",
      "black": "#000000",
      "blue": "#397FFE",
      "light-gray":"#F9F9F9",
      "dark-gray" : "#9CA1AC",
      "red" : "#FF4955",
      "orange" : "#D25720",
      "dark-blue" : "#65A2B1",
      "dark-black": "#161616" ,
      
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '2rem',
        xl: '5rem',
        '2xl': '0rem',
      },
    },
    extend: {},
  },
  daisyui: {
    darkTheme: "light",
   },
   
  plugins: [require("daisyui")],
}