import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'firebase/Auth': 'firebase/auth',
    },
  },
  optimizeDeps: {
    include: ['firebase/auth'],
  },
})