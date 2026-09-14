> Pinned source for Trigger.dev v4.6.0: [docs/management/batches/retrieve-results.mdx](https://github.com/triggerdotdev/trigger.dev/blob/6172bcd1bc67044a295aa41acb49d92db954de3d/docs/management/batches/retrieve-results.mdx)
> Canonical documentation: https://trigger.dev/docs/management/batches/retrieve-results

# Retrieve batch results

`GET /api/v1/batches/{batchId}/results`

**Retrieve batch results**

Returns the execution results of all completed runs in a batch. Only finished runs (successful or failed) are included in the items array — runs that are still executing are omitted. Returns 404 if the batch doesn't exist.

**Authentication:** `secretKey`

**Parameters**

- `batchId` (path; required; string): The ID of the batch, starts with `batch_`.
  - Example: `batch_1234`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `id` (string): The batch ID.
      - `items` (array): Execution results for each run in the batch.
        - `items` (object)
          - `ok` (required; boolean): Whether this run completed successfully.
          - `id` (required; string): The run ID.
          - `output` (string): The serialized output as a string (present when ok is true). Use outputType to determine how to parse it — for "application/json" use JSON.parse().
          - `outputType` (string): The content type of the serialized output, e.g. "application/json".
          - `error` (object): Error details (present when ok is false).
          - `usage` (object)
            - `durationMs` (number): Duration of the run in milliseconds.
          - `taskIdentifier` (string): The task identifier.
- `401`: Unauthorized request
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
        - Example: `Something went wrong`
- `404`: Batch not found
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
        - Example: `Something went wrong`
