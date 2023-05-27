module.exports = {
  env: { es2020: true },
  parserOptions: { ecmaVersion: 'lastest', sourceType: 'module' },
  plugins: ['simple-import-sort', 'import', 'unused-imports'],
  settings: {
    'import/ignore': ['node_modules', '.json$', '.(scss|less|css|styl)$'],
  },
  rules: {
    // TODO: Finish https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/no-webpack-loader-syntax': 'error',
    // NOTE: Change to use simple-import-sort implementation?
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          ['external', 'internal'],
          'parent',
          ['sibling', 'index'],
        ],
      },
    ],

    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',

    'unused-imports/no-unused-imports': 'error',

    'no-unused-vars': 'off',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],

      extends: 'plugin:import/typescript',
      plugins: ['@typescript-eslint'],

      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        project: './tsconfig.json',
        sourceType: 'module',
      },

      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
