import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  lowerDivSidebar: [
    {
      type: 'category',
      label: "CMPT 130 - Introduction to Computer Programming",
      items: [
        "cmpt-130/outline"
      ]
    },
    {
      type: 'category',
      label: "CMPT 135 - Introduction to Computer Programming",
      items: [
        "cmpt-135/outline"
      ]
    },
    {
      type: 'category',
      label: "CMPT 213 - Object Oriented Design in Java",
      items: [
        "cmpt-213/outline"
      ]
    },
    {
      type: 'category',
      label: 'CMPT 225 - Data Structures and Programming',
      items: [
        "cmpt-225/outline"
      ],
    },
    {
      type: 'category',
      label: "CMPT 276 - Introduction to Software Engineering",
      items: [
        "cmpt-276/outline"
      ]
    },
  ],
  upperDivSidebar: [
    {
      type: 'category',
      label: "CMPT 307 - Data Structures and Algorithms",
      items: [
        "cmpt-307/intro"
      ]
    },
    {
      type: 'category',
      label: "CMPT 371 - Data Communications and Networking",
      items: [
        "cmpt-371/intro"
      ]
    }
  ],
  electiveSidebar: [
    {
      type: 'category',
      label: "BUS 361 - Project Management",
      items: [
        "bus-361/intro"
      ]
    }
  ]
};

export default sidebars;
