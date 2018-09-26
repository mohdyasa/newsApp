// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  homeApi: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=61bec0971ef34df9a766d525903ffd46',
  worldApi: 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=33dd81e7f4a6411c9e1aab5d12030b68',
  sourceApi: 'https://newsapi.org/v2/sources?apiKey=33dd81e7f4a6411c9e1aab5d12030b68'
};
