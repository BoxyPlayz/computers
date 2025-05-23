import { resolve } from "path";
import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from 'vite';

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  build: {
    outDir: "../dist",
    minify: "esbuild",
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        debian: resolve(__dirname, "src/debian/index.html"),
      },
    },
  },
  server: {
    port: 8080,
  },
  preview: {
    port: 8080,
  },
  plugins: [
    legacy({
      targets: ["IE 11", "Firefox ESR"],
      modernTargets: [
        "chrome >= 70",
        "firefox >= 70",
        "safari >= 11",
        "edge >= 18",
      ],
      additionalLegacyPolyfills: true,
    }),
  ],
});