---
---

# Core Concept

Calcium has no lexical parser. Instead, it directly executes JSON as code. This means that the structure of your code is determined by the structure of the JSON.

Calcium uses arrays to represent each line of code. Those arrays correspond to statements, called as "commands" here.

## Running JSON as Code

Commands are like mnemonic instructions that tell Calcium what to do. Each command is represented as an array, where the first element is the kind of command, and the rest are its arguments. For example,

<!-- prettier-ignore -->
```json
[
  [1, [], "#", "0.4.3"],
  [1, [], "def", "fib", ["n"]],
    [2, [], "ifs"],
      [3, [], "if", ["<", ["var", "n"], ["num", "2"]]],
        [4, [], "return", ["num", "1"]],
      [3, [], "else"],
        [4, [], "return", ["+", ["call", ["var", "fib"], [["-", ["var", "n"], ["num", "1"]]]], ["call", ["var", "fib"], [["-", ["var", "n"], ["num", "2"]]]]]],
  [1, [], "expr", ["call", ["var", "print"], [["call", ["var", "fib"], [["num", "10"]]]]]],
  [1, [], "end"]
]
```

<!-- prettier-ignore-end -->

the above JSON defines a function `fib` that calculates the Fibonacci number of `n`, and then prints the Fibonacci number of 10. The third element of each arrays is the command kind, such as `def`, `if`, `return`, etc. The second element is reserved for future use, and is currently always an empty array.

The first element is the indentation level, which is used to determine the structure of the code. Since Calcium code uses arrays as its basic building blocks, we can can easily get line numbers by the position of the command in the JSON. Meanwhile, the block's indentation level needs to be determined some way. Though the example above has visual indentation, it is not necessary for the JSON to be visually indented and has no effect on the execution of the code.

### Addresses

In Python, blocks are determined by indentation in the source code. In Calcium, the integer in the first element of each command array represents the indentation level. A block is formed by commands that have a greater indentation level than the previous command. When a command with a smaller indentation level is encountered, it indicates the end of the current block.

Therefore, in runtime, the state of the program can be represented as 2D point of (x, y), where x is the indentation level, and y is the line number. We call this point "address".

## Expressions

Calcium supports expressions, which are also represented as an array. The first element of the array is the kind of expression, such as `var`, `num`, `call`, etc. The rest of the elements are the arguments of the expression.

Binary operators are represented as expressions with the operator as the first element. For example, `["+", ["var", "a"], ["var", "b"]]` represents the expression `a + b`. It's reverse polish notation, which is easier to parse and evaluate.

### All names are just strings

Contrary to most programming languages, in Calcium, any string can be a name because it's always quoted in JSON. As long as it is a valid JSON string, it can be used as a name for variables, functions, or properties. Internally, the runtime handles that name as the key of a dictionary or a map.
