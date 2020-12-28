module.exports = {
  tabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "always",
  endOfLine: "lf",
  printWidth: 85,
  // Array below used for @trivago/prettier-plugin-sort-imports
  // to specify import types order, left to 
  // right sorted in file as top to bottom,
  // on the very top will be placed imports
  // which can`t be found in this array as they
  // considered as node modules imports.
  //
  // regex explanations left to right:
  // 1: Takes imports which begins with "@/" signs;
  // 2: Takes imports which begins with "./" and NOT ends with "css" or "scss";
  // 3: Takes imports which begins with "./" AND ends with "css" or "scss";
  importOrder: ["^@/(.*)$", "^(?=.*\\.\/)(?:(?!scss|css).)*$", "^\\.\/.*(css|scss)"],
  importOrderSeparation: true,
};
