> Commit-pinned source for n8n main: [docs/build/code-in-n8n/use-built-in-shortcuts/jmespath.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/build/code-in-n8n/use-built-in-shortcuts/jmespath.md)

# JMESPath method <a id="jmespath-method"></a>

This is an n8n-provided method for working with the [JMESPath](https://docs.n8n.io/build/work-with-data/handle-special-data-types/query-json-data) library.

> **Info**
> **Python support**
>
> You can use Python in the Code node. It isn't available in expressions.

**JavaScript**

| Method        | Description                                       | Available in Code node? |
| ------------- | ------------------------------------------------- | :---------------------: |
| `$jmespath()` | Perform a search on a JSON object using JMESPath. |            ✅            |

**Python**

| Method        | Description                                       |
| ------------- | ------------------------------------------------- |
| `_jmespath()` | Perform a search on a JSON object using JMESPath. |
