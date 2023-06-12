/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}',
            './static/*.{css,js}'],
  theme: {
    extend: {
      animation: {
        slowspin:'spin 2.3s linear infinite;'
      }
    },
  },
  plugins: [],
}

