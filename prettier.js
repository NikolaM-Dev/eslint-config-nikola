module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSameLine: false,
        bracketSpacing: true,
        endOfLine: 'auto',
        htmlWhitespaceSensitivity: 'css',
        jsxSingleQuote: false,
        printWidth: 80,
        proseWrap: 'always',
        quoteProps: 'as-needed',
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
  },
};
