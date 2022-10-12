import withTM from 'next-transpile-modules';

function defineNextConfig(config) {
  return withTM(['ui'], config);
}

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  }
});

//TODO: Change this to the way it is present in T3
