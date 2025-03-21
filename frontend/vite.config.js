import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://simple-app-xh7h.vercel.app/",
    },
  },
  plugins: [react()],
});
