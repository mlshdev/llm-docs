> Pinned source for n8n main: [docs/build/understand-workflows/understand-executions/customize-executions-data.md](https://github.com/n8n-io/n8n-docs/blob/d6f969044f09a928e5d1459a080f6289b68d7be5/docs/build/understand-workflows/understand-executions/customize-executions-data.md)

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

## Related resources

- [Understand executions](https://docs.n8n.io/build/understand-workflows/understand-executions)
- [Manual, partial, and production executions](https://docs.n8n.io/build/understand-workflows/understand-executions/types-of-executions)
- [View all executions](https://docs.n8n.io/build/understand-workflows/understand-executions/view-all-executions)
- [View executions for a single workflow](https://docs.n8n.io/build/understand-workflows/understand-executions/view-executions-for-a-single-workflow)
- [Debug and re-run past executions](https://docs.n8n.io/build/understand-workflows/understand-executions/debug-executions)
- [Stream real-time responses](https://docs.n8n.io/build/understand-workflows/understand-executions/stream-real-time-responses)
- [Dirty nodes](https://docs.n8n.io/build/understand-workflows/understand-executions/understand-dirty-nodes)
