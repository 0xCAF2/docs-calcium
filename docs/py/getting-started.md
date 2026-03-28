---
next: false
---

# Getting Started (Python Runtime)

To get Calcium runtime from PyPI, you can run the following command:

```bash
pip install calciumpy
```

::: tip
On some systems you may need `pip3` instead:

```bash
pip3 install calciumpy
```

:::

## Generate JSON

Calcium JSON code can be generated from the subset of Python code. For example, the following Python code:

```python
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n - 1) + fib(n - 2)

print(fib(10))
```

can be converted to the following JSON code by running:

```python
from calciumpy.tool import convert

with open("fib.py") as f:
    source = f.read()
    json_code = convert(source)
    print(json_code)
```

Next, you can run the generated JSON code with Calcium runtime:

```python{2,7-9}
from calciumpy.tool import convert
from calciumpy import Runtime

with open("fib.py") as f:
    source = f.read()
    json_code = convert(source)
    # print(json_code)
    runtime = Runtime(json_code)
    runtime.run()
```

will print the Fibonacci number of 10, which is 55.

## Supported Commands

| Command    | Description                                  |
| ---------- | -------------------------------------------- |
| `=`        | Assign a value to a variable.                |
| `def`      | Define a function.                           |
| `return`   | Return a value from a function.              |
| `if`       | Start an if block.                           |
| `elif`     | Start an elif block.                         |
| `else`     | Start an else block.                         |
| `for`      | Start a for loop.                            |
| `while`    | Start a while loop.                          |
| `continue` | Skip the rest of the current loop iteration. |
| `break`    | Exit the current loop.                       |
| `expr`     | Evaluate an expression statement.            |
| `class`    | Define a simple class.                       |
| `import`   | Import a module.                             |
| `#`        | A comment.                                   |
| `pass`     | A no-op command.                             |
| `end`      | End of the current module.                   |

## Applications

[Calcium Editor](https://caed.app/) is a web application that allows you to
create code using visual programming with
[Blockly](https://developers.google.com/blockly) and execute it with
[Pyodide](https://pyodide.org/en/stable/) and [calciumpy](https://github.com/0xCAF2/calciumpy).
