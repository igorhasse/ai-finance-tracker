// Corrija a importação com a extensão .js
import "@rushstack/eslint-patch/modern-module-resolution.js";

import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import next from "eslint-config-next";

export default [
  js.configs.recommended,
  react.configs.recommended,
  reactHooks.configs.recommended,
  next,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
      "react/prop-types": "off",
      "no-console": "warn",
    },
  },
];
