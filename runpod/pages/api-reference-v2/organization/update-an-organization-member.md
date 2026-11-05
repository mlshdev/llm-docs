> Pinned source for Runpod main: [api-reference-v2/organization/update-an-organization-member.mdx](https://github.com/runpod/docs/blob/93f2147761903839f4a2b3e595117f4f20fd9a89/api-reference-v2/organization/update-an-organization-member.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/organization/update-an-organization-member

# Update An Organization Member

Change a member's role, replace their groups, or both, by user ID.

`PATCH /v2/organization/users/{id}`

**Update an organization member**

Changes one member of the authenticated caller's organization by user ID: assigns a role, replaces their set of groups, or both, applied together or not at all. Send at least one field; an omitted field is left as it is, and an empty `groups` list removes the member from every group. Updating members requires the organization's member-management capability, which the built-in admin role holds; other members, and callers outside an organization, receive 403, as does a caller for whom organizations are unavailable. Returns 403 when the caller changes their own role or assigns a role granting a capability the caller lacks; 409 when the change would leave the organization without a member in the built-in admin role; and 404 when the user is not a member or the role or a group is unknown to the organization, with the detail naming which.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string): User identifier
  - Example: `user_id_abc_123`

**Request body** (required)

- Media type: `application/json`
  - Schema (object): Changes to a member. Send `role`, `groups`, or both; an omitted field is left as it is.
    - `role` (object): An organization role to assign, by ID.
      - `id` (required; string; minimum length: `1`): Role ID, as reported on a member or an invite: `builtin:admin`, `builtin:dev`, `builtin:billing`, `builtin:basic`, or a custom role's own ID.
    - `groups` (array; unique items): The member's groups after the change: the whole set, by ID. An empty list removes the member from every group.
      - `items` (object): An organization group, by ID.
        - `id` (required; string; minimum length: `1`): Group ID.
  - Example `role`: `{"role":{"id":"builtin:dev"}}`
  - Example `groups`: `{"groups":[{"id":"group_id_abc_123"}]}`
  - Example `clearGroups`: `{"groups":[]}`

**Responses**

- `200`: OK
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/json`
    - Schema (object): A member of the caller's organization. `id` is the member's user ID.
      - `id` (required; string): User ID.
      - `email` (required; nullable): The member's email address. Null for an account that has none.
      - `role` (required; object): An organization role, by ID and display name.
        - `id` (required; string): Role ID. A built-in role's ID is `builtin:` followed by its key; a custom role carries its own ID.
        - `type` (required; string; enum: `builtin`, `custom`): Who defines the role. `builtin` roles are Runpod's: `builtin:admin`, `builtin:dev`, `builtin:billing` and `builtin:basic`. A `custom` role is one the organization defined, under its own ID.
        - `name` (required; string): The role's display name: `Admin`, `Developer`, `Billing` or `Contributor` for a built-in role, or a custom role's own name. A custom role that has since been deleted reads as `Contributor` while `id` keeps its own ID.
      - `groups` (required; array): The groups the member belongs to, by name.
        - `items` (object): An organization group, by ID and name.
          - `id` (required; string): Group ID.
          - `name` (required; string): Group name.
    - Example `user`: `{"id":"user_id_abc_123","email":"member@example.com","role":{"id":"builtin:dev","type":"builtin","name":"Developer"},"groups":[{"id":"group_id_abc_123","name":"Engineering"}]}`
- `400`: The request could not be processed because it is malformed or conflicts with request rules.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `badRequest`: `{"title":"Bad Request","status":400,"detail":"request could not be processed"}`
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
- `409`: The change would leave the organization without a member in the built-in admin role.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
- `413`: The incoming request body exceeds 1048576 bytes (1 MiB). Body size is checked after authentication and rate limiting. GET and DELETE reject any nonempty request body with `422` instead. An operation can also return this status when the request it expands into is too large, even if the incoming body is within the limit.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `requestTooLarge`: `{"title":"Request Entity Too Large","status":413,"detail":"Request body exceeds the 1048576 byte limit."}`
- `422`: The request body or parameters were syntactically valid but failed validation.
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/problem+json`
    - Schema (object)
      - `title` (required; string): Short human-readable summary
      - `status` (required; integer): HTTP status code
      - `detail` (required; string): Human-readable explanation
      - `errors` (array): Individual request-validation failures.
        - `items` (string)
    - Example `validationFailed`: `{"title":"Unprocessable Entity","status":422,"detail":"Request validation failed."}`
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
