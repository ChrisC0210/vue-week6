import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { ghPages } from "vite-plugin-gh-pages";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),ghPages()],
  base: process.env.NODE_ENV === 'production' ? '/vite-deploy-sample/' : './',
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});