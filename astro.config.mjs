import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
    fallback: {
      es: "en",
    },
  },
});
