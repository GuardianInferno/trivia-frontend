/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'bg': "url('/src/assets/bg.jpg')"
      },
      height:{
        '7/100':'7%',
      },
    },
  },
  plugins: [],
}
