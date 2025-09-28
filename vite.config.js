import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { hash } from './src/utils/hash.js'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // For custom domain deployment
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name]${hash}.js`,
        chunkFileNames: `[name]${hash}.js`,
        assetFileNames: `[name]${hash}.[ext]`
      }
    }
  }
})
