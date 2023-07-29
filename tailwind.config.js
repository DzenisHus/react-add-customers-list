const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", 
  './src/components/**/*.{html,js}',],
  theme: {
    extend: {
      colors: {
        primary: '#22c55e',
        secondary: '#00FF00',
        
      },
      textColor: {
        'primary': '#fff',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl') },
        'button': { fontSize: theme('fontSize.3xl') }
      })
    })
  ],
}

