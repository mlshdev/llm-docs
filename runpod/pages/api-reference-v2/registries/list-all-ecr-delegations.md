> Commit-pinned source for Runpod main: [api-reference-v2/registries/list-all-ecr-delegations.mdx](https://docs.runpod.io/api-reference-v2/registries/list-all-ecr-delegations)

# List All Ecr Delegations

`GET /v2/registries/delegations`

**List all ECR delegations**

**Responses**

- `200`: OK
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
