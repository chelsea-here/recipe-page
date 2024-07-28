import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nutmeg': 'hsl(14, 45%, 36%)',
        'darkRaspberry': 'hsl(332, 51%, 32%)',
        'white': 'hsl(0, 0%, 100%)',
        'roseWhite': 'hsl(330, 100%, 98%)',
        'eggshell': 'hsl(30, 54%, 90%)',
        'lightGrey': 'hsl(30, 18%, 87%)',
        'wengeBrown': 'hsl(30, 10%, 34%)',
        'darkCharcoal': 'hsl(24, 5%, 18%)',
        'aBlue': 'hsl(228, 45%, 44%)',
        'snow': '#FFF7FB',
        'brandyRed': '#854632',
        'whiteCoffee': '#E3DDD7',
      },
      fontFamily: {
        'outfit': 'var(--font-outfit)',
        'youngSerif': 'var(--font-young-serif)',
      },
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
