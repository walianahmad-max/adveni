import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: [
        'index.html',
        'privacy-policy/index.html',
        'terms-and-conditions/index.html',
        'es/index.html',
        'es/privacy-policy/index.html',
        'es/terms-and-conditions/index.html',
      ],
    },
  },
})
