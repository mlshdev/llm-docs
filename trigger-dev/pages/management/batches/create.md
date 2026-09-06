> Release-pinned source for Trigger.dev v4.5.16: [docs/management/batches/create.mdx](https://trigger.dev/docs/management/batches/create)

# Create batch

`POST /api/v3/batches`

**Create a batch (Phase 1)**

Phase 1 of 2-phase batch API. Creates a batch record and optionally blocks the parent run for batchTriggerAndWait.
After creating a batch, stream items via POST /api/v3/batches/{batchId}/items.

**Request body**

**Responses**

- `202`: Batch successfully created
- `400`: Invalid request (e.g., runCount <= 0 or exceeds maximum)
- `401`: Unauthorized - API key is missing or invalid
- `422`: Validation error
- `429`: Rate limit exceeded
- `500`: Internal server error
