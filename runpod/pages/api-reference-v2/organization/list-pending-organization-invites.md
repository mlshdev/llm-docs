> Pinned source for Runpod main: [api-reference-v2/organization/list-pending-organization-invites.mdx](https://github.com/runpod/docs/blob/b3d94eb34607d1c8be2215f891c34b55b0a5df24/api-reference-v2/organization/list-pending-organization-invites.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/organization/list-pending-organization-invites

# List Pending Organization Invites

List the pending invitations to your organization.

`GET /v2/organization/invites`

**List pending organization invites**

Returns the pending invitations to the authenticated caller's organization, newest first. Only unexpired invites are pending: an invite leaves the list once it is accepted, revoked or expired. The list is complete and takes no pagination parameters, because an organization's pending invites are capped. Reading invites requires the organization's invite-management capability, which the built-in admin role holds; other members receive 403. Returns 404 when the caller does not belong to an organization, or 403 when organizations are unavailable to the caller.

**Authentication:** `bearerAuth`

**Responses**

- `200`: OK
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/json`
    - Schema (object)
      - `invites` (required; array): Pending invites, newest first.
        - `items` (object): A pending invitation to join the caller's organization. An invite stops being listed once it is accepted, revoked or expired.
          - `id` (required; string): Invite ID.
          - `email` (required; string): Email address the invitation was sent to. The invitee accepts by signing in with a verified account on this address.
          - `role` (required; object): An organization role, by ID and display name.
            - `id` (required; string): Role ID. A built-in role's ID is `builtin:` followed by its key; a custom role carries its own ID.
            - `type` (required; string; enum: `builtin`, `custom`): Who defines the role. `builtin` roles are Runpod's: `builtin:admin`, `builtin:dev`, `builtin:billing` and `builtin:basic`. A `custom` role is one the organization defined, under its own ID.
            - `name` (required; string): The role's display name: `Admin`, `Developer`, `Billing` or `Contributor` for a built-in role, or a custom role's own name. A custom role that has since been deleted reads as `Contributor` while `id` keeps its own ID.
          - `createdAt` (required; string; format: date-time): When the invite was sent.
          - `expiresAt` (required; string; format: date-time): When the invite can no longer be accepted.
    - Example `invites`: `{"invites":[{"id":"invite_id_abc_123","email":"new-member@example.com","role":{"id":"builtin:dev","type":"builtin","name":"Developer"},"createdAt":"2026-10-01T09:00:00Z","expiresAt":"2026-10-15T09:00:00Z"}]}`
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
