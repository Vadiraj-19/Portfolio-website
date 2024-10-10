const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      keyframes: {
        spiny: {
          '0%': { transform: 'rotateY(0deg)' }, // Initial state: No rotation
          '100%': { transform: 'rotateY(360deg)' }, // Final state: Complete 360° rotation
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },


      },
      animation: {
        spiny: 'spiny 6s linear infinite', // Runs the animation for 2 seconds infinitely
        fadeIn: 'fadeIn 3s ease forwards', /* Duration of 3 seconds */

      },

      fontFamily: {
        'jetmono': ['JetBrains Mono', 'sans-serif'],
        'BodoniModaSC': ['Bodoni Moda SC', 'sans-serif'], 
        'LuxuriousRoman':['Luxurious Roman','sans-serif']

      },
    },

  },
  plugins:[
    plugin(({ theme, addUtilities }) => {
      const neonUtilities = {};
      const colors = theme('colors');
      for(const color in colors) {
        
        if (typeof colors[color] === 'object') {
          const color1 = colors[color]['500'];
          const color2 = colors[color]['700'];
          neonUtilities[`.neon-${color}` ]={
            boxShadow:`0 0 10px ${color1}, 0 0 40px ${color2}`,
          };
        }
      }
      addUtilities(neonUtilities)
      
    
      })
  ],
}