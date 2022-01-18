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
      '222831': '#222831',
      'F38181': '#F38181',

      '2F5D62': '#2F5D62',
      '5E8B7E': '#5E8B7E',
      'A7C4BC': '#A7C4BC',
      'DFEEEA': '#DFEEEA',

      'custom-bg': '#2F5D62',
      'custom-fg': '#f5f5f5',
    },
  },
  plugins: [],
}
