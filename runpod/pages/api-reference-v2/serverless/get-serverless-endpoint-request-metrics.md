> Pinned source for Runpod main: [api-reference-v2/serverless/get-serverless-endpoint-request-metrics.mdx](https://github.com/runpod/docs/blob/bb50dd3e90ddb2dfedf2d0c89fa8ed3feeadd01f/api-reference-v2/serverless/get-serverless-endpoint-request-metrics.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/serverless/get-serverless-endpoint-request-metrics

# Get Serverless Endpoint Request Metrics

Get request counts, execution time, and queue delay for a Runpod Serverless endpoint as a time series.

`GET /v2/serverless/{id}/metrics/requests`

**Get serverless endpoint request metrics**

Returns the request series shown on the endpoint's Metrics tab in the console.

**Window.** `startTime` is inclusive and `endTime` is exclusive. Both are
optional: `endTime` defaults to now and `startTime` to 24 hours before
`endTime`, rounded down to the start of an `interval` bucket. An
`endTime` in the future is treated as now. Metrics are kept for 90 days,
so `startTime` must be within the last 90 days.

**Interval.** Each record covers one `interval`-sized bucket, aligned to
UTC.

**Paging.** Records are oldest first, at most `limit` (default 1000) per
page. Follow `pagination.nextCursor` while `pagination.hasNextPage` is
true. The cursor keeps the first page's window, so `startTime`,
`endTime`, and `interval` can be left out on later pages; if sent, they
must match the first page or the cursor is rejected with 422.

**Sparse series.** Buckets with no activity are omitted, not zero-filled,
so `records` can be shorter than the number of buckets in the window, or
empty.

**Units.** Durations are milliseconds. `executionTimeMs` is the time a
worker spent running a request; `delayTimeMs` is the time a request
waited in the queue before a worker picked it up.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string): Serverless endpoint identifier
  - Example: `ep_abc123`
- `startTime` (query; string; format: date-time): Start of the window (RFC 3339), inclusive. Defaults to 24 hours before endTime, rounded down to the start of an interval bucket. Must be within the last 90 days.
  - Example: `2026-10-11T00:00:00Z`
- `endTime` (query; string; format: date-time): End of the window (RFC 3339), exclusive. Defaults to now; a future value is treated as now.
  - Example: `2026-10-12T00:00:00Z`
- `interval` (query; string; enum: `1m`, `5m`, `15m`, `30m`, `1h`, `6h`, `12h`, `1d`; default: `1h`): Bucket size. Defaults to 1h.
- `cursor` (query; string; minimum length: `1`): Opaque resume cursor — pass the previous response's `pagination.nextCursor` through verbatim; omit for the first page. A cursor is only valid for the operation and parameters that issued it; a malformed or foreign cursor is rejected with 422.
  - Example: `Y3JlYXRlZEF0PTE3NDg3ODA0MDA`
- `limit` (query; integer; minimum: `1`; maximum: `1000`): Page size, 1–1000. Defaults to 1000 when omitted.
  - Example: `50`

**Responses**

- `200`: OK
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/json`
    - Schema (object): Request counts and durations per bucket for the resolved window. `records` contains only buckets with activity. Buckets with no activity are omitted, not zero-filled, so `records` can be shorter than the number of buckets in the window, or empty. Results are paged: see `pagination`.
      - `startTime` (required; string; format: date-time): Resolved window start (after defaults).
      - `endTime` (required; string; format: date-time): Resolved window end (after defaults and the clamp to now).
      - `interval` (required; string; enum: `1m`, `5m`, `15m`, `30m`, `1h`, `6h`, `12h`, `1d`; default: `1h`): Bucket size for endpoint metrics.
      - `records` (required; array): This page's buckets, oldest first.
        - `items` (object)
          - `time` (required; string; format: date-time): Bucket start (UTC).
          - `requests` (required; integer): Requests that finished in this bucket.
          - `completed` (required; integer)
          - `failed` (required; integer)
          - `retries` (required; integer)
          - `executionTimeMs` (required; object): Millisecond statistics over one bucket.
            - `min` (required; integer)
            - `max` (required; integer)
            - `total` (required; number; format: double): Sum over every request (or cold start) in the bucket.
            - `p70` (required; integer)
            - `p90` (required; integer)
            - `p95` (required; integer)
            - `p98` (required; integer)
          - `delayTimeMs` (required; object): Millisecond statistics over one bucket.
            - `min` (required; integer)
            - `max` (required; integer)
            - `total` (required; number; format: double): Sum over every request (or cold start) in the bucket.
            - `p70` (required; integer)
            - `p90` (required; integer)
            - `p95` (required; integer)
            - `p98` (required; integer)
      - `pagination` (required; object): Cursor-pagination metadata, uniform across list endpoints. Every response carries it: follow `nextCursor` while `hasNextPage` is true to walk the full result set.
        - `nextCursor` (required; nullable): Pass as the `cursor` query parameter to fetch the next page. Null on the last page.
        - `hasNextPage` (required; boolean): Whether more items exist after this page.
    - Example `metrics`: `{"startTime":"2026-10-11T00:00:00Z","endTime":"2026-10-12T00:00:00Z","interval":"1h","records":[{"time":"2026-10-11T13:00:00Z","requests":120,"completed":117,"failed":3,"retries":2,"executionTimeMs":{"min":210,"max":9400,"total":182400,"p70":1500,"p90":3100,"p95":4800,"p98":7700},"delayTimeMs":{"min":4,"max":2100,"total":15600,"p70":90,"p90":310,"p95":820,"p98":1500}}],"pagination":{"nextCursor":null,"hasNextPage":false}}`
- `400`: The request could not be processed because it is malformed or conflicts with request rules.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
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
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `insufficientAccess`: `{"title":"Forbidden","status":403,"detail":"access denied"}`
- `404`: The requested resource was not found or is not accessible to the caller.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `notFound`: `{"title":"Not Found","status":404,"detail":"resource not found"}`
- `413`: The response would exceed the response size cap. Request fewer items and retry; on paginated operations, lower `limit`.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `responseTooLarge`: `{"title":"Request Entity Too Large","status":413,"detail":"Response too large for one request. Request fewer items and retry."}`
- `422`: The request body or parameters were syntactically valid but failed validation.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
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
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `rateLimited`: `{"title":"Too Many Requests","status":429,"detail":"rate limit exceeded for the minute window"}`
- `default`: Error
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
