module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-statamic`,
            options: {
                // apiUrl: `http://cyberspace-place.test/api/`,
              /*
              * The rest api route prefix that your Statamic site is using.
              * If not set, it uses the default of `api`
              *
              * https://statamic.dev/rest-api#customizing-the-api-url
              */
              // restApiRoutePrefix: `api`,
              /*
               * The base URL of the Statamic site without the trailing slash. This is required.
               * Example : `http://statamic-docs.test`
               */
              baseUrl: `http://cyberspace-place.test:81`,
              /*
              * Statamic Collections
              *
              * https://statamic.dev/rest-api#entries
              */
              collections: [
                `test`,
                `posts`
              ],
              assets: [`photos`]
            }
        },
    ]
}