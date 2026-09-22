> Pinned source for Trigger.dev v4.6.4: [docs/management/runs/replay.mdx](https://github.com/triggerdotdev/trigger.dev/blob/51e29f4b13c04ca4f2ac161bfeb839f10b4e81b7/docs/management/runs/replay.mdx)
> Canonical documentation: https://trigger.dev/docs/management/runs/replay

# Replay run

`POST /api/v1/runs/{runId}/replay`

**Replay a run**

Creates a new run with the same payload and options as the original run.

**Authentication:** `secretKey`

**Parameters**

- `runId` (path; required; string): The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.
  - Example: `run_1234`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `id` (string): The ID of the new run.
- `400`: Invalid request
  - Media type: `application/json`
    - Schema (object)
      - `error` (string; enum: `Invalid or missing run ID`, `Failed to create new run`)
- `401`: Unauthorized request
  - Media type: `application/json`
    - Schema (object)
      - `error` (string; enum: `Invalid or Missing API key`)
- `404`: Resource not found
  - Media type: `application/json`
    - Schema (object)
      - `error` (string; enum: `Run not found`)
