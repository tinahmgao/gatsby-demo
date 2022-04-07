/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,

    // lazy loading plugins
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // fetching markdown content
    `gatsby-transformer-remark`,

    // add projects markdowns to graphql layer
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },

    // add images to graphql layer
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
  siteMetadata: {
    title: "Tina's Gatsby",
    description: "web dev portfolio",
    copyright: "💜",
    contact: "tina@tinagatsby.com",
  },
}
