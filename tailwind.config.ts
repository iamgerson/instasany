import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-dark': '#1D3531',
        'green-border': '#2A4B46',
        'smooth-green': '#5D8A83',
        'green-button': '#CCEC60',
        'green-title-cards': '#719D96',
      },
      maxWidth: {
        grid: '77.5rem',
        'text-hero': '66rem',
        'area-icons': '53.4rem',
        'area-mockups': '59.8rem',
        'are-cards': '82.5rem'
      },
      height: {
        'section-hero': '54.6rem',
        'area-cards': '35.1rem'
      },
      backgroundImage: {
        'hero': "url('/bg-hero.svg')",
      },
    },
  },
  plugins: [],
}
export default config
