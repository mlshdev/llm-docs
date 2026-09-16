> Pinned source for Runpod main: [api-reference-v2/registries/list-all-ecr-delegations.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/api-reference-v2/registries/list-all-ecr-delegations.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/registries/list-all-ecr-delegations

# List All Ecr Delegations

`GET /v2/registries/delegations`

**List all ECR delegations**

**Authentication:** `bearerAuth`

**Responses**

- `200`: OK
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object)
      - `delegations` (required; array)
        - `items` (object)
          - `id` (required; string): Delegation identifier
          - `name` (nullable): Optional name for the delegation
          - `delegatorUserId` (required; string): User ID that created the delegation
          - `awsUser` (required; string): AWS user/role being delegated
          - `repository` (required; string): ECR repository name
          - `tag` (required; string): ECR image tag
          - `awsRegion` (required; string): AWS region
          - `dockerRegistryUri` (string): Formatted ECR registry URI for Docker login
          - `createdAt` (required; string; format: date-time): When the delegation was created
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
  - Header `Retry-After` (integer): Seconds to wait before retrying, per the exceeded window.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `rateLimited`: `{"title":"Too Many Requests","status":429,"detail":"rate limit exceeded for the minute window"}`
- `default`: Error
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
