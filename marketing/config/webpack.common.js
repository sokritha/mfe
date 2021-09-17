module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // every file that end with .m or .js will process by babbel
        exclude: /node_modules/, // do not run babbel on any file out of node module
        use: {
          loader: "babel-loader", // use babel to convert all differ version of js to ES5
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"], //jsx
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
