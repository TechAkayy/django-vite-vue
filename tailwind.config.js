import {
  pg_colors,
  pg_fonts,
  pg_backgrounds,
} from './themes/pg-tailwindcss/tokens.mjs' // tailwind.config.[ts]

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    require('@pinegrow/tailwindcss-plugin').default({
      colors: pg_colors, // primary, secondary etc
      fonts: pg_fonts,
      backgrounds: pg_backgrounds, // bg-design-image, bg-design-image-large
    }),
  ],
  theme: {
    extend: {},
  },
  get content() {
    const _content = [
      './index.html',
      './src/**/*.{html,vue,svelte,astro,js,cjs,mjs,ts,cts,mts,jsx,tsx,md,mdx}',
      //...
    ]
    return process.env.NODE_ENV === 'production'
      ? _content
      : [..._content, './_pginfo/**/*.{html,js}'] // used by Vue Designer Desginer for live-designing during development
  },
}
