/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E9BFF",
        darkBlue: "#2784d9",
        dark: "#393939",
        gray: "#A4A2A272",
      },
    },
  },
  plugins: [],
};
