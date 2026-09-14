> Commit-pinned source for Runpod main: [api-reference-v2/serverless/list-serverless-endpoint-workers.mdx](https://docs.runpod.io/api-reference-v2/serverless/list-serverless-endpoint-workers)

# List Serverless Endpoint Workers

List active workers for a Runpod Serverless endpoint with worker status, runtime details, and summary counts grouped by status.

`GET /v2/serverless/{id}/workers`

**List serverless endpoint workers**

Lists the active workers for a serverless endpoint.

**Returns.** A `200` with a `ListEndpointWorkersResponse`: a
`workers` array (one entry per active worker, each carrying its `id`,
`status`, and runtime details) plus a `summary` of worker counts
grouped by status. Only currently active workers are included;
scaled-down workers are not returned.

**How `status` is determined.** Each worker's `status` is derived by
reconciling the worker pod's lifecycle status with the endpoint's
live job-queue view (which workers are actively serving requests).
When the job-queue view is unavailable, the response degrades
gracefully: the shape is unchanged, but each `status` and the summary
counts fall back to pod lifecycle alone.

**Parameters**

- `id` (path, required): Serverless endpoint identifier

**Responses**

- `200`: OK
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: The requested resource was not found or is not accessible to the caller.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
