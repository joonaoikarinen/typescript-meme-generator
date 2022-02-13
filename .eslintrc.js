module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    env: {
        "browser": true,
        "amd": true,
        "node": true
    },
    parserOptions: {
        "ecmaVersion": 6,
        "ecmaFeatures": {
          "jsx": true
        },
        "sourceType": "script",
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime'
    ],
    rules: {
        "@typescript-eslint/ban-ts-comment": "off"
    },
  }