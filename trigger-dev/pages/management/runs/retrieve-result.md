> Release-pinned source for Trigger.dev v4.5.16: [docs/management/runs/retrieve-result.mdx](https://trigger.dev/docs/management/runs/retrieve-result)

# Retrieve run result

`GET /api/v1/runs/{runId}/result`

**Retrieve run result**

Returns the execution result of a completed run. Returns 404 if the run doesn't exist or hasn't finished yet.

**Parameters**

- `runId` (path, required): The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.

**Responses**

- `200`: Successful request
- `401`: Unauthorized request
- `404`: Run not found or not yet finished
