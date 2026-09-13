> Commit-pinned source for Runpod main: [api-reference-v2/serverless/list-serverless-endpoint-builds.mdx](https://docs.runpod.io/api-reference-v2/serverless/list-serverless-endpoint-builds)

# List Serverless Endpoint Builds

List a Runpod Serverless endpoint's GitHub build history, newest first, capped to the 100 most recent builds, with older builds fetchable by ID.

`GET /v2/serverless/{id}/builds`

**List serverless endpoint builds**

Returns the endpoint's GitHub build history, newest first (RunPod
GitHub-build integration). At most the 100 most recent builds are
returned; any older build can still be fetched by id via
`GET /v2/serverless/{id}/builds/{buildId}`. Stream a build's logs via
`/v2/serverless/{id}/builds/{buildId}/logs`.

**Parameters**

- `id` (path, required): Serverless endpoint identifier

**Responses**

- `200`: OK
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: The requested resource was not found or is not accessible to the caller.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
