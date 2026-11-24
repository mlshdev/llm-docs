> Pinned source for Runpod main: [api-reference-v2/account/get-account-limits.mdx](https://github.com/runpod/docs/blob/f1803c4438f689fd05a79ba9965c5fe8ef971f20/api-reference-v2/account/get-account-limits.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/account/get-account-limits

# Get Account Limits

Read the spend rate limit, current spend rate, and resource limits that apply to your Runpod account before you deploy.

`GET /v2/account/limits`

**Get account limits**

Returns the limits that apply to the account this request acts for. A create or resume that would go past a limit is refused. Not available for organizations (403).

**Authentication:** `bearerAuth`

**Responses**

- `200`: OK
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/json`
    - Schema (object)
      - `spendRate` (required; object): Spend rate limit: the hourly cap checked when a Pod or serverless worker starts. The start is refused when the hourly cost of running Pods and serverless workers plus the new one's cost would exceed it.
        - `limit` (required; format: double; nullable): Spend rate limit in USD per hour. Null when the account has no spend rate limit (postpaid accounts).
        - `current` (required; number; format: double): Current spend rate in USD per hour, the same value the console shows next to the limit. It also counts storage (network volumes, stopped Pods' disks), so it can be slightly higher than what the limit is checked against.
      - `serverlessWorkers` (required; object)
        - `limit` (required; nullable): The cap. Null when the account has no limit.
    - Example `free`: `{"spendRate":{"limit":80,"current":12.4},"serverlessWorkers":{"limit":10}}`
- `401`: Authentication failed because the bearer token is missing, malformed, expired, or invalid.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `missingBearerToken`: `{"title":"Unauthorized","status":401,"detail":"missing bearer token"}`
- `403`: The bearer token is valid, but it does not grant access to the requested resource or action.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `insufficientAccess`: `{"title":"Forbidden","status":403,"detail":"access denied"}`
- `429`: The caller exceeded its per-user rate limit. The response identifies the window that was exceeded and how long to wait. The `RateLimit` and `RateLimit-Policy` headers (per the IETF ratelimit-headers draft) also accompany successful responses, so clients can track quota before a 429.
  - Header `Retry-After` (integer): Seconds to wait before retrying, per the exceeded window.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `rateLimited`: `{"title":"Too Many Requests","status":429,"detail":"rate limit exceeded for the minute window"}`
- `default`: Error
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)

**Required API key scope:** `account:read`
