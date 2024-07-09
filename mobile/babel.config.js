module.exports = function (api) {
  api.cache(true);
  presets: [
    ["babel-preset-expo", { jsxImportSource: "nativewind" }],
    "nativewind/babel",
  ]
};
