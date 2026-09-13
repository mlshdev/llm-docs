> Commit-pinned source for Runpod main: [api-reference-v2/registries/get-a-container-registry-credential.mdx](https://docs.runpod.io/api-reference-v2/registries/get-a-container-registry-credential)

# Get A Container Registry Credential

Retrieve a Runpod container registry credential by ID while keeping stored usernames and passwords excluded from the response.

`GET /v2/registries/{id}`

**Get a container registry credential**

Returns a single container registry credential by ID. `username` and
`password` are never included in the response — credentials are
write-only, matching `createRegistry`.

**Parameters**

- `id` (path, required)

**Responses**

- `200`: OK
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
- `404`: The requested resource was not found or is not accessible to the caller.
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
