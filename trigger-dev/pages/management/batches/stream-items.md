> Release-pinned source for Trigger.dev v4.5.16: [docs/management/batches/stream-items.mdx](https://trigger.dev/docs/management/batches/stream-items)

# Stream batch items

`POST /api/v3/batches/{batchId}/items`

**Stream batch items (Phase 2)**

Phase 2 of 2-phase batch API. Accepts an NDJSON stream of batch items and enqueues them.
Each line in the body should be a valid BatchItemNDJSON object.
The stream is processed with backpressure - items are enqueued as they arrive.
The batch is sealed when the stream completes successfully.

**Parameters**

- `batchId` (path, required): The batch ID returned from POST /api/v3/batches

**Request body**

**Responses**

- `200`: Items successfully processed
- `400`: Invalid request (e.g., invalid JSON, item exceeds maximum size)
- `401`: Unauthorized - API key is missing or invalid
- `415`: Unsupported Media Type - Content-Type must be application/x-ndjson or application/ndjson
- `422`: Validation error
- `500`: Internal server error
