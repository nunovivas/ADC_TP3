import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ADC_TP3/__docusaurus/debug',
    component: ComponentCreator('/ADC_TP3/__docusaurus/debug', '8eb'),
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/config',
    component: ComponentCreator('/ADC_TP3/__docusaurus/debug/config', 'b6e'),
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/content',
    component: ComponentCreator('/ADC_TP3/__docusaurus/debug/content', '93a'),
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/globalData',
    component: ComponentCreator('/ADC_TP3/__docusaurus/debug/globalData', '293'),
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/metadata',
    component: ComponentCreator('/ADC_TP3/__docusaurus/debug/metadata', 'fd0'),
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/registry',
    component: ComponentCreator('/ADC_TP3/__docusaurus/debug/registry', '2dd'),
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/routes',
    component: ComponentCreator('/ADC_TP3/__docusaurus/debug/routes', '048'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog',
    component: ComponentCreator('/ADC_TP3/blog', 'b8d'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/archive',
    component: ComponentCreator('/ADC_TP3/blog/archive', 'f37'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/Bemvindo',
    component: ComponentCreator('/ADC_TP3/blog/Bemvindo', '977'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/first-blog-post',
    component: ComponentCreator('/ADC_TP3/blog/first-blog-post', '529'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/long-blog-post',
    component: ComponentCreator('/ADC_TP3/blog/long-blog-post', 'aaf'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/mdx-blog-post',
    component: ComponentCreator('/ADC_TP3/blog/mdx-blog-post', '34b'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/tags',
    component: ComponentCreator('/ADC_TP3/blog/tags', 'c09'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/tags/docusaurus',
    component: ComponentCreator('/ADC_TP3/blog/tags/docusaurus', 'df8'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/tags/facebook',
    component: ComponentCreator('/ADC_TP3/blog/tags/facebook', 'ed7'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/tags/hello',
    component: ComponentCreator('/ADC_TP3/blog/tags/hello', '538'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/tags/hola',
    component: ComponentCreator('/ADC_TP3/blog/tags/hola', 'f34'),
    exact: true
  },
  {
    path: '/ADC_TP3/markdown-page',
    component: ComponentCreator('/ADC_TP3/markdown-page', '968'),
    exact: true
  },
  {
    path: '/ADC_TP3/docs',
    component: ComponentCreator('/ADC_TP3/docs', 'ff8'),
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
    component: ComponentCreator('/ADC_TP3/', 'bc6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
