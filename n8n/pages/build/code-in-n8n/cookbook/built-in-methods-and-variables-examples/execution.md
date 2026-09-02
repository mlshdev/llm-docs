> Commit-pinned source for n8n main: [docs/build/code-in-n8n/cookbook/built-in-methods-and-variables-examples/execution.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/build/code-in-n8n/cookbook/built-in-methods-and-variables-examples/execution.md)

# `execution` <a id="execution"></a>

## `execution.id` <a id="executionid"></a>

Contains the unique ID of the current workflow execution.

**JavaScript**

```js
let executionId = $execution.id;
```

**Python**

```python
executionId = _execution.id
```

## `execution.resumeUrl` <a id="executionresumeurl"></a>

The webhook URL to call to resume a [waiting](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait) workflow.

See the [Wait > On webhook call](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait#on-webhook-call) documentation to learn more.

`execution.resumeUrl` is available in workflows containing a Wait node, along with a node that waits for a webhook response.

## `execution.customData` <a id="executioncustomdata"></a>

This is only available in the Code node.

**JavaScript**

```js
// Set a single piece of custom execution data
$execution.customData.set("key", "value");

// Set the custom execution data object
$execution.customData.setAll({"key1": "value1", "key2": "value2"})

// Access the current state of the object during the execution
var customData = $execution.customData.getAll()

// Access a specific value set during this execution
var customData = $execution.customData.get("key")
```

**Python**

```python
# Set a single piece of custom execution data
_execution.customData.set("key", "value");

# Set the custom execution data object
_execution.customData.setAll({"key1": "value1", "key2": "value2"})

# Access the current state of the object during the execution
customData = _execution.customData.getAll()

# Access a specific value set during this execution
customData = _execution.customData.get("key")
```

Refer to [Custom executions data](https://docs.n8n.io/build/understand-workflows/understand-executions/customize-executions-data) for more information.

***
