/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '3.441rem',
      '5xl': '5.052rem',
    },
    extend: {

      animation: {
        'bounce': 'bounce 5s ease-in-out infinite',
      }
    },
    plugins: [
    ]
  }
  }