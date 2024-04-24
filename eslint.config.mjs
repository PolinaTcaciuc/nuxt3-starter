import eslintTSConfig from "@nuxtjs/eslint-config-typescript";
import eslintConfigPrettier from "eslint-config-prettier";
import jsdoc from "eslint-plugin-jsdoc";
import prettierPlugin from "eslint-plugin-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tailwindcss from "eslint-plugin-tailwindcss";
import vitest from "eslint-plugin-vitest";
import vuePlugin from "eslint-plugin-vue";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  {
    plugins: {
      tailwindcss: tailwindcss,
      prettier: prettierPlugin,
      jsd: jsdoc,
    },
    rules: {
      "tailwindcss/classnames-order": "error",
      "jsd/require-description": "error",
      "jsd/check-values": "error",
      "jsd/check-alignment": "error",
      "jsd/no-blank-blocks": "warn",
      "jsd/require-param": "error",
      quotes: ["error", "single"],
      ...eslintTSConfig.rules,
      "vue/attributes-order": [
        "error",
        {
          alphabetical: false,
          order: [
            "DEFINITION",
            "LIST_RENDERING",
            "CONDITIONALS",
            "RENDER_MODIFIERS",
            "GLOBAL",
            ["UNIQUE", "SLOT"],
            "TWO_WAY_BINDING",
            "OTHER_DIRECTIVES",
            "ATTR_DYNAMIC",
            "ATTR_STATIC",
            "ATTR_SHORTHAND_BOOL",
            "EVENTS",
            "CONTENT",
          ],
        },
      ],
      ...eslintPluginPrettierRecommended.rules,
      ...eslintConfigPrettier.rules,
    },
    ignores: [".stylelintrc", "**/*.nuxt.spec.ts", "vitest.config.ts"],
  },
  {
    files: ["**/*.nuxt.spec.ts"],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      "vitest/no-standalone-expect": "error",
    },
  },
).prepend([...vuePlugin.configs["flat/recommended"]]);
