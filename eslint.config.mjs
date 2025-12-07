// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import { configs as tseslintConfigs } from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default defineConfig(
  eslintPluginUnicorn.configs.recommended,
  eslint.configs.recommended,
  tseslintConfigs.recommended,
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
