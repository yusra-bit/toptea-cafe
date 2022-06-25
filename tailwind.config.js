/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
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

