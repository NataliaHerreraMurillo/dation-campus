import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/dation-campus/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        team: resolve(__dirname, 'team.html'),
        cursos: resolve(__dirname, 'cursos.html'),
        contact: resolve(__dirname, 'contact.html'),
      }
    }
  }
})
