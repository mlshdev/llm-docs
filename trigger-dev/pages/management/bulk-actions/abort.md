> Pinned source for Trigger.dev v4.7.7: [docs/management/bulk-actions/abort.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ffc950ee0d4fb2bdfbc0d368bba8d6e25e8d6e72/docs/management/bulk-actions/abort.mdx)
> Canonical documentation: https://trigger.dev/docs/management/bulk-actions/abort

# Abort bulk action

`POST /api/v1/bulk-actions/{bulkActionId}/abort`

**Abort bulk action**

Abort a pending bulk action so it stops processing additional runs. Runs already processed by the action are not undone.

**Authentication:** `secretKey`

**Parameters**

- `bulkActionId` (path; required; string): The ID of a bulk action, starts with `bulk_`.
  - Example: `bulk_1234`

**Responses**

- `200`: Bulk action aborted
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string)
        - Example: `bulk_1234`
- `400`: Invalid request
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
        - Example: `Something went wrong`
- `401`: Unauthorized request
- `404`: Resource not found
