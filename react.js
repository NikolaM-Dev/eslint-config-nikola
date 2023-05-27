module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react-refresh'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/self-closing-comp': 'error',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'react/jsx-filename-extension': [
          'error',
          { extensions: ['.ts', '.tsx'] },
        ],
        'react/prop-types': 'off',
      },
    },
  ],
};
