import { defineVitestConfig } from "@nuxt/test-utils/config";
import { defaultExclude } from "vitest/config";
export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    exclude: [
      ...defaultExclude,
      "tailwind.config.js",
      ".nuxt",
      "nuxt.config.ts",
      "**/virtual:nuxt:**",
    ],
    coverage: {
      provider: "v8",
      ignoreEmptyLines: true,
      thresholds: {
        functions: 95,
        branches: 70,
        statements: 90,
      },
      exclude: [
        ...defaultExclude,
        "tailwind.config.js",
        ".nuxt",
        "nuxt.config.ts",
        "**/virtual:nuxt:**",
      ],
    },
  },
});
