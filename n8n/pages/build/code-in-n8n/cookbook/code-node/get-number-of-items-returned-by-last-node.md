> Commit-pinned source for n8n main: [docs/build/code-in-n8n/cookbook/code-node/get-number-of-items-returned-by-last-node.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/build/code-in-n8n/cookbook/code-node/get-number-of-items-returned-by-last-node.md)

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
