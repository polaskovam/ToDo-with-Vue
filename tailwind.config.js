const tailwindcss = require('tailwindcss');

export default {
  content: [
    './index.html',
    './src/**/*.{html,js,vue,ts,jsx,tsx}',

  ],
  plugins: [
    tailwindcss,
  ],
};