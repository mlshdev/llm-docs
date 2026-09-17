> Pinned source for Docker main: [content/reference/api/ai-governance/index.md](https://github.com/docker/docs/blob/ae6b9eeae1463ed0dc5fd03d3ca5ffd2c29d6383/content/reference/api/ai-governance/index.md)

# Docker AI Governance API

## API specification

**Docker AI Governance Policy API**

- Version: `1`

HTTP+JSON API for managing Docker governance policies and rules.

**Resource model.** An organization owns one or more policies. Each policy
contains a list of rules grouped into a single domain: either `network` or
`filesystem`. A policy's domain is derived from its rule actions; mixing
domains within a single policy is not permitted.

**Lifecycle.** Create a policy with CreatePolicy, then add rules with
CreateRule. Rules can be updated in place with UpdateRule or removed with
DeleteRule. Deleting all rules does not delete the policy itself.

**Rule evaluation.** All rules in a policy are tested against every request.
`deny` always wins: if any rule matches with `decision: deny`, the request
is denied regardless of any `allow` rules.

**Enforcement.** Organization policies take precedence over local sandbox
policies and cannot be overridden by individual users.

**Propagation.** Policy changes take up to five minutes to reach developer
machines after being written.

See <https://docs.docker.com/ai/sandboxes/governance/> for product
documentation.

- Base URL: `https://hub.docker.com/v2`

## Authentication

### `bearerAuth` (http, bearer): Short-lived JWT obtained by exchanging Docker Hub credentials at `POST https://hub.docker.com/v2/auth/token`. Pass the JWT in the `Authorization: Bearer <token>` header. Tokens expire after a short period; request a fresh one when you receive a `401`. The `password` field of the token request accepts any of the following credential types: | Type | Format | Notes | |------|--------|-------| | Password | Plain text | Your Docker Hub account password. | | Personal Access Token (PAT) | `dckr_pat_*` | Recommended over passwords. Create one under Account Settings → Security. | | Organization Access Token (OAT) | `dckr_oat_*` | Scoped to an organization. Create one under Organization Settings → Access Tokens. | PAT and OAT strings can't be used directly as a bearer token. They must be exchanged at the token endpoint first. See [Docker Hub authentication](https://docs.docker.com/reference/api/hub/latest/#tag/authentication-api/operation/AuthCreateAccessToken) for full details.

## Endpoints

### `GET /orgs/{org_name}/governance/policies`

**List policies**

Returns a shallow summary of all policies for the org. The rule set is not included; use GetPolicy to fetch the full object.

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Docker Hub organization name.
  - Example `default`: `my-org`

**Responses**

- `200`: Object wrapping an array of policy summaries under `data`. Rule sets are not included; use GetPolicy to fetch a full policy.
  - Media type: `application/json`
    - Schema (object)
      - `data` (required; array)
        - `items` (object): Shallow policy representation returned by ListPolicies. Excludes the rule set.
          - `id` (required; string)
          - `name` (required; string): Human-readable label, unique within the organization.
          - `org` (required; string)
          - `scope` (required; object): Restricts the policy to specific teams. An empty or absent list means the policy applies org-wide.
            - `teams` (array): Team UUIDs the policy applies to. Each must be a valid team in the org.
              - `items` (string)
          - `created_at` (required; string; format: date-time)
          - `updated_at` (required; string; format: date-time)
          - `type` (required; string): Identifies the rule-set format. Always `allowlist_v0`, corresponding to the `allowlist_v0` property on the full Policy object.
    - Example `default`: `{"data":[{"id":"pol_06evsmp24r1pg71cm8500546pkbn","name":"Security Research — hardened","org":"my-org","scope":{"teams":["d290f1ee-6c54-4b01-90e6-d701748f0851"]},"created_at":"2026-04-22T00:00:00Z","updated_at":"2026-04-22T00:00:00Z","type":"allowlist_v0"}]}`
- `401`: Missing or invalid credentials
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"unauthenticated","message":"unauthenticated"}}`
- `403`: Caller lacks the required permission for this org, or the org is not entitled to use governance.
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"permission_denied","message":"permission denied"}}`
- `404`: Not found
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"not_found","message":"policy not found"}}`
- `500`: Internal server error
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"internal","message":"internal error"}}`

### `POST /orgs/{org_name}/governance/policies`

**Create policy**

Creates a new policy with an empty rule set. Rules are added separately via the rules sub-resource.

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Docker Hub organization name.
  - Example `default`: `my-org`

**Request body** (required): Policy name and optional scope.

- Media type: `application/json`
  - Schema (object): Fields required to create a new policy.
    - `name` (required; string): Policy name, unique within the organization.
    - `scope` (object): Restricts the policy to specific teams. An empty or absent list means the policy applies org-wide.
      - `teams` (array): Team UUIDs the policy applies to. Each must be a valid team in the org.
        - `items` (string)
  - Example `default`: `{"name":"Security Research — hardened","scope":{"teams":["d290f1ee-6c54-4b01-90e6-d701748f0851"]}}`

**Responses**

- `201`: Policy created. Returns the new policy without its rule set.
  - Media type: `application/json`
    - Schema (object): Full policy representation including the allowlist rule set.
      - `id` (required; string)
      - `name` (required; string): Human-readable label, unique within the organization.
      - `org` (required; string)
      - `scope` (required; object): Restricts the policy to specific teams. An empty or absent list means the policy applies org-wide.
        - `teams` (array): Team UUIDs the policy applies to. Each must be a valid team in the org.
          - `items` (string)
      - `created_at` (required; string; format: date-time)
      - `updated_at` (required; string; format: date-time)
      - `allowlist_v0` (object): Network or filesystem allowlist containing a list of rules. Present on Policy when `PolicySummary.type` is `allowlist_v0`; omitted when the policy has no rules yet. All rules in an allowlist share the same domain. All rules are evaluated on every request: `deny` always wins over `allow`.
        - `domain` (string; enum: `network`, `filesystem`): The access-control domain shared by all rules in this allowlist. Derived from rule actions: network actions (`connect:tcp`, `connect:udp`) produce `network`; filesystem actions (`read`, `write`) produce `filesystem`. Present when `rules` is non-empty; absent when the allowlist has no rules.
        - `rules` (required; array)
          - `items` (object): A single allow or deny rule within an allowlist policy.
            - `id` (required; string)
            - `name` (required; string): Human-readable label for the rule.
            - `actions` (required; array; minimum items: `1`): Network actions: `connect:tcp`, `connect:udp`. Filesystem actions: `read`, `write`. All actions in a rule must belong to the same domain; mixing network and filesystem actions in one rule is rejected.
              - `items` (string; enum: `connect:tcp`, `connect:udp`, `read`, `write`)
            - `resources` (required; array; minimum items: `1`): Network domain: hostnames (for example, `example.com`), wildcard subdomains (`*.example.com` or `**.example.com`), hostnames with port (for example, `example.com:443`), or CIDRs in IPv4 or IPv6 notation (for example, `10.0.0.0/8` or `2001:db8::/32`). Filesystem domain: paths (for example, `/data`); `*` matches within one path segment, `**` matches recursively (for example, `/data/**`).
              - `items` (string)
            - `decision` (required; string; enum: `allow`, `deny`): Outcome applied when this rule matches a request. `deny` always wins: if any rule in the policy matches with `decision: deny`, the request is denied even if other rules match with `decision: allow`.
    - Example `default`: `{"id":"pol_06evsmp24r1pg71cm8500546pkbn","name":"Security Research — hardened","org":"my-org","scope":{"teams":["d290f1ee-6c54-4b01-90e6-d701748f0851"]},"created_at":"2026-04-22T00:00:00Z","updated_at":"2026-04-22T00:00:00Z"}`
- `400`: Bad request
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"invalid_argument","message":"name is required"}}`
- `401`: Missing or invalid credentials
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"unauthenticated","message":"unauthenticated"}}`
- `403`: Caller lacks the required permission for this org, the org is not entitled to use governance (`permission_denied`), or a creation limit has been reached (`limit_exceeded`): the org already has the maximum number of policies, or the policy already has the maximum number of rules.
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `permission_denied`: `{"error":{"code":"permission_denied","message":"permission denied"}}`
    - Example `limit_exceeded`: `{"error":{"code":"limit_exceeded","message":"organization has reached the maximum of 100 policies"}}`
- `404`: Not found
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"not_found","message":"policy not found"}}`
- `409`: Conflict
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"conflict","message":"policy name already in use"}}`
- `500`: Internal server error
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"internal","message":"internal error"}}`

### `GET /orgs/{org_name}/governance/policies/{policy_id}`

**Get policy**

Returns the full policy including its `allowlist_v0` rule set.

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Docker Hub organization name.
  - Example `default`: `my-org`
- `policy_id` (path; required; string): Unique policy identifier.
  - Example `default`: `pol_06evsmp24r1pg71cm8500546pkbn`

**Responses**

- `200`: Full policy including its `allowlist_v0` rule set.
  - Media type: `application/json`
    - Schema (object): Full policy representation including the allowlist rule set.
      - `id` (required; string)
      - `name` (required; string): Human-readable label, unique within the organization.
      - `org` (required; string)
      - `scope` (required; object): Restricts the policy to specific teams. An empty or absent list means the policy applies org-wide.
        - `teams` (array): Team UUIDs the policy applies to. Each must be a valid team in the org.
          - `items` (string)
      - `created_at` (required; string; format: date-time)
      - `updated_at` (required; string; format: date-time)
      - `allowlist_v0` (object): Network or filesystem allowlist containing a list of rules. Present on Policy when `PolicySummary.type` is `allowlist_v0`; omitted when the policy has no rules yet. All rules in an allowlist share the same domain. All rules are evaluated on every request: `deny` always wins over `allow`.
        - `domain` (string; enum: `network`, `filesystem`): The access-control domain shared by all rules in this allowlist. Derived from rule actions: network actions (`connect:tcp`, `connect:udp`) produce `network`; filesystem actions (`read`, `write`) produce `filesystem`. Present when `rules` is non-empty; absent when the allowlist has no rules.
        - `rules` (required; array)
          - `items` (object): A single allow or deny rule within an allowlist policy.
            - `id` (required; string)
            - `name` (required; string): Human-readable label for the rule.
            - `actions` (required; array; minimum items: `1`): Network actions: `connect:tcp`, `connect:udp`. Filesystem actions: `read`, `write`. All actions in a rule must belong to the same domain; mixing network and filesystem actions in one rule is rejected.
              - `items` (string; enum: `connect:tcp`, `connect:udp`, `read`, `write`)
            - `resources` (required; array; minimum items: `1`): Network domain: hostnames (for example, `example.com`), wildcard subdomains (`*.example.com` or `**.example.com`), hostnames with port (for example, `example.com:443`), or CIDRs in IPv4 or IPv6 notation (for example, `10.0.0.0/8` or `2001:db8::/32`). Filesystem domain: paths (for example, `/data`); `*` matches within one path segment, `**` matches recursively (for example, `/data/**`).
              - `items` (string)
            - `decision` (required; string; enum: `allow`, `deny`): Outcome applied when this rule matches a request. `deny` always wins: if any rule in the policy matches with `decision: deny`, the request is denied even if other rules match with `decision: allow`.
    - Example `default`: `{"id":"pol_06evsmp24r1pg71cm8500546pkbn","name":"Security Research — hardened","org":"my-org","scope":{"teams":["d290f1ee-6c54-4b01-90e6-d701748f0851"]},"created_at":"2026-04-22T00:00:00Z","updated_at":"2026-04-22T00:00:00Z","allowlist_v0":{"domain":"network","rules":[{"id":"rule_06evsm9qjm1pdsk0a8nkfaxy7jna","name":"allow research mirrors","actions":["connect:tcp","connect:udp"],"resources":["research.mitre.org","cve.mitre.org"],"decision":"allow"}]}}`
- `401`: Missing or invalid credentials
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"unauthenticated","message":"unauthenticated"}}`
- `403`: Caller lacks the required permission for this org, or the org is not entitled to use governance.
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"permission_denied","message":"permission denied"}}`
- `404`: Not found
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"not_found","message":"policy not found"}}`
- `500`: Internal server error
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"internal","message":"internal error"}}`

### `PATCH /orgs/{org_name}/governance/policies/{policy_id}`

**Update policy**

Partially updates a policy's metadata. Only fields present in the
request body are updated; absent fields are left unchanged. The `scope`
object is patched per sub-field: sending `teams` replaces that list,
while an omitted sub-field is left untouched and an empty list clears
it (org-wide).

The rule set is not modified here — use the rule endpoints for that.
At least one field must be present. Returns the policy in both its old
and new states. Changes may take up to five minutes to reach developer
machines.

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Docker Hub organization name.
  - Example `default`: `my-org`
- `policy_id` (path; required; string): Unique policy identifier.
  - Example `default`: `pol_06evsmp24r1pg71cm8500546pkbn`

**Request body** (required): Fields to update. Absent fields are left unchanged.

- Media type: `application/json`
  - Schema (object): Partial update of a policy's metadata. Only fields present in the body are updated; the rule set is not modified here. At least one field must be present.
    - `name` (string; minimum length: `1`): Policy name, unique within the organization.
    - `scope` (object): Per-sub-field patch of a policy's scope. An omitted sub-field is left unchanged; a present list replaces that dimension, and an empty list clears it (making the policy org-wide for that dimension).
      - `teams` (array)
        - `items` (string)
  - Example `rename`: `{"name":"Security Research"}`
  - Example `scope`: `{"scope":{"teams":["d290f1ee-6c54-4b01-90e6-d701748f0851"]}}`

**Responses**

- `200`: Policy updated, returns old and new states.
  - Media type: `application/json`
    - Schema (object): The full policy before and after the update.
      - `old` (required; object): Full policy representation including the allowlist rule set.
        - `id` (required; string)
        - `name` (required; string): Human-readable label, unique within the organization.
        - `org` (required; string)
        - `scope` (required; object): Restricts the policy to specific teams. An empty or absent list means the policy applies org-wide.
          - `teams` (array): Team UUIDs the policy applies to. Each must be a valid team in the org.
            - `items` (string)
        - `created_at` (required; string; format: date-time)
        - `updated_at` (required; string; format: date-time)
        - `allowlist_v0` (object): Network or filesystem allowlist containing a list of rules. Present on Policy when `PolicySummary.type` is `allowlist_v0`; omitted when the policy has no rules yet. All rules in an allowlist share the same domain. All rules are evaluated on every request: `deny` always wins over `allow`.
          - `domain` (string; enum: `network`, `filesystem`): The access-control domain shared by all rules in this allowlist. Derived from rule actions: network actions (`connect:tcp`, `connect:udp`) produce `network`; filesystem actions (`read`, `write`) produce `filesystem`. Present when `rules` is non-empty; absent when the allowlist has no rules.
          - `rules` (required; array)
            - `items` (object): A single allow or deny rule within an allowlist policy.
              - `id` (required; string)
              - `name` (required; string): Human-readable label for the rule.
              - `actions` (required; array; minimum items: `1`): Network actions: `connect:tcp`, `connect:udp`. Filesystem actions: `read`, `write`. All actions in a rule must belong to the same domain; mixing network and filesystem actions in one rule is rejected.
                - `items` (string; enum: `connect:tcp`, `connect:udp`, `read`, `write`)
              - `resources` (required; array; minimum items: `1`): Network domain: hostnames (for example, `example.com`), wildcard subdomains (`*.example.com` or `**.example.com`), hostnames with port (for example, `example.com:443`), or CIDRs in IPv4 or IPv6 notation (for example, `10.0.0.0/8` or `2001:db8::/32`). Filesystem domain: paths (for example, `/data`); `*` matches within one path segment, `**` matches recursively (for example, `/data/**`).
                - `items` (string)
              - `decision` (required; string; enum: `allow`, `deny`): Outcome applied when this rule matches a request. `deny` always wins: if any rule in the policy matches with `decision: deny`, the request is denied even if other rules match with `decision: allow`.
      - `new` (required; object): Full policy representation including the allowlist rule set.
        - `id` (required; string)
        - `name` (required; string): Human-readable label, unique within the organization.
        - `org` (required; string)
        - `scope` (required; object): Restricts the policy to specific teams. An empty or absent list means the policy applies org-wide.
          - `teams` (array): Team UUIDs the policy applies to. Each must be a valid team in the org.
            - `items` (string)
        - `created_at` (required; string; format: date-time)
        - `updated_at` (required; string; format: date-time)
        - `allowlist_v0` (object): Network or filesystem allowlist containing a list of rules. Present on Policy when `PolicySummary.type` is `allowlist_v0`; omitted when the policy has no rules yet. All rules in an allowlist share the same domain. All rules are evaluated on every request: `deny` always wins over `allow`.
          - `domain` (string; enum: `network`, `filesystem`): The access-control domain shared by all rules in this allowlist. Derived from rule actions: network actions (`connect:tcp`, `connect:udp`) produce `network`; filesystem actions (`read`, `write`) produce `filesystem`. Present when `rules` is non-empty; absent when the allowlist has no rules.
          - `rules` (required; array)
            - `items` (object): A single allow or deny rule within an allowlist policy.
              - `id` (required; string)
              - `name` (required; string): Human-readable label for the rule.
              - `actions` (required; array; minimum items: `1`): Network actions: `connect:tcp`, `connect:udp`. Filesystem actions: `read`, `write`. All actions in a rule must belong to the same domain; mixing network and filesystem actions in one rule is rejected.
                - `items` (string; enum: `connect:tcp`, `connect:udp`, `read`, `write`)
              - `resources` (required; array; minimum items: `1`): Network domain: hostnames (for example, `example.com`), wildcard subdomains (`*.example.com` or `**.example.com`), hostnames with port (for example, `example.com:443`), or CIDRs in IPv4 or IPv6 notation (for example, `10.0.0.0/8` or `2001:db8::/32`). Filesystem domain: paths (for example, `/data`); `*` matches within one path segment, `**` matches recursively (for example, `/data/**`).
                - `items` (string)
              - `decision` (required; string; enum: `allow`, `deny`): Outcome applied when this rule matches a request. `deny` always wins: if any rule in the policy matches with `decision: deny`, the request is denied even if other rules match with `decision: allow`.
    - Example `default`: `{"old":{"id":"pol_06evsmp24r1pg71cm8500546pkbn","name":"Security Research — hardened","org":"my-org","scope":{"teams":["d290f1ee-6c54-4b01-90e6-d701748f0851"]},"created_at":"2026-04-22T00:00:00Z","updated_at":"2026-04-22T00:00:00Z","allowlist_v0":{"domain":"network","rules":[{"id":"rule_06evsm9qjm1pdsk0a8nkfaxy7jna","name":"allow research mirrors","actions":["connect:tcp","connect:udp"],"resources":["research.mitre.org","cve.mitre.org"],"decision":"allow"}]}},"new":{"id":"pol_06evsmp24r1pg71cm8500546pkbn","name":"Security Research","org":"my-org","scope":{"teams":["d290f1ee-6c54-4b01-90e6-d701748f0851"]},"created_at":"2026-04-22T00:00:00Z","updated_at":"2026-04-22T10:00:00Z","allowlist_v0":{"domain":"network","rules":[{"id":"rule_06evsm9qjm1pdsk0a8nkfaxy7jna","name":"allow research mirrors","actions":["connect:tcp","connect:udp"],"resources":["research.mitre.org","cve.mitre.org"],"decision":"allow"}]}}}`
- `400`: Bad request
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"invalid_argument","message":"name is required"}}`
- `401`: Missing or invalid credentials
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"unauthenticated","message":"unauthenticated"}}`
- `403`: Caller lacks the required permission for this org, the org is not entitled to use governance (`permission_denied`), or a creation limit has been reached (`limit_exceeded`): the org already has the maximum number of policies, or the policy already has the maximum number of rules.
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `permission_denied`: `{"error":{"code":"permission_denied","message":"permission denied"}}`
    - Example `limit_exceeded`: `{"error":{"code":"limit_exceeded","message":"organization has reached the maximum of 100 policies"}}`
- `404`: Not found
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"not_found","message":"policy not found"}}`
- `409`: Conflict
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"conflict","message":"policy name already in use"}}`
- `500`: Internal server error
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"internal","message":"internal error"}}`

### `DELETE /orgs/{org_name}/governance/policies/{policy_id}`

**Delete policy**

Permanently deletes the policy and its rule set. Returns the deleted
policy as a courtesy; its `updated_at` is unchanged by the deletion.
Changes may take up to five minutes to reach developer machines.

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Docker Hub organization name.
  - Example `default`: `my-org`
- `policy_id` (path; required; string): Unique policy identifier.
  - Example `default`: `pol_06evsmp24r1pg71cm8500546pkbn`

**Responses**

- `200`: Policy deleted, returns the deleted policy.
  - Media type: `application/json`
    - Schema (object): The full deleted policy.
      - `deleted` (required; object): Full policy representation including the allowlist rule set.
        - `id` (required; string)
        - `name` (required; string): Human-readable label, unique within the organization.
        - `org` (required; string)
        - `scope` (required; object): Restricts the policy to specific teams. An empty or absent list means the policy applies org-wide.
          - `teams` (array): Team UUIDs the policy applies to. Each must be a valid team in the org.
            - `items` (string)
        - `created_at` (required; string; format: date-time)
        - `updated_at` (required; string; format: date-time)
        - `allowlist_v0` (object): Network or filesystem allowlist containing a list of rules. Present on Policy when `PolicySummary.type` is `allowlist_v0`; omitted when the policy has no rules yet. All rules in an allowlist share the same domain. All rules are evaluated on every request: `deny` always wins over `allow`.
          - `domain` (string; enum: `network`, `filesystem`): The access-control domain shared by all rules in this allowlist. Derived from rule actions: network actions (`connect:tcp`, `connect:udp`) produce `network`; filesystem actions (`read`, `write`) produce `filesystem`. Present when `rules` is non-empty; absent when the allowlist has no rules.
          - `rules` (required; array)
            - `items` (object): A single allow or deny rule within an allowlist policy.
              - `id` (required; string)
              - `name` (required; string): Human-readable label for the rule.
              - `actions` (required; array; minimum items: `1`): Network actions: `connect:tcp`, `connect:udp`. Filesystem actions: `read`, `write`. All actions in a rule must belong to the same domain; mixing network and filesystem actions in one rule is rejected.
                - `items` (string; enum: `connect:tcp`, `connect:udp`, `read`, `write`)
              - `resources` (required; array; minimum items: `1`): Network domain: hostnames (for example, `example.com`), wildcard subdomains (`*.example.com` or `**.example.com`), hostnames with port (for example, `example.com:443`), or CIDRs in IPv4 or IPv6 notation (for example, `10.0.0.0/8` or `2001:db8::/32`). Filesystem domain: paths (for example, `/data`); `*` matches within one path segment, `**` matches recursively (for example, `/data/**`).
                - `items` (string)
              - `decision` (required; string; enum: `allow`, `deny`): Outcome applied when this rule matches a request. `deny` always wins: if any rule in the policy matches with `decision: deny`, the request is denied even if other rules match with `decision: allow`.
    - Example `default`: `{"deleted":{"id":"pol_06evsmp24r1pg71cm8500546pkbn","name":"Security Research — hardened","org":"my-org","scope":{"teams":["d290f1ee-6c54-4b01-90e6-d701748f0851"]},"created_at":"2026-04-22T00:00:00Z","updated_at":"2026-04-22T00:00:00Z","allowlist_v0":{"domain":"network","rules":[{"id":"rule_06evsm9qjm1pdsk0a8nkfaxy7jna","name":"allow research mirrors","actions":["connect:tcp","connect:udp"],"resources":["research.mitre.org","cve.mitre.org"],"decision":"allow"}]}}}`
- `401`: Missing or invalid credentials
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"unauthenticated","message":"unauthenticated"}}`
- `403`: Caller lacks the required permission for this org, or the org is not entitled to use governance.
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"permission_denied","message":"permission denied"}}`
- `404`: Not found
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"not_found","message":"policy not found"}}`
- `500`: Internal server error
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"internal","message":"internal error"}}`

### `POST /orgs/{org_name}/governance/policies/{policy_id}/rules`

**Create rule**

Adds a rule to the policy's rule set. All rules in a policy must share
the same domain (network or filesystem); mixing domains is rejected.

**Network** actions: `connect:tcp`, `connect:udp`. Resources are
hostnames (for example, `example.com`), wildcard subdomains (`*.example.com`
for one level, `**.example.com` for any depth), hostnames with an optional
port (for example, `example.com:443`), or CIDRs in IPv4 or IPv6 notation
(for example, `10.0.0.0/8` or `2001:db8::/32`).

**Filesystem** actions: `read`, `write`. Resources are paths (for example,
`/data`). Use `*` to match within a single path segment and `**` to match
recursively across segments (for example, `/data/**`).

Changes may take up to five minutes to reach developer machines.

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Docker Hub organization name.
  - Example `default`: `my-org`
- `policy_id` (path; required; string): Unique policy identifier.
  - Example `default`: `pol_06evsmp24r1pg71cm8500546pkbn`

**Request body** (required): Rule definition including actions, resources, and decision.

- Media type: `application/json`
  - Schema (object): Fields required to create a new rule within a policy's rule set.
    - `name` (required; string): Human-readable label for the rule.
    - `actions` (required; array; minimum items: `1`): Network actions: `connect:tcp`, `connect:udp`. Filesystem actions: `read`, `write`. All actions in a rule must belong to the same domain; mixing network and filesystem actions in one rule is rejected.
      - `items` (string; enum: `connect:tcp`, `connect:udp`, `read`, `write`)
    - `resources` (required; array; minimum items: `1`): Network domain: hostnames (for example, `example.com`), wildcard subdomains (`*.example.com` or `**.example.com`), hostnames with port (for example, `example.com:443`), or CIDRs in IPv4 or IPv6 notation (for example, `10.0.0.0/8` or `2001:db8::/32`). Filesystem domain: paths (for example, `/data`); `*` matches within one path segment, `**` matches recursively (for example, `/data/**`).
      - `items` (string)
    - `decision` (required; string; enum: `allow`, `deny`): Outcome applied when this rule matches a request. `deny` always wins: if any rule in the policy matches with `decision: deny`, the request is denied even if other rules match with `decision: allow`.
  - Example `network`: `{"name":"allow research mirrors","actions":["connect:tcp","connect:udp"],"resources":["research.mitre.org","cve.mitre.org"],"decision":"allow"}`
  - Example `filesystem`: `{"name":"allow data directory","actions":["read","write"],"resources":["/data"],"decision":"allow"}`

**Responses**

- `201`: Rule created and added to the policy's rule set.
  - Media type: `application/json`
    - Schema (object): A single allow or deny rule within an allowlist policy.
      - `id` (required; string)
      - `name` (required; string): Human-readable label for the rule.
      - `actions` (required; array; minimum items: `1`): Network actions: `connect:tcp`, `connect:udp`. Filesystem actions: `read`, `write`. All actions in a rule must belong to the same domain; mixing network and filesystem actions in one rule is rejected.
        - `items` (string; enum: `connect:tcp`, `connect:udp`, `read`, `write`)
      - `resources` (required; array; minimum items: `1`): Network domain: hostnames (for example, `example.com`), wildcard subdomains (`*.example.com` or `**.example.com`), hostnames with port (for example, `example.com:443`), or CIDRs in IPv4 or IPv6 notation (for example, `10.0.0.0/8` or `2001:db8::/32`). Filesystem domain: paths (for example, `/data`); `*` matches within one path segment, `**` matches recursively (for example, `/data/**`).
        - `items` (string)
      - `decision` (required; string; enum: `allow`, `deny`): Outcome applied when this rule matches a request. `deny` always wins: if any rule in the policy matches with `decision: deny`, the request is denied even if other rules match with `decision: allow`.
    - Example `network`: `{"id":"rule_06evsm9qjm1pdsk0a8nkfaxy7jna","name":"allow research mirrors","actions":["connect:tcp","connect:udp"],"resources":["research.mitre.org","cve.mitre.org"],"decision":"allow"}`
    - Example `filesystem`: `{"id":"rule_07fwtnr0kn2qetl1b9olfbyz8kob","name":"allow data directory","actions":["read","write"],"resources":["/data"],"decision":"allow"}`
- `400`: Bad request
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"invalid_argument","message":"name is required"}}`
- `401`: Missing or invalid credentials
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"unauthenticated","message":"unauthenticated"}}`
- `403`: Caller lacks the required permission for this org, the org is not entitled to use governance (`permission_denied`), or a creation limit has been reached (`limit_exceeded`): the org already has the maximum number of policies, or the policy already has the maximum number of rules.
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `permission_denied`: `{"error":{"code":"permission_denied","message":"permission denied"}}`
    - Example `limit_exceeded`: `{"error":{"code":"limit_exceeded","message":"organization has reached the maximum of 100 policies"}}`
- `404`: Not found
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"not_found","message":"policy not found"}}`
- `409`: Conflict
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"conflict","message":"policy name already in use"}}`
- `500`: Internal server error
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"internal","message":"internal error"}}`

### `PATCH /orgs/{org_name}/governance/policies/{policy_id}/rules/{rule_id}`

**Update rule**

Partially updates a rule. Only fields present in the request body are
updated; absent fields are left unchanged. Returns the rule in both its
old and new states.

Changing `actions` across domains (for example, from network actions to
filesystem actions) is rejected. Changes may take up to five minutes to
reach developer machines.

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Docker Hub organization name.
  - Example `default`: `my-org`
- `policy_id` (path; required; string): Unique policy identifier.
  - Example `default`: `pol_06evsmp24r1pg71cm8500546pkbn`
- `rule_id` (path; required; string): Unique rule identifier within the policy.
  - Example `default`: `rule_06evsm9qjm1pdsk0a8nkfaxy7jna`

**Request body** (required): Fields to update. Absent fields are left unchanged.

- Media type: `application/json`
  - Schema (object): Partial update. Only fields present in the body are updated; absent fields are left unchanged.
    - `name` (string): Human-readable label for the rule.
    - `actions` (array; minimum items: `1`): Network actions: `connect:tcp`, `connect:udp`. Filesystem actions: `read`, `write`. All actions in a rule must belong to the same domain; mixing network and filesystem actions in one rule is rejected.
      - `items` (string; enum: `connect:tcp`, `connect:udp`, `read`, `write`)
    - `resources` (array; minimum items: `1`): Network domain: hostnames (for example, `example.com`), wildcard subdomains (`*.example.com` or `**.example.com`), hostnames with port (for example, `example.com:443`), or CIDRs in IPv4 or IPv6 notation (for example, `10.0.0.0/8` or `2001:db8::/32`). Filesystem domain: paths (for example, `/data`); `*` matches within one path segment, `**` matches recursively (for example, `/data/**`).
      - `items` (string)
    - `decision` (string; enum: `allow`, `deny`): Outcome applied when this rule matches a request. `deny` always wins: if any rule in the policy matches with `decision: deny`, the request is denied even if other rules match with `decision: allow`.
  - Example `default`: `{"resources":["research.mitre.org"]}`

**Responses**

- `200`: Rule updated, returns old and new states.
  - Media type: `application/json`
    - Schema (object): The rule state before and after the update.
      - `old` (required; object): A single allow or deny rule within an allowlist policy.
        - `id` (required; string)
        - `name` (required; string): Human-readable label for the rule.
        - `actions` (required; array; minimum items: `1`): Network actions: `connect:tcp`, `connect:udp`. Filesystem actions: `read`, `write`. All actions in a rule must belong to the same domain; mixing network and filesystem actions in one rule is rejected.
          - `items` (string; enum: `connect:tcp`, `connect:udp`, `read`, `write`)
        - `resources` (required; array; minimum items: `1`): Network domain: hostnames (for example, `example.com`), wildcard subdomains (`*.example.com` or `**.example.com`), hostnames with port (for example, `example.com:443`), or CIDRs in IPv4 or IPv6 notation (for example, `10.0.0.0/8` or `2001:db8::/32`). Filesystem domain: paths (for example, `/data`); `*` matches within one path segment, `**` matches recursively (for example, `/data/**`).
          - `items` (string)
        - `decision` (required; string; enum: `allow`, `deny`): Outcome applied when this rule matches a request. `deny` always wins: if any rule in the policy matches with `decision: deny`, the request is denied even if other rules match with `decision: allow`.
      - `new` (required; object): A single allow or deny rule within an allowlist policy.
        - `id` (required; string)
        - `name` (required; string): Human-readable label for the rule.
        - `actions` (required; array; minimum items: `1`): Network actions: `connect:tcp`, `connect:udp`. Filesystem actions: `read`, `write`. All actions in a rule must belong to the same domain; mixing network and filesystem actions in one rule is rejected.
          - `items` (string; enum: `connect:tcp`, `connect:udp`, `read`, `write`)
        - `resources` (required; array; minimum items: `1`): Network domain: hostnames (for example, `example.com`), wildcard subdomains (`*.example.com` or `**.example.com`), hostnames with port (for example, `example.com:443`), or CIDRs in IPv4 or IPv6 notation (for example, `10.0.0.0/8` or `2001:db8::/32`). Filesystem domain: paths (for example, `/data`); `*` matches within one path segment, `**` matches recursively (for example, `/data/**`).
          - `items` (string)
        - `decision` (required; string; enum: `allow`, `deny`): Outcome applied when this rule matches a request. `deny` always wins: if any rule in the policy matches with `decision: deny`, the request is denied even if other rules match with `decision: allow`.
    - Example `default`: `{"old":{"id":"rule_06evsm9qjm1pdsk0a8nkfaxy7jna","name":"allow research mirrors","actions":["connect:tcp","connect:udp"],"resources":["research.mitre.org","cve.mitre.org"],"decision":"allow"},"new":{"id":"rule_06evsm9qjm1pdsk0a8nkfaxy7jna","name":"allow research mirrors","actions":["connect:tcp","connect:udp"],"resources":["research.mitre.org"],"decision":"allow"}}`
- `400`: Bad request
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"invalid_argument","message":"name is required"}}`
- `401`: Missing or invalid credentials
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"unauthenticated","message":"unauthenticated"}}`
- `403`: Caller lacks the required permission for this org, or the org is not entitled to use governance.
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"permission_denied","message":"permission denied"}}`
- `404`: Not found
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"not_found","message":"policy not found"}}`
- `409`: Conflict
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"conflict","message":"policy name already in use"}}`
- `500`: Internal server error
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"internal","message":"internal error"}}`

### `DELETE /orgs/{org_name}/governance/policies/{policy_id}/rules/{rule_id}`

**Delete rule**

Deletes a rule from the policy. Returns the deleted rule. Changes may
take up to five minutes to reach developer machines.

**Authentication:** `bearerAuth`

**Parameters**

- `org_name` (path; required; string): Docker Hub organization name.
  - Example `default`: `my-org`
- `policy_id` (path; required; string): Unique policy identifier.
  - Example `default`: `pol_06evsmp24r1pg71cm8500546pkbn`
- `rule_id` (path; required; string): Unique rule identifier within the policy.
  - Example `default`: `rule_06evsm9qjm1pdsk0a8nkfaxy7jna`

**Responses**

- `200`: Rule deleted, returns the deleted rule.
  - Media type: `application/json`
    - Schema (object): The deleted rule.
      - `deleted` (required; object): A single allow or deny rule within an allowlist policy.
        - `id` (required; string)
        - `name` (required; string): Human-readable label for the rule.
        - `actions` (required; array; minimum items: `1`): Network actions: `connect:tcp`, `connect:udp`. Filesystem actions: `read`, `write`. All actions in a rule must belong to the same domain; mixing network and filesystem actions in one rule is rejected.
          - `items` (string; enum: `connect:tcp`, `connect:udp`, `read`, `write`)
        - `resources` (required; array; minimum items: `1`): Network domain: hostnames (for example, `example.com`), wildcard subdomains (`*.example.com` or `**.example.com`), hostnames with port (for example, `example.com:443`), or CIDRs in IPv4 or IPv6 notation (for example, `10.0.0.0/8` or `2001:db8::/32`). Filesystem domain: paths (for example, `/data`); `*` matches within one path segment, `**` matches recursively (for example, `/data/**`).
          - `items` (string)
        - `decision` (required; string; enum: `allow`, `deny`): Outcome applied when this rule matches a request. `deny` always wins: if any rule in the policy matches with `decision: deny`, the request is denied even if other rules match with `decision: allow`.
    - Example `default`: `{"deleted":{"id":"rule_06evsm9qjm1pdsk0a8nkfaxy7jna","name":"allow research mirrors","actions":["connect:tcp","connect:udp"],"resources":["research.mitre.org","cve.mitre.org"],"decision":"allow"}}`
- `401`: Missing or invalid credentials
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"unauthenticated","message":"unauthenticated"}}`
- `403`: Caller lacks the required permission for this org, or the org is not entitled to use governance.
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"permission_denied","message":"permission denied"}}`
- `404`: Not found
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"not_found","message":"policy not found"}}`
- `500`: Internal server error
  - Media type: `application/json`
    - Schema (object): Error envelope returned on all non-2xx responses.
      - `error` (required; object): Error detail.
        - `code` (required; string; enum: `not_found`, `conflict`, `invalid_argument`, `unauthenticated`, `permission_denied`, `limit_exceeded`, `unimplemented`, `internal`): Machine-readable error code. `not_found`: the requested resource does not exist, the org does not exist, or the caller is not a member of the org (the org's existence is not revealed to callers who cannot access it). `conflict`: a resource with the same name already exists. `invalid_argument`: the request body is malformed or fails validation. `unauthenticated`: missing or invalid credentials. `permission_denied`: the org is not entitled to use governance. `limit_exceeded`: the org has reached its maximum number of policies, or the policy has reached its maximum number of rules. `unimplemented`: the endpoint or feature is not yet available. `internal`: unexpected server error.
        - `message` (required; string)
    - Example `default`: `{"error":{"code":"internal","message":"internal error"}}`
