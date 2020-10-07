module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-statamic`,
            options: {
              baseUrl: `http://cyberspace-place.test:81`,
              collections: [
                `posts`
              ],
              assets: [`photos`]
            }
        }
    ]
}