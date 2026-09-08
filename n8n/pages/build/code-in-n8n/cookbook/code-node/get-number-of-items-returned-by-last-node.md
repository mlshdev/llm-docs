> Commit-pinned source for n8n main: [docs/build/code-in-n8n/cookbook/code-node/get-number-of-items-returned-by-last-node.md](https://github.com/n8n-io/n8n-docs/blob/add4135738cc79c86ba3bf33e3c9756c5e6f4571/docs/build/code-in-n8n/cookbook/code-node/get-number-of-items-returned-by-last-node.md)

# Get number of items returned by the previous node <a id="get-number-of-items-returned-by-the-previous-node"></a>

To get the number of items returned by the previous node:

**JavaScript**

```js
if (Object.keys(items[0].json).length === 0) {
return [
    {
        json: {
            results: 0,
        }
    }
]
}
return [
    {
        json: {
            results: items.length,
        }
    }
];
```

The output will be similar to the following.

```json
[
    {
        "results": 8
    }
]
```

**Python**

```python
if len(items[0].json) == 0:
    return [
        {
            "json": {
                "results": 0,
            }
        }
    ]
else:
    return [
        {
            "json": {
                "results": len(items),
            }
        }
    ]
```

The output will be similar to the following.

```json
[
    {
        "results": 8
    }
]
```
