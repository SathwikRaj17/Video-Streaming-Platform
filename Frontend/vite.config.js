import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api':{
        target:'https://video-streaming-platform-backend.onrender.com',
        changeOrigin:true
      }
    }
  }
})
