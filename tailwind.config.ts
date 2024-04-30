import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          10: 'hsl(212, 45%, 89%)'
        },
        blue: {
          10: 'hsl(220, 15%, 55%)',
          20: 'hsl(218, 44%, 22%)'
        }
      },
    },
  },
  plugins: [],
};
export default config;
