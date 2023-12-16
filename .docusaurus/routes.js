import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ADC_TP3/__docusaurus/debug',
    component: ComponentCreator('/ADC_TP3/__docusaurus/debug', '025'),
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/config',
    component: ComponentCreator('/ADC_TP3/__docusaurus/debug/config', '46c'),
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/content',
    component: ComponentCreator('/ADC_TP3/__docusaurus/debug/content', 'b3c'),
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/globalData',
    component: ComponentCreator('/ADC_TP3/__docusaurus/debug/globalData', '27a'),
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/metadata',
    component: ComponentCreator('/ADC_TP3/__docusaurus/debug/metadata', '8ad'),
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/registry',
    component: ComponentCreator('/ADC_TP3/__docusaurus/debug/registry', 'b28'),
    exact: true
  },
  {
    path: '/ADC_TP3/__docusaurus/debug/routes',
    component: ComponentCreator('/ADC_TP3/__docusaurus/debug/routes', '8d8'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog',
    component: ComponentCreator('/ADC_TP3/blog', '384'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/archive',
    component: ComponentCreator('/ADC_TP3/blog/archive', '5c9'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/Bemvindo',
    component: ComponentCreator('/ADC_TP3/blog/Bemvindo', '294'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/first-blog-post',
    component: ComponentCreator('/ADC_TP3/blog/first-blog-post', '649'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/long-blog-post',
    component: ComponentCreator('/ADC_TP3/blog/long-blog-post', '137'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/mdx-blog-post',
    component: ComponentCreator('/ADC_TP3/blog/mdx-blog-post', '02d'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/tags',
    component: ComponentCreator('/ADC_TP3/blog/tags', '0f2'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/tags/docusaurus',
    component: ComponentCreator('/ADC_TP3/blog/tags/docusaurus', '5a1'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/tags/facebook',
    component: ComponentCreator('/ADC_TP3/blog/tags/facebook', '354'),
    exact: true
  },
  {
    path: '/ADC_TP3/blog/tags/hello',
    component: ComponentCreator('/ADC_TP3/blog/tags/hello', '711'),
    exact: true
  },
  {
    path: '/ADC_TP3/markdown-page',
    component: ComponentCreator('/ADC_TP3/markdown-page', '64e'),
    exact: true
  },
  {
    path: '/ADC_TP3/docs',
    component: ComponentCreator('/ADC_TP3/docs', '05f'),
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
    component: ComponentCreator('/ADC_TP3/', 'de6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
