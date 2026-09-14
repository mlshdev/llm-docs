> Pinned source for Trigger.dev v4.5.16: [docs/management/bulk-actions/retrieve.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/management/bulk-actions/retrieve.mdx)
> Canonical documentation: https://trigger.dev/docs/management/bulk-actions/retrieve

# Retrieve bulk action

`GET /api/v1/bulk-actions/{bulkActionId}`

**Retrieve bulk action**

Retrieve the status and aggregate processing counts for a bulk action.

**Authentication:** `secretKey`

**Parameters**

- `bulkActionId` (path; required; string): The ID of a bulk action, starts with `bulk_`.
  - Example: `bulk_1234`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string): The bulk action ID, prefixed with `bulk_`.
        - Example: `bulk_1234`
      - `name` (string): The name provided when the bulk action was created.
      - `type` (required; string; enum: `CANCEL`, `REPLAY`)
      - `status` (required; string; enum: `PENDING`, `COMPLETED`, `ABORTED`)
      - `counts` (required; object)
        - `total` (required; integer): The number of runs selected when the bulk action was created.
        - `success` (required; integer): The number of runs processed successfully.
        - `failure` (required; integer): The number of runs that could not be processed.
      - `createdAt` (required; string; format: date-time)
      - `completedAt` (string; format: date-time)
- `401`: Unauthorized request
- `404`: Resource not found
