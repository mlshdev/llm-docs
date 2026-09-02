> Commit-pinned source for n8n main: [docs/build/understand-workflows/understand-executions/customize-executions-data.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/build/understand-workflows/understand-executions/customize-executions-data.md)

# Custom executions data <a id="custom-executions-data"></a>

You can set custom data on your workflow using the Code node or the [Execution Data node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executiondata). n8n records this with each execution. You can then use this data when filtering the executions list, or fetch it in your workflows using the Code node.

> **Info**
> **Feature availability**
>
> Custom executions data is available on:
>
> - Cloud: Pro, Enterprise
> - Self-Hosted: Enterprise, registered Community

## Set and access custom data using the Code node <a id="set-and-access-custom-data-using-the-code-node"></a>

This section describes how to set and access data using the Code node. Refer to [Execution Data node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executiondata) for information on using the Execution Data node to set data. You can't retrieve custom data using the Execution Data node.

### Set custom executions data <a id="set-custom-executions-data"></a>

Set a single piece of extra data:

**JavaScript**

```js
$execution.customData.set("key", "value");
```

**Python**

```python
_execution.customData.set("key", "value");
```

Set all extra data. This overwrites the whole custom data object for this execution:

**JavaScript**

```js
$execution.customData.setAll({"key1": "value1", "key2": "value2"})
```

**Python**

```python
_execution.customData.setAll({"key1": "value1", "key2": "value2"})
```

There are limitations:

- They must be strings
- `key` has a maximum length of 50 characters
- `value` has a maximum length of 255 characters
- n8n supports a maximum of 10 items of custom data

### Access the custom data object during execution <a id="access-the-custom-data-object-during-execution"></a>

You can retrieve the custom data object, or a specific value in it, during an execution:

**JavaScript**

```js
// Access the current state of the object during the execution
const customData = $execution.customData.getAll();

// Access a specific value set during this execution
const customData = $execution.customData.get("key");
```

**Python**

```python
# Access the current state of the object during the execution
customData = _execution.customData.getAll();

# Access a specific value set during this execution
customData = _execution.customData.get("key");
```
