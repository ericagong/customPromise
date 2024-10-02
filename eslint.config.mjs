import prettier from "eslint-plugin-prettier";
import jest from "eslint-plugin-jest";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("eslint:recommended", "plugin:prettier/recommended"), {
    plugins: {
        prettier,
        jest,
    },

    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.jest,
        },

        ecmaVersion: "latest",
        sourceType: "module",
    },

    rules: {
        "prettier/prettier": "error",
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
        "no-var": "error",
        eqeqeq: "warn",
        "no-unused-vars": "warn",
    },
}];