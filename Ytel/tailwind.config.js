/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],

  theme: {
    colors: {
      'blue': '#5590F5',
      'cyan': '#44BFFF',
      

    },

    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },

    extend: {
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',

      },

      borderRadius: {
        '1xl': '8px',
      },
      boxShadow:{
        '1xl':'0px 10px 30px 0px rgba(29, 73, 113, 0.10)',
      }      
    },

    corePlugins: {
      placeholderColor:{
        grey:'#687175;',
      },

      input:{
        color:'#000',
      }
    }

    // ...
  }
}
