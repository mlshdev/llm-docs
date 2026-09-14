> Commit-pinned source for Runpod main: [api-reference-v2/registries/list-container-registries.mdx](https://docs.runpod.io/api-reference-v2/registries/list-container-registries)

# List Container Registries

List all container registry credentials owned by the authenticated Runpod user, with secret usernames and passwords excluded.

`GET /v2/registries`

**List container registries**

Returns all container registry credentials owned by the authenticated user.

**Responses**

- `200`: OK
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
