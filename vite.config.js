import { defineConfig } from "vite";

export default defineConfig({
  base: "./",       // Para que los assets usen rutas relativas
  root: ".",        // Asegura que la raíz del proyecto es la carpeta actual
  build: {
    outDir: "dist", // Carpeta donde Vite pondrá el resultado final (Vercel usa esto)
    emptyOutDir: true
  }
});
