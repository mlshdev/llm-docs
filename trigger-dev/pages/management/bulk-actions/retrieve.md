> Release-pinned source for Trigger.dev v4.5.16: [docs/management/bulk-actions/retrieve.mdx](https://trigger.dev/docs/management/bulk-actions/retrieve)

# Retrieve bulk action

`GET /api/v1/bulk-actions/{bulkActionId}`

**Retrieve bulk action**

Retrieve the status and aggregate processing counts for a bulk action.

**Parameters**

- `bulkActionId` (path, required): The ID of a bulk action, starts with `bulk_`.

**Responses**

- `200`: Successful request
- `401`: Unauthorized request
- `404`: Resource not found
