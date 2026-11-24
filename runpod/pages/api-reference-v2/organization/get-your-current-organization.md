> Pinned source for Runpod main: [api-reference-v2/organization/get-your-current-organization.mdx](https://github.com/runpod/docs/blob/f1803c4438f689fd05a79ba9965c5fe8ef971f20/api-reference-v2/organization/get-your-current-organization.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/organization/get-your-current-organization

# Get Your Current Organization

Retrieve your current Runpod organization.

`GET /v2/organization`

**Get your current organization**

Returns the authenticated caller's current organization. Organization context comes from the caller's membership; no selector is required. Returns 404 when the caller does not belong to an organization, or 403 when organizations are unavailable to the caller.

**Authentication:** `bearerAuth`

**Responses**

- `200`: OK
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/json`
    - Schema (object): The authenticated caller's current organization. Its role and groups are the caller's membership in this organization.
      - `id` (required; string): Organization ID.
      - `name` (required; string): Organization name.
      - `role` (required; object): An organization role, by ID and display name.
        - `id` (required; string): Role ID. A built-in role's ID is `builtin:` followed by its key; a custom role carries its own ID.
        - `type` (required; string; enum: `builtin`, `custom`): Who defines the role. `builtin` roles are Runpod's: `builtin:admin`, `builtin:dev`, `builtin:billing` and `builtin:basic`. A `custom` role is one the organization defined, under its own ID.
        - `name` (required; string): The role's display name: `Admin`, `Developer`, `Billing` or `Contributor` for a built-in role, or a custom role's own name. A custom role that has since been deleted reads as `Contributor` while `id` keeps its own ID.
      - `groups` (required; array): The caller's groups in this organization. Empty when the caller belongs to no groups.
        - `items` (object): An organization group, by ID and name.
          - `id` (required; string): Group ID.
          - `name` (required; string): Group name.
    - Example `organization`: `{"id":"org_id_abc_123","name":"my-org","role":{"id":"builtin:dev","type":"builtin","name":"Developer"},"groups":[{"id":"group_id_abc_123","name":"Engineering"}]}`
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
- `404`: The requested resource was not found or is not accessible to the caller.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `notFound`: `{"title":"Not Found","status":404,"detail":"resource not found"}`
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

**Required API key scope:** `membership:read`
