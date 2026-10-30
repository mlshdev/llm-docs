> Pinned source for Runpod main: [api-reference-v2/organization/get-an-organization-member.mdx](https://github.com/runpod/docs/blob/f2481a71841afde6db66b886a32d287d2e3ac0c9/api-reference-v2/organization/get-an-organization-member.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/organization/get-an-organization-member

# Get An Organization Member

Get one member of your organization by user ID.

`GET /v2/organization/users/{id}`

**Get an organization member**

Returns one member of the authenticated caller's organization by user ID, with the role they hold. Any member can read it. A user who is not a member, including one from another organization, returns 404. Returns 404 when the caller does not belong to an organization, or 403 when organizations are unavailable to the caller.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string): User identifier
  - Example: `user_id_abc_123`

**Responses**

- `200`: OK
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/json`
    - Schema (object): A member of the caller's organization. `id` is the member's user ID.
      - `id` (required; string): User ID.
      - `email` (required; nullable): The member's email address. Null for an account that has none.
      - `role` (required; object): An organization role, by ID.
        - `id` (required; string): Role ID. A built-in role's ID is `builtin:` followed by its name; a custom role carries its own ID.
        - `type` (required; string; enum: `builtin`, `custom`): Who defines the role. `builtin` roles are Runpod's: `builtin:admin`, `builtin:dev`, `builtin:billing` and `builtin:basic`. A `custom` role is one the organization defined, under its own ID.
    - Example `user`: `{"id":"user_id_abc_123","email":"owner@example.com","role":{"id":"builtin:admin","type":"builtin"}}`
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
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `insufficientAccess`: `{"title":"Forbidden","status":403,"detail":"access denied"}`
- `404`: The requested resource was not found or is not accessible to the caller.
  - Header `RateLimit` (string)
  - Header `RateLimit-Policy` (string)
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
