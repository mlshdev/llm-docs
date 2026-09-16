> Pinned source for Runpod main: [api-reference-v2/serverless/list-serverless-endpoint-builds.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/api-reference-v2/serverless/list-serverless-endpoint-builds.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/serverless/list-serverless-endpoint-builds

# List Serverless Endpoint Builds

List a Runpod Serverless endpoint's GitHub build history, newest first, capped to the 100 most recent builds, with older builds fetchable by ID.

`GET /v2/serverless/{id}/builds`

**List serverless endpoint builds**

Returns the endpoint's GitHub build history, newest first (RunPod
GitHub-build integration). At most the 100 most recent builds are
returned; any older build can still be fetched by id via
`GET /v2/serverless/{id}/builds/{buildId}`. Stream a build's logs via
`/v2/serverless/{id}/builds/{buildId}/logs`.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string): Serverless endpoint identifier
  - Example: `ep_abc123`

**Responses**

- `200`: OK
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object)
      - `builds` (required; array): Build history, newest first. At most the 100 most recent builds are returned; any older build can still be fetched by id via `GET /v2/serverless/{id}/builds/{buildId}`.
        - `items` (object)
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
    - Example `builds`: `{"builds":[{"id":"build_abc123","status":"COMPLETED","commitHash":"abc1234","commitMessage":"bump model","branch":"main","commitDate":"2026-06-01T12:00:00Z","imageName":"registry.runpod.net/repo:abc1234","startedAt":"2026-06-01T12:00:05Z","completedAt":"2026-06-01T12:04:31Z","error":null}]}`
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
