module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jest': true
  },
  'parser': '@typescript-eslint/parser',
  'extends': ['standard', 'plugin:@typescript-eslint/recommended'],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    '@typescript-eslint/indent': ['error', 2]
  }
}
