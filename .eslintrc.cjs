module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
	  "@typescript-eslint/ban-types": "off",
	  "@typescript-eslint/no-inferrable-types" : "off",
	  "prefer-const": "off"
  }
};
