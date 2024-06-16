import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/todo-react-vite-ts-project/",
  plugins: [react()],
  server: {
    open: true,
  },
})