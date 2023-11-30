import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/doku/__docusaurus/debug',
    component: ComponentCreator('/doku/__docusaurus/debug', '68b'),
    exact: true
  },
  {
    path: '/doku/__docusaurus/debug/config',
    component: ComponentCreator('/doku/__docusaurus/debug/config', 'b2b'),
    exact: true
  },
  {
    path: '/doku/__docusaurus/debug/content',
    component: ComponentCreator('/doku/__docusaurus/debug/content', '8c0'),
    exact: true
  },
  {
    path: '/doku/__docusaurus/debug/globalData',
    component: ComponentCreator('/doku/__docusaurus/debug/globalData', '926'),
    exact: true
  },
  {
    path: '/doku/__docusaurus/debug/metadata',
    component: ComponentCreator('/doku/__docusaurus/debug/metadata', 'cb2'),
    exact: true
  },
  {
    path: '/doku/__docusaurus/debug/registry',
    component: ComponentCreator('/doku/__docusaurus/debug/registry', '029'),
    exact: true
  },
  {
    path: '/doku/__docusaurus/debug/routes',
    component: ComponentCreator('/doku/__docusaurus/debug/routes', 'ee8'),
    exact: true
  },
  {
    path: '/doku/blog',
    component: ComponentCreator('/doku/blog', 'a68'),
    exact: true
  },
  {
    path: '/doku/blog/archive',
    component: ComponentCreator('/doku/blog/archive', 'f0c'),
    exact: true
  },
  {
    path: '/doku/blog/first-blog-post',
    component: ComponentCreator('/doku/blog/first-blog-post', 'ee1'),
    exact: true
  },
  {
    path: '/doku/blog/long-blog-post',
    component: ComponentCreator('/doku/blog/long-blog-post', '6d4'),
    exact: true
  },
  {
    path: '/doku/blog/mdx-blog-post',
    component: ComponentCreator('/doku/blog/mdx-blog-post', 'dfe'),
    exact: true
  },
  {
    path: '/doku/blog/tags',
    component: ComponentCreator('/doku/blog/tags', 'f19'),
    exact: true
  },
  {
    path: '/doku/blog/tags/docusaurus',
    component: ComponentCreator('/doku/blog/tags/docusaurus', 'f47'),
    exact: true
  },
  {
    path: '/doku/blog/tags/facebook',
    component: ComponentCreator('/doku/blog/tags/facebook', '494'),
    exact: true
  },
  {
    path: '/doku/blog/tags/hello',
    component: ComponentCreator('/doku/blog/tags/hello', '5e4'),
    exact: true
  },
  {
    path: '/doku/blog/tags/hola',
    component: ComponentCreator('/doku/blog/tags/hola', '773'),
    exact: true
  },
  {
    path: '/doku/blog/welcome',
    component: ComponentCreator('/doku/blog/welcome', '7fc'),
    exact: true
  },
  {
    path: '/doku/markdown-page',
    component: ComponentCreator('/doku/markdown-page', '44c'),
    exact: true
  },
  {
    path: '/doku/docs',
    component: ComponentCreator('/doku/docs', 'eb8'),
    routes: [
      {
        path: '/doku/docs/category/tutorial---basics',
        component: ComponentCreator('/doku/docs/category/tutorial---basics', '9e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doku/docs/category/tutorial---extras',
        component: ComponentCreator('/doku/docs/category/tutorial---extras', '1c1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doku/docs/intro',
        component: ComponentCreator('/doku/docs/intro', '7a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doku/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/doku/docs/tutorial-basics/congratulations', '690'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doku/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/doku/docs/tutorial-basics/create-a-blog-post', 'cdf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doku/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/doku/docs/tutorial-basics/create-a-document', '4c1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doku/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/doku/docs/tutorial-basics/create-a-page', '83c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doku/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/doku/docs/tutorial-basics/deploy-your-site', 'e5a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doku/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/doku/docs/tutorial-basics/markdown-features', 'e83'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doku/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/doku/docs/tutorial-extras/manage-docs-versions', '98f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/doku/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/doku/docs/tutorial-extras/translate-your-site', '829'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/doku/',
    component: ComponentCreator('/doku/', '26f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
