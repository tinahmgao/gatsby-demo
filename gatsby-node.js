const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  // 1. fetch data
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  // create page base on template
  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      // set route
      path: `/projects/${node.frontmatter.slug}`,
      // absolute path to template
      component: path.resolve("./src/templates/project-details.js"),
      context: {
        // query variable used in template
        slug: node.frontmatter.slug,
      },
    })
  })
}
