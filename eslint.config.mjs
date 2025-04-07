// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';
import filenames from 'eslint-plugin-filenames';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      react: reactPlugin,
      unicorn,
      filenames,
      prettier: prettierPlugin,
    },
    rules: {
      'filenames/match-regex': ['error', '^[a-z0-9\\-\\.]+$'],
      'filenames/match-exported': ['error', null, '\\.ts$'],
      'prettier/prettier': 'error',
    },
  },
];
