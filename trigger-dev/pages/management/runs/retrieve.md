> Release-pinned source for Trigger.dev v4.5.16: [docs/management/runs/retrieve.mdx](https://trigger.dev/docs/management/runs/retrieve)

# Retrieve run

`GET /api/v3/runs/{runId}`

**Retrieve a run**

Retrieve information about a run, including its status, payload, output, and attempts. If you authenticate with a Public API key, we will omit the payload and output fields for security reasons.

**Parameters**

- `runId` (path, required): The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.

**Responses**

- `200`: Successful request
- `400`: Invalid request
- `401`: Unauthorized request
- `404`: Resource not found
