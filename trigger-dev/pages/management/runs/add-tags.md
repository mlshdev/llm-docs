> Release-pinned source for Trigger.dev v4.5.16: [docs/management/runs/add-tags.mdx](https://trigger.dev/docs/management/runs/add-tags)

# Add tags to a run

`POST /api/v1/runs/{runId}/tags`

**Add tags to a run**

Adds one or more tags to a run. Runs can have a maximum of 10 tags. Duplicate tags are ignored.

**Parameters**

- `runId` (path, required): The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.

**Request body**

**Responses**

- `200`: Successful request
- `400`: Invalid request
- `401`: Unauthorized request
- `422`: Too many tags
