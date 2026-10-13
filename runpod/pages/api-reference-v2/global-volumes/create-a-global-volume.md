> Pinned source for Runpod main: [api-reference-v2/global-volumes/create-a-global-volume.mdx](https://github.com/runpod/docs/blob/674b3f2b13fbc59fb349a716b32faf18fb2fcc98/api-reference-v2/global-volumes/create-a-global-volume.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/global-volumes/create-a-global-volume

# Create A Global Volume

Create a Runpod global volume for use by Pods and Serverless workers in any data center.

`POST /v2/global-volumes`

**Create a global volume**

Provisions a new global volume — storage that mounts into workloads
in any data center. Only a `name` is required; storage is provisioned
for you. Accounts have a cap on how many global volumes they can
hold; creating one past it fails with `400`.

Returns `201` with the created global volume, including its assigned
`id`.

**Authentication:** `bearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `name` (required; string; minimum length: `1`; maximum length: `191`; pattern: `[^\p{Z}\t-\r]`): Human-readable name, 1–191 characters with at least one non-whitespace character. Leading and trailing whitespace is trimmed.
  - Example `globalVolume`: `{"name":"training-data"}`

**Responses**

- `201`: Created
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string): Unique global volume identifier
      - `name` (required; string): Human-readable name (not required to be unique)
      - `createdAt` (required; string; format: date-time): When the volume was created
      - `createdByUserId` (required; nullable): ID of the user who created the volume, if known
    - Example `globalVolume`: `{"id":"gsb_abc","name":"training-data","createdAt":"2026-09-24T00:00:00Z","createdByUserId":"user_123"}`
- `400`: The request could not be processed because it is malformed or conflicts with request rules.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `badRequest`: `{"title":"Bad Request","status":400,"detail":"request could not be processed"}`
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
- `422`: The request body or parameters were syntactically valid but failed validation.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `validationFailed`: `{"title":"Unprocessable Entity","status":422,"detail":"Request validation failed."}`
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
