> Commit-pinned source for n8n main: [docs/build/understand-workflows/understand-executions/debug-executions.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/build/understand-workflows/understand-executions/debug-executions.md)

# Debug and re-run past executions <a id="debug-and-re-run-past-executions"></a>

> **Info**
> **Feature availability**
>
> Debugging and re-running past executions is available on:
>
> - **n8n Cloud:** All plans
> - **Self-hosted:** Registered Community, Business, Enterprise

You can load data from a previous execution into your current workflow. This is useful for debugging data from failed production executions: you can see a failed execution, make changes to your workflow to fix it, then re-run it with the previous execution data.

## Load data <a id="load-data"></a>

To load data from a previous execution:

1. In your workflow, select the **Executions** tab to view the **Executions** list.
2. Select the execution you want to debug. n8n displays options depending on whether the workflow was successful or failed:
   - For failed executions: select **Debug in editor**.
   - For successful executions: select **Copy to editor**.
3. n8n copies the execution data into your current workflow, and [pins the data](https://docs.n8n.io/build/work-with-data/pin-and-mock-data) in the first node in the workflow.

> **Info**
> **Check which executions you save**
>
> The executions available on the **Executions** list depends on your [Workflow settings](https://docs.n8n.io/build/manage-workflows/configure-workflow-settings).
