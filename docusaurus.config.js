// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ExcelReader',
  tagline: 'ExcelReader is a plugin for the JetBrains platform. It can parse files in three formats of xls, xlsx, csv in most editors of JetBrains, and supports more powerful data filtering functions',
  url: 'https://github.com/',
  baseUrl: '/ExcelReader/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'obiscr', // Usually your GitHub org/user name.
  projectName: 'ExcelReader', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['zh-CN', 'en'],
  //   localeConfigs: {
  //     en: {
  //       htmlLang: 'en-US',
  //     },
  //     zh: {
  //       htmlLang: 'ZH-CN',
  //     },
  //   },
  // },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/obiscr/ExcelReaderDocs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/obiscr/ExcelReaderDocs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_us',
        content:
            '<b>🎉🎉🎉 The new plugin <a href="https://plugins.jetbrains.com/plugin/18663-exceleditor">ExcelEditor</a> has now been released. <a href="https://plugins.jetbrains.com/plugin/18663-exceleditor">Show me</a>!</b> 🎉🎉🎉',
        backgroundColor: '#cf89f0',
        textColor: '#fff',
        isCloseable: false,
      },
      navbar: {
        title: 'ExcelReader',
        logo: {
          alt: 'ExcelReader Logo',
          src: 'img/excel_reader.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/obiscr/ExcelReader',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://plugins.jetbrains.com/plugin/14722-excelreader',
            position: 'right',
            className: 'header-jetbrains-link',
            'aria-label': 'JetBrains Plugin Platform',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/observercreator/shared_invite/zt-14g3dnzkx-FGJM_WgY~vj0bJINTHQSAA',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © 2016 - ${new Date().getFullYear()} Observer & Creator. Built with <a href="https://docusaurus.io/">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
