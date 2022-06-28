/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    listStyleType:{
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman'
    },
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('/cafe.jpg')",
      }),
    },
    variants: {
      extend: {
        display: ['group-focus'],
        opacity: ['group-focus'],
        inset: ['group-focus']
      }
    },
  },
  plugins: [],
}

