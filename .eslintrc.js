module.exports = {
  extends: ["amex", "prettier", "prettier/react"],
  plugins: ["prettier"],
  rules: {
    "linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 100,
        endOfLine: "auto",
        trailingComma: "none"
      }
    ]
  }
};
