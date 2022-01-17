const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: [
            '"Nanum Gothic"',
            ...defaultTheme.fontFamily.serif
        ]
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      '1E212D': '#1E212D',
      'B68973': '#B68973',
      'EABF9F': '#EABF9F',
      'FAF3E0': '#FAF3E0',
    },
  },
  plugins: [],
}
