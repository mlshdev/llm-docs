> Commit-pinned source for Runpod main: [api-reference-v2/serverless/get-a-serverless-endpoint.mdx](https://docs.runpod.io/api-reference-v2/serverless/get-a-serverless-endpoint)

# Get A Serverless Endpoint

Retrieve a Runpod Serverless endpoint by ID with its compute, worker, scaling, container, storage, and current status settings.

`GET /v2/serverless/{id}`

**Get a serverless endpoint**

Returns a single serverless endpoint by ID.

**Parameters**

- `id` (path, required): Serverless endpoint identifier

**Responses**

- `200`: OK
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: The requested resource was not found or is not accessible to the caller.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
