import { themes as prismThemes } from "prism-react-renderer";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

export default {
  title: "Tommy's Class Notes",
  tagline: "Made by Tommy Oh",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://TommyOh0428.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/class-note/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "TommyOh0428", // Usually your GitHub org/user name.
  projectName: "class-note", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: 'docs',
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/TommyOh0428/class-note",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/TommyOh0428/class-note",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    {
      href: '/class-note/katex/katex.min.css',
      type: 'text/css',
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Tommy's Class Notes",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "lowerDivSidebar",
          position: "left",
          label: "Lower Division Courses",
        },
        {
          type: "docSidebar",
          sidebarId: "upperDivSidebar",
          position: "left",
          label: "Upper Division Courses",
        },
        {
          type: "docSidebar",
          sidebarId: "electiveSidebar",
          position: "left",
          label: "Elective Courses",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          type: "html",
          position: "right",
          value:
            '<a href="https://github.com/TommyOh0428/class-note" target="_blank" style="content: \'\'; width: 24px; height: 24px; background-image: url(\'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg\'); background-repeat: no-repeat; background-size: 24px 24px; display: flex"></a>',
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Math Courses",
          items: [
            {
              label: "MATH 150",
              to: "docs/math-150/outline",
            },
            {
              label: "MATH 240",
              to: "docs/math-240/outline",
            },
            {
              label: "MACM 101",
              to: "docs/macm-101/outline",
            },
            {
              label: "MACM 201",
              to: "docs/macm-201/outline",
            },
            {
              label: "BUS 232",
              to: "docs/bus-232/outline",
            }
          ],
        },
        {
          title: "CMPT Lower Division Courses",
          items: [
            {
              label: "CMPT 130",
              to: "docs/cmpt-130/outline",
            },
            {
              label: "CMPT 135",
              to: "docs/cmpt-135/outline",
            },
            {
              label: "CMPT 213",
              to: "docs/cmpt-213/outline",
            },
            {
              label: "CMPT 225",
              to: "docs/cmpt-225/outline",
            },
            {
              label: "CMPT 276",
              to: "docs/cmpt-276/outline",
            },
          ],
        },
        {
          title: "CMPT Upper Division Courses",
          items: [
            {
              label: "CMPT 307",
              to: "docs/cmpt-307/outline",
            },
            {
              label: "CMPT 310",
              to: "docs/cmpt-310/outline"
            },
            {
              label: "CMPT 371",
              to: "docs/cmpt-371/outline",
            },
            {
              label: "CMPT 376W",
              to: "docs/cmpt-376w/outline",
            },
            {
              label: "CMPT 383",
              to: "docs/cmpt-383/outline",
            }
          ],
        },
        {
          title: "Lower Division Elective",
          items: [
            {
              label: "CRIM 101",
              to: "docs/crim-101/outline",
            },
            {
              label: "CA 135",
              to: "docs/ca-135/outline",
            },
            {
              label: "HIST 102W",
              to: "docs/hist-102w/outline",
            },
            {
              label: "IAT 210",
              to: "docs/iat-210/outline",
            },
            {
              label: "EVSC 100",
              to: "docs/evsc-100/outline",
            },
          ],
        },
        {
          title: "Upper Division Elective",
          items: [
            {
              label: "ARCH 301",
              to: "docs/arch-301/outline",
            },
            {
              label: "BUS 361",
              to: "docs/bus-361/outline",
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tommy Oh. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};


