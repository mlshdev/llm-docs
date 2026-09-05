> Release-pinned source for Trigger.dev v4.5.16: [docs/management/runs/reschedule.mdx](https://trigger.dev/docs/management/runs/reschedule)

# Reschedule run

`POST /api/v1/runs/{runId}/reschedule`

**Rescheduled a delayed run**

Updates a delayed run with a new delay. Only valid when the run is in the DELAYED state.

**Parameters**

- `runId` (path, required): The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.

**Request body**

**Responses**

- `200`: Successful request
- `400`: Invalid request
- `401`: Unauthorized request
- `404`: Resource not found
