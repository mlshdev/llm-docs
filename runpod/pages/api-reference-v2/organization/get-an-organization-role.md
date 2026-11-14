> Pinned source for Runpod main: [api-reference-v2/organization/get-an-organization-role.mdx](https://github.com/runpod/docs/blob/badc3b0885d17c76062faf033073f6d062af3aee/api-reference-v2/organization/get-an-organization-role.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/organization/get-an-organization-role

# Get An Organization Role

Get one built-in or custom role by ID, with the capabilities it grants.

`GET /v2/organization/roles/{id}`

**Get an organization role**

Returns one role a member or invite of the authenticated caller's organization can hold: a built-in role, or one of the organization's custom roles. Returns 404 when the ID is unknown or names another organization's custom role, or when the caller does not belong to an organization; 403 when the caller may not view the organization's roles or organizations are unavailable to the caller.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string): Role identifier
  - Example: `cmcustomrole0001`

**Responses**

- `200`: OK
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/json`
    - Schema: A role an organization member or invite can hold: one of Runpod's built-in roles, or a custom role the organization defined.
      - oneOf:
        - `variant 1` (object): A role Runpod defines. Built-in roles cannot be changed.
          - `id` (required; string): Role ID, `builtin:` followed by the role's key.
          - `name` (required; string): Display name.
          - `type` (required; string; enum: `builtin`): Always `builtin` for this variant.
          - `capabilities` (required; array): What the role grants, as `FAMILY:VERB` capabilities, sorted. A member's effective access can also include account-level access that no role grants.
            - `items` (string)
        - `variant 2` (object): A role the caller's organization defined.
          - `id` (required; string): Role ID.
          - `name` (required; string): Display name, unique within the organization.
          - `type` (required; string; enum: `custom`): Always `custom` for this variant.
          - `capabilities` (required; array): What the role grants, as `FAMILY:VERB` capabilities, sorted. A member's effective access can also include account-level access that no role grants.
            - `items` (string)
          - `createdAt` (required; string; format: date-time): When the role was created.
          - `updatedAt` (required; string; format: date-time): When the role last changed. Assigning the role to a member or invite can also move it.
    - Example `custom`: `{"id":"cmcustomrole0001","name":"Pod viewer","type":"custom","capabilities":["POD:VIEW"],"createdAt":"2026-10-01T09:00:00Z","updatedAt":"2026-10-02T09:00:00Z"}`
    - Example `builtin`: `{"id":"builtin:dev","name":"Dev","type":"builtin","capabilities":["POD:CREATE","POD:VIEW"]}`
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
