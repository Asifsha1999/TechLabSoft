/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      animation: {
        'bounce': 'bounce 5s ease-in-out infinite',
      }
    },
    plugins: [
    ]
  }
  }