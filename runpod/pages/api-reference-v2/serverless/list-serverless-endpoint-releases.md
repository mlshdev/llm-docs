> Commit-pinned source for Runpod main: [api-reference-v2/serverless/list-serverless-endpoint-releases.mdx](https://docs.runpod.io/api-reference-v2/serverless/list-serverless-endpoint-releases)

# List Serverless Endpoint Releases

List a Serverless endpoint's release history, configuration changes, build IDs, and current worker rollout status, newest release first.

`GET /v2/serverless/{id}/releases`

**List serverless endpoint releases**

Returns the endpoint's release history (newest first) plus a rollout
summary of how many workers are running the current version. Each
release is a versioned configuration snapshot with a `diff` of what
changed; build-driven releases carry a `buildId` (fetch build detail via
the builds sub-routes).

**Parameters**

- `id` (path, required): Serverless endpoint identifier

**Responses**

- `200`: OK
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: The requested resource was not found or is not accessible to the caller.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
