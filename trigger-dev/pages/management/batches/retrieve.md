> Pinned source for Trigger.dev v4.6.1: [docs/management/batches/retrieve.mdx](https://github.com/triggerdotdev/trigger.dev/blob/4132259b9da38c0131570ab7561fca8e016162df/docs/management/batches/retrieve.mdx)
> Canonical documentation: https://trigger.dev/docs/management/batches/retrieve

# Retrieve a batch

`GET /api/v1/batches/{batchId}`

**Retrieve a batch**

Retrieve a batch by its ID, including its status and the IDs of all runs in the batch.

**Authentication:** `secretKey`

**Parameters**

- `batchId` (path; required; string): The ID of the batch, starts with `batch_`.
  - Example: `batch_1234`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `id` (string): The batch ID.
      - `status` (string; enum: `PENDING`, `PROCESSING`, `COMPLETED`, `PARTIAL_FAILED`, `ABORTED`): The current status of the batch.
      - `idempotencyKey` (string; nullable): The idempotency key provided when triggering, if any.
      - `createdAt` (string; format: date-time)
      - `updatedAt` (string; format: date-time)
      - `runCount` (integer): The total number of runs in the batch.
      - `runs` (array): Array of run IDs in the batch.
        - `items` (string)
      - `successfulRunCount` (integer; nullable): Number of successful runs (populated after completion).
      - `failedRunCount` (integer; nullable): Number of failed runs (populated after completion).
      - `errors` (array; nullable): Error details for failed items (present for PARTIAL\_FAILED batches).
        - `items` (object)
          - `index` (integer): The index of the failed item.
          - `taskIdentifier` (string): The task identifier of the failed item.
          - `error` (object): The error details.
          - `errorCode` (string; nullable): An optional error code.
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
