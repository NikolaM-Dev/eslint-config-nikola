module.exports = {
  plugins: ['simple-import-sort', 'unused-imports'],
  rules: {
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',

    'no-unused-vars': 'off',

    'unused-imports/no-unused-imports': 'error',
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

      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
