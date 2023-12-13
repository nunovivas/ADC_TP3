import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/Docusaurus/docs', 'fe8'),
    routes: [
      {
        path: '/Docusaurus/docs/category/super-carros---faturas',
        component: ComponentCreator('/Docusaurus/docs/category/super-carros---faturas', '30f'),
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
        path: '/Docusaurus/docs/intro',
        component: ComponentCreator('/Docusaurus/docs/intro', 'bff'),
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
