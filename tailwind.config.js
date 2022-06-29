/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'header': ['Cabinet Grotesk', ...defaultTheme.fontFamily.sans],
        'sans': ['Satoshi', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
