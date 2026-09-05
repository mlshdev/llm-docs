> Release-pinned source for Trigger.dev v4.5.16: [docs/management/runs/cancel.mdx](https://trigger.dev/docs/management/runs/cancel)

# Cancel run

`POST /api/v2/runs/{runId}/cancel`

**Cancel a run**

Cancels an in-progress run. If the run is already completed, this will have no effect.

**Parameters**

- `runId` (path, required): The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.

**Responses**

- `200`: Successful request
- `400`: Invalid request
- `401`: Unauthorized request
- `404`: Resource not found
