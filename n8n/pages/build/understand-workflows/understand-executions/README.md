> Pinned source for n8n main: [docs/build/understand-workflows/understand-executions/README.md](https://github.com/n8n-io/n8n-docs/blob/d6f969044f09a928e5d1459a080f6289b68d7be5/docs/build/understand-workflows/understand-executions/README.md)

# Executions <a id="executions"></a>

An execution is a single run of a workflow.

## In this section

- [Manual, partial, and production executions](https://docs.n8n.io/build/understand-workflows/understand-executions/types-of-executions): how manual, partial, and production executions differ.
- [View all executions](https://docs.n8n.io/build/understand-workflows/understand-executions/view-all-executions): view and filter all executions across all your workflows.
- [View executions for a single workflow](https://docs.n8n.io/build/understand-workflows/understand-executions/view-executions-for-a-single-workflow): view and filter executions for the workflow currently open on the canvas.
- [Debug and re-run past executions](https://docs.n8n.io/build/understand-workflows/understand-executions/debug-executions): copy data from a previous execution into your current workflow to debug it.
- [Customize executions data](https://docs.n8n.io/build/understand-workflows/understand-executions/customize-executions-data): add custom data to your workflow executions using the Code node.
- [Stream real-time responses](https://docs.n8n.io/build/understand-workflows/understand-executions/stream-real-time-responses): send data back to users as an AI Agent node generates it.
- [Dirty nodes](https://docs.n8n.io/build/understand-workflows/understand-executions/understand-dirty-nodes): what dirty nodes are and how they affect workflow execution.

## Execution modes <a id="execution-modes"></a>

There are two execution modes:

- **Manual:** Run workflows manually by clicking **Execute Workflow**. Unpublish workflows  while testing through manual runs.
- **Production:** Production workflows run automatically. Publish a version of the workflow to put it into production.

## How executions count towards quotas: <a id="how-executions-count-towards-quotas"></a>

[Paid plans](https://n8n.io/pricing/), whether cloud or self-hosted, have an execution limit quota. Only production executions count towards this quota. These are executions started automatically by triggers, schedules, or polling. This distinction applies regardless of the instance environment, such as development or production.

### Execution count by trigger type <a id="execution-count-by-trigger-type"></a>

The way executions are counted depends on the type of trigger node used:

- **Schedule Trigger nodes:** Count one execution every time the node fires, regardless of outcome.
- **Polling nodes (like Google Drive Trigger):** Count one execution only when new data is found. Polls that return no results don't count as an execution.
- **Webhook Trigger nodes:** Count one execution for every inbound request that activates the trigger. This includes requests with an empty body (such as `{}`). Malformed requests that fail before the workflow starts don't count as an execution.

### Triggers and runs that don't count <a id="triggers-and-runs-that-dont-count"></a>

The following don't count towards your execution quota:

- **Manual executions:** Running a workflow from the editor while building or testing.
- **Sub-workflow executions:** When a workflow calls another workflow with the Execute Sub-workflow node, only the parent (top-level) execution counts.
- **Error workflow executions:** Runs of a workflow set as an [error workflow](https://docs.n8n.io/build/flow-logic/handle-errors-gracefully).
- **Polls that return no data:** A polling trigger only counts when it finds new data.
- **Malformed or rejected requests:** Webhook requests that fail before the workflow starts.

## Execution lists <a id="execution-lists"></a>

n8n provides two execution lists:

- [Workflow-level executions](https://docs.n8n.io/build/understand-workflows/understand-executions/view-executions-for-a-single-workflow): this execution list shows the executions for a single workflow.
- [All executions](https://docs.n8n.io/build/understand-workflows/understand-executions/view-all-executions): this list shows all executions for all your workflows.

n8n supports [adding custom data to executions](https://docs.n8n.io/build/understand-workflows/understand-executions/customize-executions-data).

## Execution data redaction <a id="execution-data-redaction"></a>

You can redact execution data to protect sensitive information. Redaction hides the input and output data of workflow executions while preserving execution metadata like status, timing, and node names. Refer to [Execution data redaction](https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/redact-execution-data) for details.

## Related resources

- [Understand workflows](https://docs.n8n.io/build/understand-workflows)
- [Create and run workflows](https://docs.n8n.io/build/understand-workflows/create-and-run-workflows)
- [Save and publish workflows](https://docs.n8n.io/build/understand-workflows/save-and-publish-workflows)
- [Create and edit credentials](https://docs.n8n.io/build/understand-workflows/create-and-edit-credentials)
- [Use Gateway credits](https://docs.n8n.io/build/understand-workflows/use-gateway-credits)
- [Workflow components](https://docs.n8n.io/build/understand-workflows/workflow-components)
