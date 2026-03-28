---
prev:
  text: "Concept"
  link: "/core/concept"
---

# Getting Started (JavaScript Runtime)

To install Calcium runtime for JavaScript via npm, you can run the following
command:

```bash
npm install calcium-js
```

Running Calcium JSON code with the JavaScript runtime is straightforward.
You can create a `Runtime` instance with the JSON code and call the `run` method
to execute it. For example:

<!-- prettier-ignore -->
```javascript
import { Runtime } from "calcium-js"

const code = [
  [1, [], "expr", ["call", ["prop", ["var", "console"], "log"], ["Hello, World."]]],
  [1, [], "end"]
]
const runtime = new Runtime(code, {
//  canAccessWindow: true, // in browser environment to use console.log
  enableGlobal: true, // in Node.js environment to use console.log
})
runtime.run()

```

<!-- prettier-ignore-end -->

says "Hello, World." as output.

## Converter

The `convert` function can convert JavaScript code into Calcium commands.

```js
import { convert } from "calcium-js"

const commands = convert(`
  console.log("Hello, World.")
`)

console.log(commands)
```

This will output the following commands:

<!-- prettier-ignore-start -->
```json
[
[1, [], "expr", ["call", ["prop", ["var", "console"], "log"], ["Hello, World."]]],
[1, [], "end"]
]
```
<!-- prettier-ignore-end -->

Since Calcium does not support all JavaScript features, some code may not be
converted correctly.

## Applications

Coming soon...
