/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bodys: "#F2F2F2",
        bttn: "#F3603C",
        shadow: "0px 15px 15px -10px #FF9F8E",
      },
      boxShadow: {
        btnshadow: "0px 15px 15px -10px #FF9F8E",
      },

      fontFamily: {
        body: ["Be Vietnam Pro"],
      },
    },
  },
  plugins: [],
};
