// import withTM from "next-transpile-modules";

// function defineNextConfig(config) {
//   // return withTM(['ui'], config);
//   return config;
// }

// export default defineNextConfig({
//   reactStrictMode: true,
//   swcMinify: true,
//   i18n: {
//     locales: ["en"],
//     defaultLocale: "en",
//   },
// });
const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
