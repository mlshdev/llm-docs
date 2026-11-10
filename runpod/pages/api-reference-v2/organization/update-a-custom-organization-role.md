> Pinned source for Runpod main: [api-reference-v2/organization/update-a-custom-organization-role.mdx](https://github.com/runpod/docs/blob/eba1be5cd1f4af9e764b2f65145197430e9ba0ad/api-reference-v2/organization/update-a-custom-organization-role.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/organization/update-a-custom-organization-role

# Update A Custom Organization Role

Rename a custom role in your organization or replace the capabilities it grants.

`PATCH /v2/organization/roles/{id}`

**Update a custom organization role**

Changes a custom role's name, its capabilities, or both, and returns the role. Sent capabilities replace the whole grant set. Returns 400 for a built-in role, which cannot be changed; 404 when the ID is unknown or names another organization's role; 403 when the caller does not hold every capability the role grants, before or after the change; 409 when the organization already has a role with the new name; and 422 when a capability is unknown or the name is reserved. Updating roles requires the organization's role-management capability, which the built-in admin role holds; other members, and callers outside an organization, receive 403, as does a caller for whom organizations are unavailable.

**Authentication:** `bearerAuth`

**Parameters**

- `id` (path; required; string): Role identifier
  - Example: `cmcustomrole0001`

**Request body** (required)

- Media type: `application/json`
  - Schema (object): The fields to change; omitted fields are unchanged. `capabilities` replaces the role's whole grant set rather than adding to it.
    - `name` (string; minimum length: `1`; maximum length: `191`; pattern: `[^\t-\r  - ]`): Display name, 1–191 characters with at least one non-whitespace character. Leading and trailing whitespace is trimmed. It must be unique within the organization and cannot be a built-in role's name.
    - `capabilities` (array; minimum items: `1`; unique items): What the role grants, as `FAMILY:VERB` capabilities from `GET /v2/organization/roles/capabilities`. The caller must hold every capability it lists.
      - `items` (string; pattern: `^[A-Z0-9_]+:[A-Z0-9_]+$`)
  - Example `rename`: `{"name":"Pod operator"}`
  - Example `capabilities`: `{"capabilities":["POD:USE","POD:VIEW"]}`

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
    - Example `role`: `{"id":"cmcustomrole0001","name":"Pod operator","type":"custom","capabilities":["POD:USE","POD:VIEW"],"createdAt":"2026-10-01T09:00:00Z","updatedAt":"2026-10-03T09:00:00Z"}`
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
- `409`: The organization already has a role with this name.
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
