import { defineConfig } from "vite";
import mkcert from 'vite-plugin-mkcert';

export default defineConfig(async ({ command, mode }) => {
  return {
    build: {
      cssCodeSplit: false,
      outDir: "build"
    },
    server: {
      host:"0.0.0.0",
      port:3000,
      strictPort: true,
      // hmr: {
      //   clientPort: 443
      // }
    },
    optimizeDeps: {
      exclude: ['./settings.json']
    },
    plugins: [ mkcert() ]
  };
});
