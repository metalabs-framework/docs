import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>
      MetaLabs
    </span>
  ),
  project: {
    link: 'https://github.com/metalabs-framework',
  },
  docsRepositoryBase: 'https://github.com/metalabs-framework/docs/blob/main',
  footer: {
    text: 'MetaLabs Framework',
  },
  primaryHue: 270,
  primarySaturation: 60,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - MetaLabs Docs',
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="MetaLabs Docs" />
      <meta property="og:description" content="Documentation for MetaLabs Framework" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
};

export default config;
