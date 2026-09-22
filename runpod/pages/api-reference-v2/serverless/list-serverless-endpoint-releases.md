> Pinned source for Runpod main: [api-reference-v2/serverless/list-serverless-endpoint-releases.mdx](https://github.com/runpod/docs/blob/4962c60abcb8d9bf359d92ccc07644abd5d8e610/api-reference-v2/serverless/list-serverless-endpoint-releases.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/serverless/list-serverless-endpoint-releases

# List Serverless Endpoint Releases

List a Serverless endpoint's release history, configuration changes, build IDs, and current worker rollout status, newest release first.

`GET /v2/serverless/{id}/releases`

**List serverless endpoint releases**

Returns the endpoint's release history (newest first) plus a rollout
summary of how many workers are running the current version. Each
release is a versioned configuration snapshot with a `diff` of what
changed; build-driven releases carry a `buildId` (fetch build detail via
the builds sub-routes).

Releases are cursor-paginated newest-first; an omitted `limit`
defaults to 1000. The rollout summary always describes the endpoint's
current state, independent of the page requested.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string): Serverless endpoint identifier
  - Example: `ep_abc123`
- `cursor` (query; string; minimum length: `1`): Opaque resume cursor — pass the previous response's `pagination.nextCursor` through verbatim; omit for the first page. A cursor is only valid for the operation and parameters that issued it; a malformed or foreign cursor is rejected with 422.
  - Example: `Y3JlYXRlZEF0PTE3NDg3ODA0MDA`
- `limit` (query; integer; minimum: `1`; maximum: `1000`): Page size, 1–1000. Defaults to 1000 when omitted.
  - Example: `50`

**Responses**

- `200`: OK
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object)
      - `endpointVersion` (nullable): The endpoint's current configuration version. Null if unknown.
      - `rollout` (required; object)
        - `inProgress` (required; boolean): True while any worker is still running an older version.
        - `workersOnLatest` (required; integer; minimum: `0`): Workers running the endpoint's current version.
        - `workersTotal` (required; integer; minimum: `0`): All workers currently allocated to the endpoint.
        - `percentOnLatest` (required; integer; minimum: `0`; maximum: `100`): Percentage of workers on the current version (0 when there are no workers).
      - `releases` (required; array): Release history, newest first.
        - `items` (object)
          - `id` (required; string)
          - `version` (nullable): The endpoint configuration version this release produced.
          - `source` (required; string; enum: `GIT_BUILD`, `MANUAL`): What produced the release. - `GIT_BUILD` — a completed GitHub build (see `buildId`) - `MANUAL` — a manual configuration change
          - `buildId` (nullable): The GitHub build that produced this release. Set when `source` is `GIT_BUILD`; null for `MANUAL` releases. Fetch build detail/logs via `/v2/serverless/{id}/builds/{buildId}`.
          - `createdByUserId` (nullable): ID of the user who created the release.
          - `workerCount` (required; integer; minimum: `0`): Workers currently running this release's version.
          - `createdAt` (required; string; format: date-time)
          - `diff` (required; array): Configuration fields that changed in this release.
            - `items` (object)
              - `field` (required; string): The changed configuration field. Top-level (e.g. `gpuCount`, `locations`) or template-scoped (e.g. `template.imageName`, `template.env`).
              - `old` (required): Previous value, as raw JSON. Null when the field was added.
              - `new` (required): New value, as raw JSON. Null when the field was removed.
      - `pagination` (required; object): Cursor-pagination metadata, uniform across list endpoints. Every response carries it: follow `nextCursor` while `hasNextPage` is true to walk the full result set.
        - `nextCursor` (required; nullable): Pass as the `cursor` query parameter to fetch the next page. Null on the last page.
        - `hasNextPage` (required; boolean): Whether more items exist after this page.
    - Example `releases`: `{"endpointVersion":4,"rollout":{"inProgress":true,"workersOnLatest":1,"workersTotal":2,"percentOnLatest":50},"releases":[{"id":"5r9x2m7q","version":4,"source":"MANUAL","buildId":null,"createdByUserId":null,"workerCount":2,"createdAt":"2026-06-01T12:10:00Z","diff":[{"field":"workers.max","old":5,"new":10}]}],"pagination":{"nextCursor":null,"hasNextPage":false}}`
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
