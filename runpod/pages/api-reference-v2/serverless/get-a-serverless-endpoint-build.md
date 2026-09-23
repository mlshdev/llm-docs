> Pinned source for Runpod main: [api-reference-v2/serverless/get-a-serverless-endpoint-build.mdx](https://github.com/runpod/docs/blob/6bedc9afe6be9f0bfbbaa77c2ee91f08714e0dec/api-reference-v2/serverless/get-a-serverless-endpoint-build.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/serverless/get-a-serverless-endpoint-build

# Get A Serverless Endpoint Build

Retrieve a single GitHub build for a Runpod Serverless endpoint by its build ID, returning that build regardless of how old it is.

`GET /v2/serverless/{id}/builds/{buildId}`

**Get a serverless endpoint build**

Returns one of the endpoint's GitHub builds by id, regardless of age —
no need to page through `GET /v2/serverless/{id}/builds` to reach it.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string): Serverless endpoint identifier
  - Example: `ep_abc123`
- `buildId` (path; required; string): GitHub build identifier (from GET /v2/serverless/{id}/builds or a release's `buildId`)
  - Example: `build_abc123`

**Responses**

- `200`: OK
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string)
      - `status` (required; string; enum: `PENDING`, `BUILDING`, `UPLOADING`, `TESTING`, `COMPLETED`, `FAILED`, `CANCELLED`, `TEST_FAILED`): GitHub build lifecycle state. `COMPLETED`, `FAILED`, `CANCELLED`, and `TEST_FAILED` are terminal; `PENDING`, `BUILDING`, `UPLOADING`, and `TESTING` are live.
      - `commitHash` (nullable): Short hash of the commit that triggered the build.
      - `commitMessage` (nullable)
      - `branch` (nullable): Git branch the commit was pushed to.
      - `commitDate` (format: date-time; nullable): When the triggering commit was authored.
      - `imageName` (nullable): Fully qualified image the build produced (or will produce).
      - `startedAt` (format: date-time; nullable): When the build started. Null while the build is still pending.
      - `completedAt` (format: date-time; nullable): When the build reached a terminal state. Null while the build is live.
      - `error` (nullable): Failure detail for `FAILED` / `TEST_FAILED` builds; null otherwise.
    - Example `build`: `{"id":"build_abc123","status":"COMPLETED","commitHash":"abc1234","commitMessage":"bump model","branch":"main","commitDate":"2026-06-01T12:00:00Z","imageName":"registry.runpod.net/repo:abc1234","startedAt":"2026-06-01T12:00:05Z","completedAt":"2026-06-01T12:04:31Z","error":null}`
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
- `404`: The requested resource was not found or is not accessible to the caller.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `notFound`: `{"title":"Not Found","status":404,"detail":"resource not found"}`
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
