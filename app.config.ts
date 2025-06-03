import { defineConfig } from "@tanstack/react-start/config";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

const config = defineConfig({
  tsr: {
    appDirectory: "src",
  },
  vite: {
    plugins: [
      // this is the plugin that enables path aliases
      viteTsConfigPaths({
        projects: ["./tsconfig.json"],
      }),

      TanStackRouterVite({
        target: "react",
        virtualRouteConfig: "./src/routes.ts",
      }),
    ],
  },
});

export default config;
