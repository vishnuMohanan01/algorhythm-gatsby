module.exports = {
  siteMetadata: {
    title: `Algorhythm22`,
    description: `Association Day of Computer Science and Engineering, GEC Palakkad.`,
    author: `Vishnu Mohanan; Anjas Kunnummal; Adhil Muhammed; Alen Kuriakose; Abdul Shaharath;`,
    siteUrl: `https://www.algorhythm22.tech`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Algorhythm22`,
        short_name: `Algorhythm`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/algorhythm-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
