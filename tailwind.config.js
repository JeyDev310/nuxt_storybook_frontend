const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: colors.cyan,
      white: colors.white,
      gray: colors.gray,
      brand: '#FF6D37',
      'light-gray': '#F9F9F9',
      'lighter-gray': '#FBFBFB',
    },
    extend: {
      fontFamily: {
        senkron: ['SenkronRegular']
      },
      fontSize: {
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
      },
      spacing: {
        '40px': '40px',
        '50px': '50px',
        '113px': '113px',
        '195px': '195px',
        '246px': '246px',
        '316px': '316px',
      },
      backgroundPosition: {
        'left-42%': 'left 42% center'
      },
      minHeight: {
        '440px': '440px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
