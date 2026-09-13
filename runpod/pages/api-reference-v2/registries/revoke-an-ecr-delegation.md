> Commit-pinned source for Runpod main: [api-reference-v2/registries/revoke-an-ecr-delegation.mdx](https://docs.runpod.io/api-reference-v2/registries/revoke-an-ecr-delegation)

# Revoke An Ecr Delegation

`DELETE /v2/registries/delegations/{id}`

**Revoke an ECR delegation**

**Parameters**

- `id` (path, required)

**Responses**

- `204`: Delegation revoked
- `404`: Delegation not found
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
