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
  // to specify import types order, 
  // from first to last regex in the array
  // sorted in file as top to bottom,
  // on the very top will be placed imports
  // which can`t be found in this array as they
  // considered as node modules imports.
  //
  // regex explanations from first to last:
  // 1: Takes imports which begins with "@/" and NOT ends with one of: .svg, .png, .jpg, .jpeg, .gif, .webp;
  // 2: Takes imports which begins with "./" and NOT ends with one of: .scss, .css, .svg, .png, .jpg, .jpeg, .gif, .webp;
  // 3: Takes imports which begins with any symbol AND ends with one of: .svg, .png, .jpg, .jpeg, .gif, .webp;
  // 4: Takes imports which begins with "./" or "../" AND ends with .css or .scss;
  //
  // !!Important!!
  // In case of modifying this array, keep in mind that those
  // regular expressions are escaped to be compatible with JSON.
  importOrder: [
    "^@\/.*(?<!(\\.svg|\\.png|\\.jpg|\\.jpeg|\\.gif|\\.webp))$",
    "^(?=.*\\.\/)(?:(?!\\.scss|\\.css|\\.svg|\\.png|\\.jpg|\\.jpeg|\\.gif|\\.webp).)*$",
    "^.*(\\.svg|\\.png|\\.jpg|\\.jpeg|\\.gif|\\.webp)",
    "^(\\.\/|\\.\\.\/).*(\\.css|\\.scss)",
  ],
  importOrderSeparation: true,
};
