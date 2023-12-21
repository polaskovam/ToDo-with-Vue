const tailwindcss = require("tailwindcss");

export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,vue,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  plugins: [require("tailwindcss"), require("flowbite/plugin")],
  theme: {
    screens: {
      custom: "989px",
      md: "768px",
      sm: "590px",
      xs: "0px",
    },
  },
};
