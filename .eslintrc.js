module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'prettier/prettier': [
      2,
      {
        trailingComma: 'es5',
        singleQuote: true,
        semi: false
      },
    ]
  },
  parserOptions: {
    parser: "typescript-eslint-parser"
  }
};
