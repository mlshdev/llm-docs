> Pinned source for Runpod main: [api-reference-v2/organization/list-grantable-role-capabilities.mdx](https://github.com/runpod/docs/blob/93f2147761903839f4a2b3e595117f4f20fd9a89/api-reference-v2/organization/list-grantable-role-capabilities.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference-v2/organization/list-grantable-role-capabilities

# List Grantable Role Capabilities

List the capabilities a custom role in your organization can grant.

`GET /v2/organization/roles/capabilities`

**List grantable role capabilities**

Returns the capabilities a custom role can grant, grouped by family: each capability is a family and one of its verbs, written `FAMILY:VERB`. This is the set role creation accepts, not filtered to the caller's own access; saving a role also requires the caller to hold every capability it grants. `family` and `verb` narrow the result and apply together; with neither, the whole catalog is returned. Reading the catalog requires organization membership; other callers receive 403.

**Authentication:** `bearerAuth`

**Parameters**

- `family` (query; array): Only return these capability families, matched exactly. Comma-separated; a family matching any listed value is returned. An empty value is ignored.
  - Example: `["POD","ENDPOINT"]`
- `verb` (query; array): Only return these verbs, matched exactly. Comma-separated. Each family lists only the requested verbs it has, and a family with none of them is left out. An empty value is ignored.
  - Example: `["VIEW","USE"]`

**Responses**

- `200`: OK
  - Header `RateLimit` (string): Live quota state for the caller, per the IETF ratelimit-headers draft.
  - Header `RateLimit-Policy` (string): The quota policy behind `RateLimit`, per the IETF ratelimit-headers draft.
  - Media type: `application/json`
    - Schema (object): The capabilities a custom role can grant.
      - `version` (required; integer): Major version of the capability catalog.
      - `families` (required; array): Capability families, in catalog order.
        - `items` (object)
          - `family` (required; string): What the capability applies to. A capability is written `FAMILY:VERB`, e.g. `POD:VIEW`.
          - `verbs` (required; array): The verbs a custom role can grant on this family, in catalog order.
            - `items` (string)
    - Example `catalog`: `{"version":1,"families":[{"family":"POD","verbs":["VIEW"]},{"family":"ENDPOINT","verbs":["VIEW"]}]}`
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
