> Commit-pinned source for n8n main: [docs/build/code-in-n8n/use-built-in-shortcuts/jmespath.md](https://github.com/n8n-io/n8n-docs/blob/4d6c9be76dc4442b9c5ae25da13c6a3f4b3b8578/docs/build/code-in-n8n/use-built-in-shortcuts/jmespath.md)

# JMESPath method <a id="jmespath-method"></a>

This is an n8n-provided method for working with the [JMESPath](https://docs.n8n.io/build/work-with-data/handle-special-data-types/query-json-data) library.

> **Info**
> **JavaScript only**
>
> The Python Code node doesn't provide this method. To query JSON in Python, use standard Python instead. Refer to [Query JSON with JMESPath](https://docs.n8n.io/build/work-with-data/handle-special-data-types/query-json-data) for a Python version of each example.

| Method        | Description                                       | Available in Code node? |
| ------------- | ------------------------------------------------- | :---------------------: |
| `$jmespath()` | Perform a search on a JSON object using JMESPath. |            ✅            |
