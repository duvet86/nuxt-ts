module.exports = {
  // moduleFileExtensions: ["js", "json", "vue", "ts", "tsx"],
  // transform: {
  //   "\\.(ts|tsx)$": "ts-jest",
  //   ".*\\.(vue)$": "jest-vue-preprocessor"
  // },
  // snapshotSerializers: ["jest-serializer-vue"],
  // testRegex: "/__tests__/.*\\.(ts|tsx|js)$",
  // mapCoverage: true
  moduleFileExtensions: ["js", "jsx", "json", "vue", "ts", "tsx"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1"
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ],
  testURL: "http://localhost/"
};
