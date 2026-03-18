const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

const isGithubPages = process.env.GITHUB_PAGES === 'true';

module.exports = withNextra({
  output: 'export',
  images: { unoptimized: true },
  basePath: isGithubPages ? '/docs' : '',
  assetPrefix: isGithubPages ? '/docs/' : '',
});
