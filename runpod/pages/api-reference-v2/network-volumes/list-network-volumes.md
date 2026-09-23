> Pinned source for Runpod main: [api-reference-v2/network-volumes/list-network-volumes.mdx](https://github.com/runpod/docs/blob/6bedc9afe6be9f0bfbbaa77c2ee91f08714e0dec/api-reference-v2/network-volumes/list-network-volumes.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/network-volumes/list-network-volumes

# List Network Volumes

List all network volumes owned by the authenticated Runpod user, including each volume's size, data center, and storage tier.

`GET /v2/network-volumes`

**List network volumes**

Returns all network volumes owned by the authenticated user.

**Authentication:** `bearerAuth`

**Responses**

- `200`: OK
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object)
      - `networkVolumes` (required; array)
        - `items` (object)
          - `id` (required; string): Unique network volume identifier
          - `name` (required; string): Human-readable name (not required to be unique)
          - `size` (required; integer; minimum: `10`; maximum: `4096`): Allocated storage in GB
          - `dataCenter` (required; string): Data center location; immutable after creation
          - `type` (required): Storage tier of this volume. Set at creation and immutable.
            - allOf:
              - `variant 1` (string; enum: `STANDARD`, `HIGH_PERFORMANCE`): Data center network volume storage type.
    - Example `networkVolumes`: `{"networkVolumes":[{"id":"2q9m7x4c","name":"training-dataset","size":100,"dataCenter":"US-KS-2","type":"HIGH_PERFORMANCE"}]}`
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `missingBearerToken`: `{"title":"Unauthorized","status":401,"detail":"missing bearer token"}`
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `insufficientAccess`: `{"title":"Forbidden","status":403,"detail":"access denied"}`
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
  - Header `Retry-After` (integer): Seconds to wait before retrying, per the exceeded window.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `rateLimited`: `{"title":"Too Many Requests","status":429,"detail":"rate limit exceeded for the minute window"}`
- `default`: Error
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
