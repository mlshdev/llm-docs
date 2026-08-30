> Commit-pinned source for n8n main: [docs/build/understand-workflows/understand-executions/view-executions-for-a-single-workflow.md](https://github.com/n8n-io/n8n-docs/blob/0ece31e57a42e63cf2a2c7f9a33b42888e09a5b3/docs/build/understand-workflows/understand-executions/view-executions-for-a-single-workflow.md)

# Workflow-level executions list <a id="workflow-level-executions-list"></a>

The **Executions** list in a workflow shows all executions for that workflow.

> **Info**
> **Deleted workflows**
>
> When you delete a workflow, n8n deletes its execution history as well. This means you can't view executions for deleted workflows.

> **Info**
> **Execution history and workflow history**
>
> Don't confuse the execution list with [Workflow history](https://docs.n8n.io/build/manage-workflows/view-change-history).
>
> Executions are workflow runs. With the executions list, you can see previous runs of the current version of the workflow. You can copy previous executions into the editor to [Debug and re-run past executions](https://docs.n8n.io/build/understand-workflows/understand-executions/debug-executions) in your current workflow.
>
> Workflow history is previous versions of the workflow: for example, a version with a different node, or different parameters set.

## View executions for a single workflow <a id="view-executions-for-a-single-workflow"></a>

In the workflow, select the **Executions** tab in the top menu. You can preview all executions of that workflow.

> **Info**
> **Executions using end-user credentials**
>
> When an execution uses an [end-user credential](https://docs.n8n.io/administer/manage-credentials/end-user-credentials), only the user whose connected account ran the node can see that node's data. For everyone else, including admins, the output is redacted.

## Filter executions <a id="filter-executions"></a>

You can filter the executions list.

1. In your workflow, select **Executions**.
2. Select **Filters**.
3. Enter your filters. You can filter by:
   - **Status**: choose from **Failed**, **Running**, **Success**, or **Waiting**.
   - **Execution start**: see executions that started in the given time.
   - **Saved custom data**: this is data you create within the workflow using the Code node. Enter the key and value to filter. Refer to [Custom executions data](https://docs.n8n.io/build/understand-workflows/understand-executions/customize-executions-data) for information on adding custom data.

> **Info**
> **Feature availability**
>
> Custom executions data is available on:
>
> - Cloud: Pro, Enterprise
> - Self-Hosted: Enterprise, registered Community

## Retry failed workflows <a id="retry-failed-workflows"></a>

If your workflow execution fails, you can retry the execution. To retry a failed workflow:

1. Open the **Executions** list.
2. For the workflow execution you want to retry, select **Refresh** ![Refresh icon](https://raw.githubusercontent.com/n8n-io/n8n-docs/0ece31e57a42e63cf2a2c7f9a33b42888e09a5b3/docs/build/.gitbook/assets/refresh.png).
3. Select either of the following options to retry the execution:
   - **Retry with currently saved workflow**: Once you make changes to your workflow, you can select this option to execute the workflow with the previous execution data.
   - **Retry with original workflow**: If you want to retry the execution without making changes to your workflow, you can select this option to retry the execution with the previous execution data.
