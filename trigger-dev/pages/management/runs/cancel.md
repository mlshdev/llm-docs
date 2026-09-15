> Pinned source for Trigger.dev v4.6.1: [docs/management/runs/cancel.mdx](https://github.com/triggerdotdev/trigger.dev/blob/4132259b9da38c0131570ab7561fca8e016162df/docs/management/runs/cancel.mdx)
> Canonical documentation: https://trigger.dev/docs/management/runs/cancel

# Cancel run

`POST /api/v2/runs/{runId}/cancel`

**Cancel a run**

Cancels an in-progress run. If the run is already completed, this will have no effect.

**Authentication:** `secretKey`

**Parameters**

- `runId` (path; required; string): The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.
  - Example: `run_1234`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `id` (string): The ID of the run that was canceled.
        - Example: `run_1234`
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
