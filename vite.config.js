import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  base: "./",
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        debian: resolve(__dirname, 'src/debian/index.html')
      }
    }
  },
  server: {
    port: 8080
  },
  preview: {
    port: 8080
  },
  plugins: [
  ]
}