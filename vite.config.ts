import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias:{
    '/@': path.resolve(__dirname, 'src')
  },
  server: {
    proxy: {
      '/user_api/v1': {
        target: 'https://api.juejin.cn/',
        changeOrigin: true
      }
    }
  }
})
