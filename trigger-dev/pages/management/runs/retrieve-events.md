> Release-pinned source for Trigger.dev v4.5.16: [docs/management/runs/retrieve-events.mdx](https://trigger.dev/docs/management/runs/retrieve-events)

# Retrieve run events

`GET /api/v1/runs/{runId}/events`

**Retrieve run events**

Returns all OTel span events for a run. Useful for debugging and observability.

**Parameters**

- `runId` (path, required): The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.

**Responses**

- `200`: Successful request
- `401`: Unauthorized request
- `404`: Resource not found
