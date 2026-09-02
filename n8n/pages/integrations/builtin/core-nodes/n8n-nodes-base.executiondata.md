> Commit-pinned source for n8n main: [docs/integrations/builtin/core-nodes/n8n-nodes-base.executiondata.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/core-nodes/n8n-nodes-base.executiondata.md)

# Execution Data <a id="execution-data"></a>

Use this node to save metadata for workflow executions. You can then search by this data in the **Executions** list.

You can retrieve custom execution data during workflow execution using the Code node. Refer to [Custom executions data](https://docs.n8n.io/build/understand-workflows/understand-executions/customize-executions-data) for more information.

> **Info**
> **Feature availability**
>
> Custom executions data is available on:
>
> - Cloud: Pro, Enterprise
> - Self-Hosted: Enterprise, registered Community

## Operations <a id="operations"></a>

- Save Execution Data for Search

## Data to Save <a id="data-to-save"></a>

Add a **Saved Field** for each key/value pair of metadata you'd like to save.

## Limitations <a id="limitations"></a>

The Execution Data node has the following restrictions when storing execution metadata:

- `key`: limited to 50 characters
- `value`: limited to 512 characters

If either the `key` or `value` exceed the above limitations, n8n truncates to their maximum length and outputs a log entry.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Execution Data integration templates](https://n8n.io/integrations/execution-data) or [search all templates](https://n8n.io/workflows/)
