/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgHeaderHome': "url(./src/Assets/homeHeader.jpg)",
        'bgHeaderAbout': "url(./src/Assets/About-Header.webp)",
        'bgHeaderDestination': "url(./src/Assets/herceg_novi-destinationHeader.webp)",
        'bgHeaderBlog': "url(./src/Assets/HeaderBlog.webp)",
      },
      backgroundColor: {
        'nav': '#1d2228'
      },
      colors: {
        orange: '#fb8122'
      },
      fontFamily:{
        'caveat': '"Caveat", cursive'
      }

    },
  },
  plugins: [],
}

