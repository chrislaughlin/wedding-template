module.exports = {
  siteMetadata: {
    title: `Wedding`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `@agney/gatsby-theme-wedding`,
      options: {
        contentPath: "occasion", // Tell the theme where your data is.
        basePath: "/" // Tell the theme which URL to render the theme at.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
