import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [unocss(), react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
    extensions: [".jsx", ".js", ".tsx", ".ts", ".json", ".css"],
  },
});
