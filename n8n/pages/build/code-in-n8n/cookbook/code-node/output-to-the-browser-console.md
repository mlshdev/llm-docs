> Commit-pinned source for n8n main: [docs/build/code-in-n8n/cookbook/code-node/output-to-the-browser-console.md](https://github.com/n8n-io/n8n-docs/blob/50208b802689f4eeeb23e88e9fb10a47726f9755/docs/build/code-in-n8n/cookbook/code-node/output-to-the-browser-console.md)

# Output to the browser console with `console.log()` or `print()` in the Code node <a id="output-to-the-browser-console-with-consolelog-or-print-in-the-code-node"></a>

You can use `console.log()` or `print()` in the Code node to help when writing and debugging your code.

For help opening your browser console, refer to [this guide by Balsamiq](https://balsamiq.com/support/faqs/browserconsole/).

## console.log (JavaScript) <a id="consolelog-javascript"></a>

For technical information on `console.log()`, refer to the [MDN developer docs](https://developer.mozilla.org/en-US/docs/Web/API/Console/log).

For example, copy the following code into a Code node, then open your console and run the node:

```js
let a = "apple";
console.log(a);
```

## print (Python) <a id="print-python"></a>

For technical information on `print()`, refer to the [Real Python's guide](https://realpython.com/python-print/).

For example, set your Code node **Language** to **Python**, copy the following code into the node, then open your console and run the node:

```python
a = "apple"
print(a)
```

### Printing node data <a id="printing-node-data"></a>

`_items` and `_item` are standard Python objects, so you can print them directly:

```python
print(_items)
```

> **Info**
> **`type()` isn't available**
>
> The Python Code node denies some built-in functions by default, including `type()`. Refer to [task runners environment variables](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/task-runners) for the full list and how to change it when self-hosting.
