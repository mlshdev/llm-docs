> Commit-pinned source for n8n main: [docs/integrations/builtin/core-nodes/n8n-nodes-base.errortrigger.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/core-nodes/n8n-nodes-base.errortrigger.md)

# Error Trigger node <a id="error-trigger-node"></a>

You can use the Error Trigger node to create error workflows. When another linked workflow fails, this node gets details about the failed workflow and the errors, and runs the error workflow.

## Usage <a id="usage"></a>

1. Create a new workflow, with the Error Trigger as the first node.
2. Give the workflow a name, for example `Error Handler`.
3. Select **Save**.
4. In the workflow where you want to use this error workflow:
   1. Select **Options** ![Options menu icon](https://raw.githubusercontent.com/n8n-io/n8n-docs/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/reusable-content/.gitbook/assets/three-dot-options-menu.png) > **Settings**.
   2. In **Error workflow**, select the workflow you just created. For example, if you used the name Error Handler, select **Error handler**.
   3. Select **Save**.
      Now, when this workflow errors, the related error workflow runs.

Note the following:

- If a workflow uses the Error Trigger node, you don't have to publish the workflow.
- If a workflow contains the Error Trigger node, by default, the workflow uses itself as the error workflow.
- You can't test error workflows when running workflows manually. The Error Trigger only runs when an automatic workflow errors.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Error Trigger node documentation integration templates](https://n8n.io/integrations/error-trigger) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

You can use the [Stop And Error](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.stopanderror) node to send custom messages to the Error Trigger.

Read more about [Error workflows](https://docs.n8n.io/build/flow-logic/handle-errors-gracefully) in n8n workflows.

## Error data <a id="error-data"></a>

The default error data received by the Error Trigger is:

```json
[
    {
        "execution": {
            "id": "231",
            "url": "https://n8n.example.com/execution/231",
            "retryOf": "34",
            "error": {
                "message": "Example Error Message",
                "stack": "Stacktrace"
            },
            "lastNodeExecuted": "Node With Error",
            "mode": "manual"
        },
        "workflow": {
            "id": "1",
            "name": "Example Workflow"
        }
    }
]

```

All information is always present, except:

- `execution.id`: requires the execution to be saved in the database. Not present if the error is in the trigger node of the main workflow, as the workflow doesn't execute.
- `execution.url`: requires the execution to be saved in the database. Not present if the error is in the trigger node of the main workflow, as the workflow doesn't execute.
- `execution.retryOf`: only present when the execution is a retry of a failed execution.

If the error is caused by the trigger node of the main workflow, rather than a later stage, the data sent to the error workflow is different. There's less information in `execution{}` and more in `trigger{}`:

```json
{
  "trigger": {
    "error": {
      "context": {},
      "name": "WorkflowActivationError",
      "cause": {
        "message": "",
        "stack": ""
      },
      "timestamp": 1654609328787,
      "message": "",
      "node": {
        . . .
      }
    },
    "mode": "trigger"
  },
  "workflow": {
    "id": "",
    "name": ""
  }
}
```
