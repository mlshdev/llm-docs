> Pinned source for Trigger.dev v4.5.16: [docs/management/batches/stream-items.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/management/batches/stream-items.mdx)
> Canonical documentation: https://trigger.dev/docs/management/batches/stream-items

# Stream batch items

`POST /api/v3/batches/{batchId}/items`

**Stream batch items (Phase 2)**

Phase 2 of 2-phase batch API. Accepts an NDJSON stream of batch items and enqueues them.
Each line in the body should be a valid BatchItemNDJSON object.
The stream is processed with backpressure - items are enqueued as they arrive.
The batch is sealed when the stream completes successfully.

**Authentication:** `BearerAuth`

**Parameters**

- `batchId` (path; required; string): The batch ID returned from POST /api/v3/batches

**Request body** (required)

- Media type: `application/x-ndjson`
  - Schema (string): NDJSON (newline-delimited JSON) stream where each line is a BatchItemNDJSON object. Example: {"index":0,"task":"my-task","payload":{"key":"value1"}} {"index":1,"task":"my-task","payload":{"key":"value2"}}
- Media type: `application/ndjson`
  - Schema (string): NDJSON (newline-delimited JSON) stream where each line is a BatchItemNDJSON object.

**Responses**

- `200`: Items successfully processed
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string): The batch ID.
      - `itemsAccepted` (required; integer): Number of items successfully accepted.
      - `itemsDeduplicated` (required; integer): Number of items that were deduplicated (already enqueued).
      - `sealed` (required; boolean): Whether the batch was sealed and is ready for processing. If false, the batch needs more items before processing can start. Clients should check this field and retry with missing items if needed.
      - `enqueuedCount` (integer): Total items currently enqueued. Only present when sealed=false to help with retries.
      - `expectedCount` (integer): Expected total item count. Only present when sealed=false to help with retries.
- `400`: Invalid request (e.g., invalid JSON, item exceeds maximum size)
  - Media type: `application/json`
    - Schema (object)
      - `message` (string)
- `401`: Unauthorized - API key is missing or invalid
  - Media type: `application/json`
    - Schema (object)
      - `message` (string)
- `415`: Unsupported Media Type - Content-Type must be application/x-ndjson or application/ndjson
  - Media type: `application/json`
    - Schema (object)
      - `message` (string)
- `422`: Validation error
  - Media type: `application/json`
    - Schema (object)
      - `message` (string)
- `500`: Internal server error
  - Media type: `application/json`
    - Schema (object)
      - `message` (string)
