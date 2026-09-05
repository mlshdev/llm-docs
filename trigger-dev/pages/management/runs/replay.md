> Release-pinned source for Trigger.dev v4.5.16: [docs/management/runs/replay.mdx](https://trigger.dev/docs/management/runs/replay)

# Replay run

`POST /api/v1/runs/{runId}/replay`

**Replay a run**

Creates a new run with the same payload and options as the original run.

**Parameters**

- `runId` (path, required): The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.

**Responses**

- `200`: Successful request
- `400`: Invalid request
- `401`: Unauthorized request
- `404`: Resource not found
