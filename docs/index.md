---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Calcium Language"
  text: "An interpreter to run JSON"
  tagline: Represent your code as data.
  actions:
    - theme: brand
      text: Core Concept
      link: /core/concept
    - theme: alt
      text: Python Runtime
      link: /py/getting-started
    - theme: alt
      text: JavaScript Runtime
      link: /js/getting-started

features:
  - title: Structure code programmatically
    details: Calcium's input is represented as JSON, allowing you to manipulate and execute code easily.
  - title: Any string can be a name
    details: For example, a variable named "the number of apples" is valid. This is useful especially in learning environments, where you can use natural language to name your variables.
  - title: Functions are supported
    details: You can define and call simple functions, just like in Python or JavaScript. Those are also represented as JSON!
---
