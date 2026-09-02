> Commit-pinned source for n8n main: [docs/integrations/builtin/core-nodes/n8n-nodes-base.stopanderror.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/integrations/builtin/core-nodes/n8n-nodes-base.stopanderror.md)

# Stop And Error <a id="stop-and-error"></a>

Use the Stop And Error node to display custom error messages, cause executions to fail under certain conditions, and send custom error information to error workflows.

## Operations <a id="operations"></a>

- Error Message
- Error Object

## Node parameters <a id="node-parameters"></a>

Both operations include one node parameter, the **Error Type**. Use this parameter to select the type of error to throw. Choose between the two operations: **Error Message** and **Error Object**.

The other parameters depend on which operation you select.

### Error Message parameters <a id="error-message-parameters"></a>

The Error Message Error Type adds one parameter, the **Error Message** field. Enter the message you'd like to throw.

### Error Object parameters <a id="error-object-parameters"></a>

The Error Object Error Type adds one parameter, the **Error Object**. Enter a JSON object that contains the error properties you'd like to throw.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Stop And Error integration templates](https://n8n.io/integrations/stop-and-error) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

You can use the Stop And Error node with the [Error trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.errortrigger) node.

Read more about [Error workflows](https://docs.n8n.io/build/flow-logic/handle-errors-gracefully) in n8n workflows.
