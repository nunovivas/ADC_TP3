import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Docusaurus/__docusaurus/debug',
    component: ComponentCreator('/Docusaurus/__docusaurus/debug', '62c'),
    exact: true
  },
  {
    path: '/Docusaurus/__docusaurus/debug/config',
    component: ComponentCreator('/Docusaurus/__docusaurus/debug/config', 'f95'),
    exact: true
  },
  {
    path: '/Docusaurus/__docusaurus/debug/content',
    component: ComponentCreator('/Docusaurus/__docusaurus/debug/content', 'fdd'),
    exact: true
  },
  {
    path: '/Docusaurus/__docusaurus/debug/globalData',
    component: ComponentCreator('/Docusaurus/__docusaurus/debug/globalData', '02b'),
    exact: true
  },
  {
    path: '/Docusaurus/__docusaurus/debug/metadata',
    component: ComponentCreator('/Docusaurus/__docusaurus/debug/metadata', 'e9b'),
    exact: true
  },
  {
    path: '/Docusaurus/__docusaurus/debug/registry',
    component: ComponentCreator('/Docusaurus/__docusaurus/debug/registry', '25e'),
    exact: true
  },
  {
    path: '/Docusaurus/__docusaurus/debug/routes',
    component: ComponentCreator('/Docusaurus/__docusaurus/debug/routes', '6a3'),
    exact: true
  },
  {
    path: '/Docusaurus/blog',
    component: ComponentCreator('/Docusaurus/blog', '69c'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/archive',
    component: ComponentCreator('/Docusaurus/blog/archive', '373'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/first-blog-post',
    component: ComponentCreator('/Docusaurus/blog/first-blog-post', 'c21'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/long-blog-post',
    component: ComponentCreator('/Docusaurus/blog/long-blog-post', 'b37'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/mdx-blog-post',
    component: ComponentCreator('/Docusaurus/blog/mdx-blog-post', '2d3'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/tags',
    component: ComponentCreator('/Docusaurus/blog/tags', '198'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/tags/docusaurus',
    component: ComponentCreator('/Docusaurus/blog/tags/docusaurus', '945'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/tags/facebook',
    component: ComponentCreator('/Docusaurus/blog/tags/facebook', '512'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/tags/hello',
    component: ComponentCreator('/Docusaurus/blog/tags/hello', 'c76'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/tags/hola',
    component: ComponentCreator('/Docusaurus/blog/tags/hola', '5fe'),
    exact: true
  },
  {
    path: '/Docusaurus/blog/welcome',
    component: ComponentCreator('/Docusaurus/blog/welcome', '75f'),
    exact: true
  },
  {
    path: '/Docusaurus/markdown-page',
    component: ComponentCreator('/Docusaurus/markdown-page', 'c70'),
    exact: true
  },
  {
    path: '/Docusaurus/docs',
    component: ComponentCreator('/Docusaurus/docs', '30c'),
    routes: [
      {
        path: '/Docusaurus/docs/category/super-carros---faturas',
        component: ComponentCreator('/Docusaurus/docs/category/super-carros---faturas', '30f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus/docs/category/tutorial',
        component: ComponentCreator('/Docusaurus/docs/category/tutorial', 'b70'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus/docs/faturas/congratulations',
        component: ComponentCreator('/Docusaurus/docs/faturas/congratulations', 'e45'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus/docs/faturas/create-a-blog-post',
        component: ComponentCreator('/Docusaurus/docs/faturas/create-a-blog-post', 'b8d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus/docs/faturas/create-a-document',
        component: ComponentCreator('/Docusaurus/docs/faturas/create-a-document', '39d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus/docs/faturas/create-invoice',
        component: ComponentCreator('/Docusaurus/docs/faturas/create-invoice', '374'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus/docs/faturas/deploy-your-site',
        component: ComponentCreator('/Docusaurus/docs/faturas/deploy-your-site', '438'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus/docs/faturas/markdown-features',
        component: ComponentCreator('/Docusaurus/docs/faturas/markdown-features', '0d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus/docs/intro',
        component: ComponentCreator('/Docusaurus/docs/intro', 'bff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus/docs/tutorial/congratulations',
        component: ComponentCreator('/Docusaurus/docs/tutorial/congratulations', 'bd2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus/docs/tutorial/create-a-blog-post',
        component: ComponentCreator('/Docusaurus/docs/tutorial/create-a-blog-post', 'a91'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus/docs/tutorial/create-a-document',
        component: ComponentCreator('/Docusaurus/docs/tutorial/create-a-document', '678'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus/docs/tutorial/create-a-page',
        component: ComponentCreator('/Docusaurus/docs/tutorial/create-a-page', 'db4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus/docs/tutorial/deploy-your-site',
        component: ComponentCreator('/Docusaurus/docs/tutorial/deploy-your-site', '95e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusaurus/docs/tutorial/markdown-features',
        component: ComponentCreator('/Docusaurus/docs/tutorial/markdown-features', 'f08'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/Docusaurus/',
    component: ComponentCreator('/Docusaurus/', '761'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
