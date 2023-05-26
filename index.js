module.exports = {
	env: {
		browser: true,
		es2022: true,
		jest: true,
		node: true,
	},
	extends: ['eslint:recommended'],
	rules: {
		// Possible problems
		'array-callback-return': ['error', { checkForEach: true }],
		'no-await-in-loop': 'error',
		'no-constant-binary-expression': 'error',
		'no-constructor-return': 'error',
		'no-duplicate-imports': 'error',
		'no-new-native-nonconstructor': 'error',
		'no-promise-executor-return': 'error',
		'no-self-compare': 'error',
		'no-template-curly-in-string': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unreachable-loop': 'error',
		'no-unused-private-class-members': 'error',
		'no-use-before-define': 'error',
		'require-atomic-updates': 'error',

		// Suggestions
		'accessor-pairs': 'error',
		'arrow-body-style': ['error', 'as-needed'],
		'block-scoped-var': 'error',
		'capitalized-comments': 'error',
		'class-methods-use-this': 'error',
		// TODO: Change value
		complexity: ['error', 20],
		'consistent-return': 'error',
		curly: ['error', 'multi'],
		'default-case': 'error',
		'default-case-last': 'error',
		'default-param-last': 'error',
		'dot-notation': 'error',
		eqeqeq: 'error',
		'func-name-matching': 'error',
		'func-names': 'error',
		'func-style': ['error', 'expression'],
		'grouped-accessor-pairs': ['error', 'getBeforeSet'],
		'guard-for-in': 'error',
		'id-denylist': 'error',
		'id-length': 'error',
		'id-match': [
			'error',
			// CamelCase, PascalCase, __filename, CONST_VALUE, stream$, $el
			'^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$',
		],
		'init-declarations': ['error', 'always'],
		'logical-assignment-operators': 'warn',
		'max-classes-per-file': ['error', 1],
		'max-depth': ['error', 4],
		'max-lines': [
			'error',
			{ max: 2500, skipBlankLines: false, skipComments: false },
		],
		'max-lines-per-function': 'off',
		'max-nested-callbacks': ['error', 4],
		'max-params': ['error', 3],
		'max-statements': 'off',
		'multiline-comment-style': ['error', 'starred-block'],
		'new-cap': 'error',
		'no-alert': 'error',
		'no-array-constructor': 'error',
		'no-bitwise': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-confusing-arrow': 'error',
		'no-console': ['error', { allow: ['error'] }],
		'no-continue': 'off',
		'no-div-regex': 'error',
		'no-else-return': ['error', { allowElseIf: false }],
		'no-empty-function': ['error', { allow: ['arrowFunctions'] }],
		'no-empty-static-block': 'error',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-label': 'error',
		'no-extra-semi': 'error',
		'no-floating-decimal': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-inline-comments': 'error',
		'no-invalid-this': 'error',
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': ['error', { ignore: [1] }],
		'no-mixed-operators': 'error',
		'no-multi-assign': 'error',
		'no-multi-str': 'error',
		'no-negated-condition': 'error',
		'no-nested-ternary': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'error',
		'no-plusplus': 'off',
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-regex-spaces': 'error',
		'no-restricted-exports': 'off',
		'no-restricted-globals': ['error', 'event', 'fdescribe'],
		'no-restricted-imports': 'off',
		'no-restricted-syntax': ['error', 'WithStatement'],
		'no-return-assign': 'error',
		'no-return-await': 'error',
		// NOTE: Interesting
		'no-script-url': 'error',
		'no-sequences': 'error',
		'no-shadow': 'error',
		'no-shadow-restricted-names': 'error',
		'no-ternary': 'off',
		'no-throw-literal': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'off',
		'no-underscore-dangle': 'error',
		'no-unneeded-ternary': 'error',
		'no-unused-expressions': 'error',
		'no-unused-labels': 'error',
		'no-useless-call': 'error',
		'no-useless-catch': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'error',
		'no-useless-escape': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': ['error', { allowAsStatement: true }],
		'no-warning-comments': 'warn',
		'no-with': 'error',
		'object-shorthand': 'error',
		'one-var': ['error', 'never'],
		'operator-assignment': 'error',
		'prefer-arrow-callback': [
			'error',
			{ allowNamedFunctions: true, allowUnboundThis: true },
		],
		'prefer-const': 'error',
		'prefer-destructuring': 'error',
		'prefer-exponentiation-operator': 'error',
		'prefer-named-capture-group': 'error',
		'prefer-numeric-literals': 'error',
		'prefer-object-has-own': 'error',
		'prefer-object-spread': 'error',
		'prefer-promise-reject-errors': 'error',
		'prefer-regex-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'quote-props': ['error', 'as-needed'],
		radix: 'error',
		'require-await': 'error',
		'require-unicode-regexp': 'error',
		'require-yield': 'error',
		// NOTE: Interesting
		'sort-imports': 'off',
		'sort-keys': 'error',
		'sort-vars': 'error',
		'spaced-comment': 'error',
		strict: ['error', 'never'],
		'symbol-description': 'error',
		'vars-on-top': 'error',
		yoda: 'error',

		// Layout & Formatting
		'array-bracket-newline': ['error', { multiline: true }],
		'array-bracket-spacing': ['error', 'never'],
		'arrow-parens': ['error', 'always'],
		'arrow-spacing': 'error',
		'block-spacing': 'error',
		'brace-style': 'error',
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': 'error',
		'comma-style': ['error', 'last'],
		'computed-property-spacing': ['error', 'never'],
		'dot-location': ['error', 'property'],
		'func-call-spacing': ['error', 'never'],
		'function-call-argument-newline': ['error', 'consistent'],
		'function-paren-newline': ['error', 'multiline'],
		'generator-star-spacing': 'off',
		'implicit-arrow-linebreak': ['error', 'beside'],
		indent: ['error', 'tab'],
		'jsx-quotes': ['error', 'prefer-double'],
		'key-spacing': ['error', { beforeColon: false }],
		'keyword-spacing': ['error', { before: true }],
		'line-comment-position': ['error', { position: 'above' }],
		'linebreak-style': ['error', 'unix'],
		'lines-around-comment': ['error', { beforeBlockComment: true }],
		'lines-between-class-members': ['error', 'always'],
		'max-len': ['error', { code: 80 }],
		'max-statements-per-line': ['error', { max: 1 }],
		'multiline-ternary': ['error', 'always-multiline'],
		'new-parens': 'error',
		'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
		'no-extra-parens': ['error', 'all', { ignoreJSX: 'multi-line' }],
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-spaces': 'error',
		// NOTE: Cant generate errors
		'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-trailing-spaces': 'error',
		'no-whitespace-before-property': 'error',
		'nonblock-statement-body-position': ['error', 'beside'],
		'object-curly-newline': ['error', { multiline: true }],
		'object-curly-spacing': ['error', 'always'],
		'operator-linebreak': ['error', 'before'],
		'padded-blocks': ['error', { blocks: 'never' }],
		'padding-line-between-statements': [
			'error',
			// Return statement
			{ blankLine: 'always', prev: '*', next: 'return' },

			// Variable declaration
			{ blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var'],
			},

			// Directives
			{ blankLine: 'always', prev: 'directive', next: '*' },
			{ blankLine: 'any', prev: 'directive', next: 'directive' },

			// Switch
			{ blankLine: 'always', prev: ['case', 'default'], next: '*' },
		],
		quotes: ['error', 'single', { avoidEscape: true }],
		'rest-spread-spacing': ['error', 'never'],
		semi: ['error', 'always'],
		'semi-spacing': ['error', { before: false, after: true }],
		'semi-style': ['error', 'last'],
		'space-before-blocks': 'error',
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': 'error',
		'space-unary-ops': ['error', { words: true, nonwords: false }],
		'switch-colon-spacing': 'error',
		'template-curly-spacing': ['error', 'never'],
		'template-tag-spacing': ['error', 'never'],
		'unicode-bom': ['error', 'never'],
		'wrap-iife': ['error', 'inside'],
		'wrap-regex': 'error',
		'yield-star-spacing': ['error', { before: true, after: false }],
	},
	overrides: [
		{
			files: ['**/*.ts?(x)'],

			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'plugin:@typescript-eslint/strict',
			],
			plugins: ['@typescript-eslint'],

			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 'latest',
				project: './tsconfig.json',
				sourceType: 'module',
			},

			// TODO: Add rules
			rules: {},
		},
	],
};