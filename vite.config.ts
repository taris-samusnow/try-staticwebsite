import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  plugins: [vue()],
  base: "/try-staticwebsite/",   // 必ず先頭と末尾にスラッシュ
  build: {
    outDir: "dist"      // Vite デフォルト dist/
  }
})
