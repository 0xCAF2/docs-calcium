import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Calcium Language",
  description: "An interpreter to run JSON",
  base: "/docs/calcium/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    externalLinkIcon: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "Core Concept", link: "/core/concept" },
    ],
    outline: [2, 3],

    sidebar: [
      {
        text: "Core",
        items: [{ text: "Concept", link: "/core/concept" }],
      },
      {
        text: "Python (calciumpy)",
        items: [{ text: "Getting Started", link: "/py/getting-started" }],
      },
      {
        text: "TypeScript (calcium-js)",
        items: [{ text: "Getting Started", link: "/js/getting-started" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/0xCAF2" }],
  },
})
