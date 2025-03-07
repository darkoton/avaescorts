/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      dark: '#403a3b',
      gray: '#818181',
      'gray-dark': '#525252',
      'gray-light': '#D0D0D0',
      yellow: '#FFDF00',
      red: '#8F1B28',
      'red-dark': '#991e2d ',
      'pink-light': 'rgb(249, 220, 224)',
      'pink-dark': '#CF5E70',
      blue: '#007CC3',
    },
  },
  plugins: [],
};
