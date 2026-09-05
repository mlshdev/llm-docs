> Release-pinned source for Trigger.dev v4.5.16: [docs/management/bulk-actions/abort.mdx](https://trigger.dev/docs/management/bulk-actions/abort)

# Abort bulk action

`POST /api/v1/bulk-actions/{bulkActionId}/abort`

**Abort bulk action**

Abort a pending bulk action so it stops processing additional runs. Runs already processed by the action are not undone.

**Parameters**

- `bulkActionId` (path, required): The ID of a bulk action, starts with `bulk_`.

**Responses**

- `200`: Bulk action aborted
- `400`: Invalid request
- `401`: Unauthorized request
- `404`: Resource not found
