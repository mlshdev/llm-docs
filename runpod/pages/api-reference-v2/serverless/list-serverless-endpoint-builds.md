> Pinned source for Runpod main: [api-reference-v2/serverless/list-serverless-endpoint-builds.mdx](https://github.com/runpod/docs/blob/56a86f70b4ea8b225c0e5e2231e42a4925931686/api-reference-v2/serverless/list-serverless-endpoint-builds.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/serverless/list-serverless-endpoint-builds

# List Serverless Endpoint Builds

List a Runpod Serverless endpoint's GitHub build history, newest first, capped to the 100 most recent builds, with older builds fetchable by ID.

`GET /v2/serverless/{id}/builds`

**List serverless endpoint builds**

Returns the endpoint's GitHub build history, newest first (Runpod
GitHub-build integration), cursor-paginated; an omitted `limit`
defaults to 100, so a bare request returns at most the 100 most
recent builds. Any build can also be fetched by id via
`GET /v2/serverless/{id}/builds/{buildId}`. Stream a build's logs via
`/v2/serverless/{id}/builds/{buildId}/logs`.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string): Serverless endpoint identifier
  - Example: `ep_abc123`
- `cursor` (query; string; minimum length: `1`): Opaque resume cursor — pass the previous response's `pagination.nextCursor` through verbatim; omit for the first page. A cursor is only valid for the operation and parameters that issued it; a malformed or foreign cursor is rejected with 422.
  - Example: `Y3JlYXRlZEF0PTE3NDg3ODA0MDA`
- `limit` (query; integer; minimum: `1`; maximum: `100`): Page size, 1–100. Defaults to 100 when omitted.
  - Example: `50`

**Responses**

- `200`: OK
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object)
      - `builds` (required; array): Build history, newest first, cursor-paginated (an omitted `limit` defaults to 100). Page with `cursor`/`limit` to walk the full history, or fetch any build by id via `GET /v2/serverless/{id}/builds/{buildId}`.
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
      - `pagination` (required; object): Cursor-pagination metadata, uniform across list endpoints. Every response carries it: follow `nextCursor` while `hasNextPage` is true to walk the full result set.
        - `nextCursor` (required; nullable): Pass as the `cursor` query parameter to fetch the next page. Null on the last page.
        - `hasNextPage` (required; boolean): Whether more items exist after this page.
    - Example `builds`: `{"builds":[{"id":"build_abc123","status":"COMPLETED","commitHash":"abc1234","commitMessage":"bump model","branch":"main","commitDate":"2026-06-01T12:00:00Z","imageName":"registry.runpod.net/repo:abc1234","startedAt":"2026-06-01T12:00:05Z","completedAt":"2026-06-01T12:04:31Z","error":null}],"pagination":{"nextCursor":null,"hasNextPage":false}}`
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
