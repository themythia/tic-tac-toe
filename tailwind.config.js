/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#0026ED',
        customRed: '#FF0505',
        customBg: '#F3B18C',
      },
      fontFamily: {
        fingerPaint: ['Finger Paint'],
      },
    },
  },
  plugins: [],
};
