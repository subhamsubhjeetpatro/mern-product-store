import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5001",
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split large dependencies into separate chunks
          vendor: ["react", "react-dom"],
          // Add other large dependencies if needed (e.g., "lodash", "axios")
        },
      },
    },
    chunkSizeWarningLimit: 600, // Increase limit to 600 kB (optional)
  },
});
