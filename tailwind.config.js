/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        desktop: "1440px",
      },
      colors: {
        Hone: "#CAC9FF",
        "custom-purple-1": "rgba(119, 85, 255, 1)",
        "custom-purple-2": "rgba(105, 67, 255, 1)",
        "custom-blue": "rgba(47, 44, 233, 1)",
        "custom-purple-1": "rgba(77, 33, 201, 1)",
        "custom-purple-2": "rgba(63, 33, 201, 0.64)",
        "custom-purple-3": "rgba(37, 33, 201, 0)",
        // "red-95-white": "rgba(255, 255, 255, 0.95)",
        // red: "#F55",
        "custom-orange": "rgba(255, 178, 30, 1)",
        "custom-white": "rgba(255, 255, 255, 0.95)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(119, 85, 255, 1) 0%, rgba(105, 67, 255, 1) 0.01%, rgba(47, 44, 233, 1) 100%)",
        "custom-gradient2":
          "linear-gradient(180deg, rgba(77, 33, 201, 1) 0%, rgba(63, 33, 201, 0.64) 20%, rgba(37, 33, 201, 0) 80%, rgba(37, 33, 201, 0) 100%)",
        // "red-95-white": `linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), #F55`,
        "custom-gradient3":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), rgba(255, 178, 30, 1)",
      },

      fontFamily: {
        hanken: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
