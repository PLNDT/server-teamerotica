import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {},
  compressHTML: true,
  site: "https://teamerotica.com",
  integrations: [sitemap()],
});
