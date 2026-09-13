> Commit-pinned source for Runpod main: [api-reference-v2/serverless/get-a-serverless-endpoint-build.mdx](https://docs.runpod.io/api-reference-v2/serverless/get-a-serverless-endpoint-build)

# Get A Serverless Endpoint Build

Retrieve a single GitHub build for a Runpod Serverless endpoint by its build ID, returning that build regardless of how old it is.

`GET /v2/serverless/{id}/builds/{buildId}`

**Get a serverless endpoint build**

Returns one of the endpoint's GitHub builds by id, regardless of age —
unlike the list, which is capped to recent history.

**Parameters**

- `id` (path, required): Serverless endpoint identifier
- `buildId` (path, required): GitHub build identifier (from GET /v2/serverless/{id}/builds or a release's `buildId`)

**Responses**

- `200`: OK
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: The requested resource was not found or is not accessible to the caller.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
