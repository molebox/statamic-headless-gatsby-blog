const path = require(`path`)

// create the pages from the statamic md content
exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions;
    // Our blog post layout template. Used to layout all out posts
    const postLayoutTemplate = path.resolve('src/templates/post-layout.js');

    return graphql(`
        {
            allCollectionPosts {
                nodes {
                  slug
                  title
                  content
                }
            }
        }
    `)
    .then(result => {
        // If we get any errors throw them back at'cha
        if (result.errors) {
            throw result.errors
        }

        // Grab the posts array
        const posts = result.data.allCollectionPosts.nodes;
        console.log({posts})

        // Loop through the posts and create the post pages
        posts.forEach((post, index) => {
            // Create the page using the slug
            createPage({
                path: post.slug,
                component: postLayoutTemplate,
                context: {
                    slug: post.slug
                }
            })
        })
    })
}
