> Pinned source for Trigger.dev v4.5.16: [docs/management/runs/update-metadata.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/management/runs/update-metadata.mdx)
> Canonical documentation: https://trigger.dev/docs/management/runs/update-metadata

# Update metadata

`PUT /api/v1/runs/{runId}/metadata`

**Update run metadata**

Update the metadata of a run.

**Authentication:** `secretKey`

**Parameters**

- `runId` (path; required; string): The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.
  - Example: `run_1234`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `metadata` (object): The new metadata to set on the run.
      - Example: `{"key":"value"}`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `metadata` (object): The updated metadata of the run.
- `400`: Invalid request
  - Media type: `application/json`
    - Schema (object)
      - `error` (string; enum: `Invalid or missing run ID`, `Invalid metadata`)
- `401`: Unauthorized request
  - Media type: `application/json`
    - Schema (object)
      - `error` (string; enum: `Invalid or Missing API key`)
- `404`: Resource not found
  - Media type: `application/json`
    - Schema (object)
      - `error` (string; enum: `Task Run not found`)
