> Pinned source for Trigger.dev v4.6.4: [docs/management/batches/create.mdx](https://github.com/triggerdotdev/trigger.dev/blob/51e29f4b13c04ca4f2ac161bfeb839f10b4e81b7/docs/management/batches/create.mdx)
> Canonical documentation: https://trigger.dev/docs/management/batches/create

# Create batch

`POST /api/v3/batches`

**Create a batch (Phase 1)**

Phase 1 of 2-phase batch API. Creates a batch record and optionally blocks the parent run for batchTriggerAndWait.
After creating a batch, stream items via POST /api/v3/batches/{batchId}/items.

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `runCount` (required; integer; minimum: `1`): Expected number of items in the batch. Must be a positive integer.
    - `parentRunId` (string): Parent run ID (friendly ID) for batchTriggerAndWait.
    - `resumeParentOnCompletion` (boolean): Whether to resume parent on completion. Set to true for batchTriggerAndWait.
    - `idempotencyKey` (string): Idempotency key for the batch. If provided and a batch with this key already exists, the existing batch will be returned.

**Responses**

- `202`: Batch successfully created
  - Header `x-trigger-jwt-claims` (string): JWT claims for the batch
  - Header `x-trigger-jwt` (string): JWT token for browser clients
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string): The batch ID (friendly ID). Use this to stream items via POST /api/v3/batches/{batchId}/items.
      - `runCount` (required; integer): The expected run count.
      - `isCached` (required; boolean): Whether this response came from a cached/idempotent batch.
      - `idempotencyKey` (string): The idempotency key if provided.
- `400`: Invalid request (e.g., runCount <= 0 or exceeds maximum)
  - Media type: `application/json`
    - Schema (object)
      - `message` (string)
- `401`: Unauthorized - API key is missing or invalid
- `422`: Validation error
  - Media type: `application/json`
    - Schema (object)
      - `message` (string)
- `429`: Rate limit exceeded
  - Header `X-RateLimit-Limit` (integer): Maximum number of requests allowed
  - Header `X-RateLimit-Remaining` (integer): Number of requests remaining
  - Header `X-RateLimit-Reset` (integer): Unix timestamp when the rate limit resets
  - Header `Retry-After` (integer): Seconds to wait before retrying
  - Media type: `application/json`
    - Schema (object)
      - `message` (string)
- `500`: Internal server error
  - Media type: `application/json`
    - Schema (object)
      - `message` (string)
