> Commit-pinned source for Runpod main: [api-reference-v2/templates/get-a-template.mdx](https://docs.runpod.io/api-reference-v2/templates/get-a-template)

# Get A Template

Retrieve the complete configuration of an owned or public Runpod template by ID, including settings used to create Pods and endpoints.

`GET /v2/templates/{id}`

**Get a template**

Returns the full configuration of a single template by ID. Serves
both templates you own and public catalog templates — everything you
can read. Updates and deletes remain restricted to templates you own.

**Parameters**

- `id` (path, required)

**Responses**

- `200`: OK
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: The requested resource was not found or is not accessible to the caller.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
