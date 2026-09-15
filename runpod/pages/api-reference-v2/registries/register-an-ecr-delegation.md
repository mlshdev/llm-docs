> Pinned source for Runpod main: [api-reference-v2/registries/register-an-ecr-delegation.mdx](https://github.com/runpod/docs/blob/ceb79977df03b21e40ceaec3fdea8c9869897b7e/api-reference-v2/registries/register-an-ecr-delegation.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/registries/register-an-ecr-delegation

# Register An Ecr Delegation

`POST /v2/registries/delegations`

**Register an ECR delegation**

**Authentication:** `bearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `resource` (required; string): ECR resource ARN
    - `name` (nullable): Optional name for the delegation

**Responses**

- `201`: Delegation created
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object)
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
