> Commit-pinned source for Runpod main: [api-reference-v2/catalog/get-a-data-center.mdx](https://docs.runpod.io/api-reference-v2/catalog/get-a-data-center)

# Get A Data Center

`GET /v2/catalog/datacenters/{id}`

**Get a data center**

Returns a single data center. Availability is included only when requested with include=GPU_AVAILABILITY or include=CPU_AVAILABILITY.

**Parameters**

- `id` (path, required)
- `include` (query): Comma-separated optional expansions. Supported value: GPU_AVAILABILITY, CPU_AVAILABILITY.

**Responses**

- `200`: OK
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: The requested resource was not found or is not accessible to the caller.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
