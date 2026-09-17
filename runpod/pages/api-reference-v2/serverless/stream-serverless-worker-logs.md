> Pinned source for Runpod main: [api-reference-v2/serverless/stream-serverless-worker-logs.mdx](https://github.com/runpod/docs/blob/fa4985146919262a6e9cdb946c50eec1ed81ffc9/api-reference-v2/serverless/stream-serverless-worker-logs.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/serverless/stream-serverless-worker-logs

# Stream Serverless Worker Logs

Stream a Runpod Serverless worker's logs in real time as Server-Sent Events, with resumable reconnects via Last-Event-ID.

`GET /v2/serverless/{id}/workers/{workerId}/logs`

**Stream serverless worker logs**

Streams a serverless worker's logs as Server-Sent Events. The `source`
query parameter selects which log source to include.

The SSE `data` payload shape is:
`{ "source": "container", "line": "...", "ts": "..." }`.
Log-event `id` values are the event `ts` timestamp so browser/EventSource
reconnects can resume with `Last-Event-ID`.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string): Serverless endpoint identifier
  - Example: `ep_abc123`
- `workerId` (path; required; string): Worker identifier (from GET /v2/serverless/{id}/workers)
  - Example: `worker_abc`
- `source` (query; string; enum: `container`, `system`): Log source to stream. Omit to include both container and system logs.
- `tail` (query; integer; default: `100`; minimum: `0`; maximum: `5000`): Number of historical lines to backfill before streaming. Defaults to 100 when omitted; set `0` to stream live with no backfill. Maximum 5000. Ignored when `since` or `Last-Event-ID` is provided — the resume cursor drives the backfill instead.
- `since` (query; string; format: date-time): RFC3339 timestamp to resume from. Ignored when `Last-Event-ID` is provided. When set, the stream resumes from this point and `tail` is ignored.
- `Last-Event-ID` (header; string; format: date-time): SSE reconnect cursor — a timestamp emitted by this endpoint. Takes precedence over `since` and `tail`: when present, the stream resumes from this point. Sent automatically by EventSource on reconnect.

**Responses**

- `200`: Worker log event stream
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Header `Cache-Control` (string): Always `no-cache` for SSE responses.
  - Header `Connection` (string): Always `keep-alive` to hold the SSE stream open.
  - Header `X-Accel-Buffering` (string): Always `no` to disable proxy buffering of the SSE stream.
  - Media type: `text/event-stream`
    - Schema (string): Server-Sent Events stream. Each event includes an `id:` line and a JSON `data:` payload with `source`, `line`, and `ts` fields.
    - Example `logLine`: `id: 2026-06-01T12:05:04Z/000000000042 data: {"ts":"2026-06-01T12:05:04Z","source":"container","line":"Worker ready."}`
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
