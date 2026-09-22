> Pinned source for Trigger.dev v4.6.4: [docs/management/waitpoints/create.mdx](https://github.com/triggerdotdev/trigger.dev/blob/51e29f4b13c04ca4f2ac161bfeb839f10b4e81b7/docs/management/waitpoints/create.mdx)
> Canonical documentation: https://trigger.dev/docs/management/waitpoints/create

# Create a waitpoint token

`POST /api/v1/waitpoints/tokens`

**Create a waitpoint token**

Creates a new waitpoint token that can be used to pause a run until an external event completes it. The token includes a `url` which can be called via HTTP POST to complete the waitpoint. Use the token ID with `wait.forToken()` inside a task to pause execution until the token is completed.

**Authentication:** `secretKey`

**Request body**

- Media type: `application/json`
  - Schema (object)
    - `idempotencyKey` (string): An optional idempotency key. If you pass the same key twice before it expires, you will receive the original token back. The returned token may already be completed, in which case `wait.forToken()` will continue immediately.
      - Example: `approval-user-1234567`
    - `idempotencyKeyTTL` (string): How long the idempotency key is valid, after which passing the same key creates a new waitpoint. Accepts durations like "30s", "1m", "2h", "3d".
      - Example: `1h`
    - `timeout` (string): How long to wait before the token times out. When a run is waiting for a timed-out token, `wait.forToken()` returns with `ok: false`. Accepts an ISO 8601 date string or duration shorthand like "30s", "1m", "2h", "3d", "4w".
      - Example: `1h`
    - `tags`: Tags to attach to the waitpoint. You can set up to 10 tags, each under 128 characters. We recommend namespacing tags with a prefix like `user:1234567` or `org_9876543`.
      - Example: `["user:1234567","org:9876543"]`
      - oneOf:
        - `variant 1` (string)
        - `variant 2` (array)
          - `items` (string)

**Responses**

- `200`: Waitpoint token created successfully
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string): The unique ID of the waitpoint token.
        - Example: `waitpoint_abc123`
      - `isCached` (required; boolean): `true` if an existing token was returned because the same `idempotencyKey` was used within its TTL window.
      - `url` (required; string): An HTTP callback URL. A POST request to this URL (with an optional JSON body) will complete the waitpoint without needing an API key.
        - Example: `https://api.trigger.dev/api/v1/waitpoints/tokens/waitpoint_abc123/callback/abc123hash`
- `401`: Unauthorized
- `422`: Unprocessable Entity
- `500`: Internal Server Error
