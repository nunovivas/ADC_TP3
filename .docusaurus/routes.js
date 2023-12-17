import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ADC_TP3/__docusaurus/debug',
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/config',
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/content',
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/globalData',
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/metadata',
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/registry',
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/routes',
    exact: true
  },
  {
    path: '/ADC_TP3/blog',
    exact: true
  },
  {
    path: '/ADC_TP3/blog/archive',
    exact: true
  },
  {
    path: '/ADC_TP3/blog/Bemvindo',
    exact: true
  },
  {
    path: '/ADC_TP3/blog/first-blog-post',
    exact: true
  },
  {
    path: '/ADC_TP3/blog/long-blog-post',
    exact: true
  },
  {
    path: '/ADC_TP3/blog/mdx-blog-post',
    exact: true
  },
  {
    path: '/ADC_TP3/blog/tags',
    exact: true
  },
  {
    path: '/ADC_TP3/blog/tags/docusaurus',
    exact: true
  },
  {
    path: '/ADC_TP3/blog/tags/facebook',
    exact: true
  },
  {
    path: '/ADC_TP3/blog/tags/hello',
    exact: true
  },
  {
    path: '/ADC_TP3/markdown-page',
    exact: true
  },
  {
    path: '/ADC_TP3/docs',
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
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
