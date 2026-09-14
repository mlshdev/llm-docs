> Pinned source for Trigger.dev v4.6.0: [docs/management/bulk-actions/abort.mdx](https://github.com/triggerdotdev/trigger.dev/blob/6172bcd1bc67044a295aa41acb49d92db954de3d/docs/management/bulk-actions/abort.mdx)
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
