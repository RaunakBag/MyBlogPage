/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin";
import vitePluginRequire from "vite-plugin-require";


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin, vitePluginRequire('tailwind-scrollbar') ],
}