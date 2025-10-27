// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
// import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
    rules: {
      'import/order': 'error',
      'import/enforce-node-protocol-usage': ['error', 'always'],
    },
  },
  eslintConfigPrettier,
);
