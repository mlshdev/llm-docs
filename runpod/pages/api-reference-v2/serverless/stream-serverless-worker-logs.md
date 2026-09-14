> Commit-pinned source for Runpod main: [api-reference-v2/serverless/stream-serverless-worker-logs.mdx](https://docs.runpod.io/api-reference-v2/serverless/stream-serverless-worker-logs)

# Stream Serverless Worker Logs

`GET /v2/serverless/{id}/workers/{workerId}/logs`

**Stream serverless worker logs**

Stream Serverless worker logs as Server-Sent Events. Choose a log source, receive source, line, and ts fields, and resume using Last-Event-ID.

**Parameters**

- `id` (path, required): Serverless endpoint identifier
- `workerId` (path, required): Worker identifier (from GET /v2/serverless/{id}/workers)
- `source` (query): Log source to stream. Omit to include both container and system logs.
- `tail` (query): Number of historical lines to backfill before streaming. Defaults to 100 when omitted; set `0` to stream live with no backfill. Maximum 5000. Ignored when `since` or `Last-Event-ID` is provided — the resume cursor drives the backfill instead.
- `since` (query): RFC3339 timestamp to resume from. Ignored when `Last-Event-ID` is provided. When set, the stream resumes from this point and `tail` is ignored.
- `Last-Event-ID` (header): SSE reconnect cursor — a timestamp emitted by this endpoint. Takes precedence over `since` and `tail`: when present, the stream resumes from this point. Sent automatically by EventSource on reconnect.

**Responses**

- `200`: Worker log event stream
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: The requested resource was not found or is not accessible to the caller.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
