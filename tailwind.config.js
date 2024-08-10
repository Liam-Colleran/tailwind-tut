/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      container: {
        screens: {
          xs: '480px',   // Extra small screens (e.g., small mobile devices)
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
          '3xl': '1920px',  // 3x extra-large screens (e.g., 1080p monitors)
          '4xl': '2560px',  // 4x extra-large screens (e.g., 1440p monitors)
          '5xl': '3200px',  // 5x extra-large screens (e.g., ultra-wide monitors)
        },
      },
    },
  },
  plugins: [],
}

