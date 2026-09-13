> Commit-pinned source for Runpod main: [api-reference-v2/catalog/list-cpu-types.mdx](https://docs.runpod.io/api-reference-v2/catalog/list-cpu-types)

# List Cpu Types

List available Runpod CPU types with pricing and optional availability details for a specified product and deployment context.

`GET /v2/catalog/cpus`

**List CPU types**

Returns available CPU flavors. Availability is included only when requested with include=AVAILABILITY, which requires `product` — stock differs by product context.

**Parameters**

- `include` (query): Comma-separated optional expansions. Supported value today: AVAILABILITY. This may expand with more include values in the future.
- `product` (query): Comma-separated availability product contexts. Supported values for CPUs: POD, SERVERLESS. Required with include=AVAILABILITY, and valid only with it (400 either way). There is no default: availability differs by product.
- `vcpuCount` (query): Availability vCPU count. Valid only with include=AVAILABILITY. Must be a power of two.

**Responses**

- `200`: OK
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
