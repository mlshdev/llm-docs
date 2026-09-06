> Release-pinned source for Trigger.dev v4.5.16: [docs/management/runs/update-metadata.mdx](https://trigger.dev/docs/management/runs/update-metadata)

# Update metadata

`PUT /api/v1/runs/{runId}/metadata`

**Update run metadata**

Update the metadata of a run.

**Parameters**

- `runId` (path, required): The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.

**Request body**

**Responses**

- `200`: Successful request
- `400`: Invalid request
- `401`: Unauthorized request
- `404`: Resource not found
