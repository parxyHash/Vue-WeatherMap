module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    quotes: [
      'warn',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'prefer-destructuring': [
      'warn',
      {
        object: true,
        array: true,
      },
    ],
    'no-multi-spaces': 'error',
    'no-console': 'off',
    'comma-dangle': 'off',
    'react/prop-types': 0,
    'linebreak-style': 'off',
    'prettier/prettier': [
      'warn',
      {
        semi: true,
        tabWidth: 2,
        printWidth: 85,
        arrowParens: 'always',
        singleQuote: true,
        bracketSpacing: true,
        trailingComma: 'es5',
        vueIndentScriptAndStyle: true,
      },
    ],
  },
};
