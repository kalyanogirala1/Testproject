/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        mainBg: "#15161d",
      },
      padding: {
       p20: "0px 20px",
      },
      leading: {
        160: "160px",
        450: "450px",
      },
      fontSize: {
        68: "68px",
        600:"600px",
      },
      zIndex: {
        '-1': '-1',
      }

    },
  },
  plugins: [],
}
