> Release-pinned source for Trigger.dev v4.5.16: [docs/management/bulk-actions/create.mdx](https://trigger.dev/docs/management/bulk-actions/create)

# Create bulk action

`POST /api/v1/bulk-actions`

**Create bulk action**

Create an asynchronous bulk action to cancel or replay runs selected by run IDs or filters.

**Request body**

**Responses**

- `202`: Bulk action accepted
- `400`: Invalid request parameters or body
- `401`: Unauthorized request
- `422`: Unprocessable entity
- `429`: Too many concurrent bulk replays
