> Pinned source for Trigger.dev v4.6.1: [docs/management/runs/retrieve-result.mdx](https://github.com/triggerdotdev/trigger.dev/blob/4132259b9da38c0131570ab7561fca8e016162df/docs/management/runs/retrieve-result.mdx)
> Canonical documentation: https://trigger.dev/docs/management/runs/retrieve-result

# Retrieve run result

`GET /api/v1/runs/{runId}/result`

**Retrieve run result**

Returns the execution result of a completed run. Returns 404 if the run doesn't exist or hasn't finished yet.

**Authentication:** `secretKey`

**Parameters**

- `runId` (path; required; string): The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.
  - Example: `run_1234`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `ok` (required; boolean): Whether the run completed successfully.
      - `id` (required; string): The run ID.
      - `output` (string): The serialized output as a string (present when ok is true). Use outputType to determine how to parse it — for "application/json" use JSON.parse().
      - `outputType` (string): The content type of the serialized output, e.g. "application/json".
      - `error` (object): Error details (present when ok is false).
      - `usage` (object): Execution usage stats.
        - `durationMs` (number): Duration of the run in milliseconds.
      - `taskIdentifier` (string): The task identifier.
- `401`: Unauthorized request
  - Media type: `application/json`
    - Schema (object)
      - `error` (string; enum: `Invalid or Missing API Key`)
- `404`: Run not found or not yet finished
  - Media type: `application/json`
    - Schema (object)
      - `error` (string; enum: `Run either doesn't exist or is not finished`)
