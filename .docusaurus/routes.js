import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ADC_TP3/__docusaurus/debug',
    component: ComponentCreator('/ADC_TP3/__docusaurus/debug', 'd2e'),
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/config',
    component: ComponentCreator('/ADC_TP3/__docusaurus/debug/config', '70d'),
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/content',
    component: ComponentCreator('/ADC_TP3/__docusaurus/debug/content', 'c84'),
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/globalData',
    component: ComponentCreator('/ADC_TP3/__docusaurus/debug/globalData', '60a'),
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/metadata',
    component: ComponentCreator('/ADC_TP3/__docusaurus/debug/metadata', '95a'),
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/registry',
    component: ComponentCreator('/ADC_TP3/__docusaurus/debug/registry', '68b'),
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/routes',
    component: ComponentCreator('/ADC_TP3/__docusaurus/debug/routes', '91f'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog',
    component: ComponentCreator('/ADC_TP3/blog', '3b3'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/archive',
    component: ComponentCreator('/ADC_TP3/blog/archive', '047'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/first-blog-post',
    component: ComponentCreator('/ADC_TP3/blog/first-blog-post', '0bc'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/long-blog-post',
    component: ComponentCreator('/ADC_TP3/blog/long-blog-post', '476'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/mdx-blog-post',
    component: ComponentCreator('/ADC_TP3/blog/mdx-blog-post', 'd8a'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/tags',
    component: ComponentCreator('/ADC_TP3/blog/tags', '406'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/tags/docusaurus',
    component: ComponentCreator('/ADC_TP3/blog/tags/docusaurus', 'f97'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/tags/facebook',
    component: ComponentCreator('/ADC_TP3/blog/tags/facebook', '541'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/tags/hello',
    component: ComponentCreator('/ADC_TP3/blog/tags/hello', '688'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/tags/hola',
    component: ComponentCreator('/ADC_TP3/blog/tags/hola', '8f7'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/welcome',
    component: ComponentCreator('/ADC_TP3/blog/welcome', '6f9'),
    exact: true
  },
  {
    path: '/ADC_TP3/markdown-page',
    component: ComponentCreator('/ADC_TP3/markdown-page', '58b'),
    exact: true
  },
  {
    path: '/ADC_TP3/docs',
    component: ComponentCreator('/ADC_TP3/docs', '042'),
    routes: [
      {
        path: '/ADC_TP3/docs/category/clientes',
        component: ComponentCreator('/ADC_TP3/docs/category/clientes', '43a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ADC_TP3/docs/category/faturas',
        component: ComponentCreator('/ADC_TP3/docs/category/faturas', '9c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ADC_TP3/docs/category/veiculos',
        component: ComponentCreator('/ADC_TP3/docs/category/veiculos', '677'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ADC_TP3/docs/clientes/create-client',
        component: ComponentCreator('/ADC_TP3/docs/clientes/create-client', 'fdb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ADC_TP3/docs/faturas/create-invoice',
        component: ComponentCreator('/ADC_TP3/docs/faturas/create-invoice', '7e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ADC_TP3/docs/intro',
        component: ComponentCreator('/ADC_TP3/docs/intro', 'dc1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ADC_TP3/docs/veiculos/create-car',
        component: ComponentCreator('/ADC_TP3/docs/veiculos/create-car', 'a73'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/ADC_TP3/',
    component: ComponentCreator('/ADC_TP3/', '0fd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
