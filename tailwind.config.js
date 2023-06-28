/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('images/bg-desktop.png')",
        'mobile': "url('images/bg-mobile.png')"
      },
      colors: {
        gradientt1: '#ffa399',
        gradient2: '#ff4d97',
        paleBlue: '#dddbff',
        grayishBlue: '#848794',
        darkBlue: '#1d2c67',
        darkerBlue: '#0c122c'
      },
      fontFamily: {
        'Raleway': ['Raleway', 'sans-serif']
      },
      borderWidth: {
        '32': '32px'
      },
      width: {
        '450': '450px',
      }
    },
  },
  plugins: [],
}

