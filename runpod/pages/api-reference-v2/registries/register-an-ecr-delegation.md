> Commit-pinned source for Runpod main: [api-reference-v2/registries/register-an-ecr-delegation.mdx](https://docs.runpod.io/api-reference-v2/registries/register-an-ecr-delegation)

# Register An Ecr Delegation

`POST /v2/registries/delegations`

**Register an ECR delegation**

**Request body**

**Responses**

- `201`: Delegation created
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
- `default`: Error
