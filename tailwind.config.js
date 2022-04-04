module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "375px" },
    },
    colors: {
      "footer--gray": "rgba(255,255,255,0.8)",
      black: "#000000",
      white: "#ffffff",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};
