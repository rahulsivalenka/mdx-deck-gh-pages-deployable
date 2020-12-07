const proj = require('./package.json').name;

module.exports = {
  pathPrefix: `/${proj}`,
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        cli: true,
        contentPath: 'slides',
      },
    },
  ],
};
