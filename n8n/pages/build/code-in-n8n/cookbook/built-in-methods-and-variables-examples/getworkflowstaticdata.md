> Commit-pinned source for n8n main: [docs/build/code-in-n8n/cookbook/built-in-methods-and-variables-examples/getworkflowstaticdata.md](https://github.com/n8n-io/n8n-docs/blob/03028bf08eed0089ba60c3ae97520bdc9224d8ea/docs/build/code-in-n8n/cookbook/built-in-methods-and-variables-examples/getworkflowstaticdata.md)

# `getWorkflowStaticData(type)` <a id="getworkflowstaticdatatype"></a>

This gives access to the static workflow data.

> **Info**
> **Consider data tables**
>
> For persisting data between executions, consider [data tables](https://docs.n8n.io/build/work-with-data/data-tables). They work in test executions and don't require a Code node. Refer to [Use a data table instead](#use-a-data-table-instead).
>
> Static data is an experimental feature:
>
> - Static data isn't available when testing workflows. The workflow must be published and called by a trigger[^1] or webhook to save static data.
> - This feature may behave unreliably under high-frequency workflow executions.

You can save data directly in the workflow. This data should be small.

As an example: you can save a timestamp of the last item processed from
an RSS feed or database. It will always return an object. Properties can then read, delete or
set on that object. When the workflow execution succeeds, n8n checks automatically if the data
has changed and saves it, if necessary.

There are two types of static data, global and node. Global static data is the
same in the whole workflow. Every node in the workflow can access it. The node static data is unique to the node. Only the node that set it can retrieve it again.

You can only use static data in the JavaScript Code node. The Python Code node doesn't provide it.

Example with global data:

```javascript
// Get the global workflow static data
const workflowStaticData = $getWorkflowStaticData('global');

// Access its data
const lastExecution = workflowStaticData.lastExecution;

// Update its data
workflowStaticData.lastExecution = new Date().getTime();

// Delete data
delete workflowStaticData.lastExecution;
```

Example with node data:

```javascript
// Get the static data of the node
const nodeStaticData = $getWorkflowStaticData('node');

// Access its data
const lastExecution = nodeStaticData.lastExecution;

// Update its data
nodeStaticData.lastExecution = new Date().getTime();

// Delete data
delete nodeStaticData.lastExecution;
```

## Templates and examples <a id="templates-and-examples"></a>

[Workflow example](https://api.n8n.io/workflows/templates/2538)

## Use a data table instead <a id="use-a-data-table-instead"></a>

[Data tables](https://docs.n8n.io/build/work-with-data/data-tables) store data inside n8n without a Code node, and they keep their data when you test a workflow.

To store a marker such as the last processed item in a data table:

1. Add a [Data Table node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.datatable/rows) at the start of your workflow, using the **Get row** operation to read the stored value.
2. Reference the value in later nodes with an expression, such as `{{ $('Get row').item.json.lastExecution }}`.
3. Add a second Data Table node at the end of your workflow, using the **Upsert row** operation to write the new value.

Unlike static data, you can't read data table values directly in an expression or in the Code node. Read the row with a Data Table node first, then reference that node's output.

[^1]: A trigger node is a special node responsible for executing the workflow in response to certain conditions. All production workflows need at least one trigger to determine when the workflow should run.
