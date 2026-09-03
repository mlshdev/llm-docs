> Commit-pinned source for Docker main: [content/reference/api/ai-governance/index.md](https://github.com/docker/docs/blob/b744dd31039efeac59c11e017ac6ab62d9077339/content/reference/api/ai-governance/index.md)

# Docker AI Governance API

## API specification

- Version: `1`

- Base URL: `https://hub.docker.com/v2`

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

## Authentication

### `bearerAuth` (http, bearer)

Short-lived JWT obtained by exchanging Docker Hub credentials at
`POST https://hub.docker.com/v2/auth/token`. Pass the JWT in the
`Authorization: Bearer <token>` header. Tokens expire after a short
period; request a fresh one when you receive a `401`.

The `password` field of the token request accepts any of the following
credential types:

| Type                            | Format       | Notes                                                                              |
| ------------------------------- | ------------ | ---------------------------------------------------------------------------------- |
| Password                        | Plain text   | Your Docker Hub account password.                                                  |
| Personal Access Token (PAT)     | `dckr_pat_*` | Recommended over passwords. Create one under Account Settings → Security.          |
| Organization Access Token (OAT) | `dckr_oat_*` | Scoped to an organization. Create one under Organization Settings → Access Tokens. |

PAT and OAT strings can't be used directly as a bearer token. They must
be exchanged at the token endpoint first.

See [Docker Hub authentication](https://docs.docker.com/reference/api/hub/latest/#tag/authentication-api/operation/AuthCreateAccessToken)
for full details.

## Endpoints

### `GET /orgs/{org_name}/governance/policies`

**List policies**

Returns a shallow summary of all policies for the org. The rule set is not included; use GetPolicy to fetch the full object.

**Parameters**

- `org_name` (path, required): Docker Hub organization name.

**Responses**

- `200`: Object wrapping an array of policy summaries under `data`. Rule sets are not included; use GetPolicy to fetch a full policy.
- `401`: Missing or invalid credentials
- `403`: Caller lacks the required permission for this org, or the org is not entitled to use governance.
- `404`: Not found
- `500`: Internal server error

### `POST /orgs/{org_name}/governance/policies`

**Create policy**

Creates a new policy with an empty rule set. Rules are added separately via the rules sub-resource.

**Parameters**

- `org_name` (path, required): Docker Hub organization name.

**Request body**: Policy name and optional scope.

**Responses**

- `201`: Policy created. Returns the new policy without its rule set.
- `400`: Bad request
- `401`: Missing or invalid credentials
- `403`: Caller lacks the required permission for this org, the org is not entitled to use governance (`permission_denied`), or a creation limit has been reached (`limit_exceeded`): the org already has the maximum number of policies, or the policy already has the maximum number of rules.
- `404`: Not found
- `409`: Conflict
- `500`: Internal server error

### `GET /orgs/{org_name}/governance/policies/{policy_id}`

**Get policy**

Returns the full policy including its `allowlist_v0` rule set.

**Parameters**

- `org_name` (path, required): Docker Hub organization name.
- `policy_id` (path, required): Unique policy identifier.

**Responses**

- `200`: Full policy including its `allowlist_v0` rule set.
- `401`: Missing or invalid credentials
- `403`: Caller lacks the required permission for this org, or the org is not entitled to use governance.
- `404`: Not found
- `500`: Internal server error

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

**Parameters**

- `org_name` (path, required): Docker Hub organization name.
- `policy_id` (path, required): Unique policy identifier.

**Request body**: Fields to update. Absent fields are left unchanged.

**Responses**

- `200`: Policy updated, returns old and new states.
- `400`: Bad request
- `401`: Missing or invalid credentials
- `403`: Caller lacks the required permission for this org, the org is not entitled to use governance (`permission_denied`), or a creation limit has been reached (`limit_exceeded`): the org already has the maximum number of policies, or the policy already has the maximum number of rules.
- `404`: Not found
- `409`: Conflict
- `500`: Internal server error

### `DELETE /orgs/{org_name}/governance/policies/{policy_id}`

**Delete policy**

Permanently deletes the policy and its rule set. Returns the deleted
policy as a courtesy; its `updated_at` is unchanged by the deletion.
Changes may take up to five minutes to reach developer machines.

**Parameters**

- `org_name` (path, required): Docker Hub organization name.
- `policy_id` (path, required): Unique policy identifier.

**Responses**

- `200`: Policy deleted, returns the deleted policy.
- `401`: Missing or invalid credentials
- `403`: Caller lacks the required permission for this org, or the org is not entitled to use governance.
- `404`: Not found
- `500`: Internal server error

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

**Parameters**

- `org_name` (path, required): Docker Hub organization name.
- `policy_id` (path, required): Unique policy identifier.

**Request body**: Rule definition including actions, resources, and decision.

**Responses**

- `201`: Rule created and added to the policy's rule set.
- `400`: Bad request
- `401`: Missing or invalid credentials
- `403`: Caller lacks the required permission for this org, the org is not entitled to use governance (`permission_denied`), or a creation limit has been reached (`limit_exceeded`): the org already has the maximum number of policies, or the policy already has the maximum number of rules.
- `404`: Not found
- `409`: Conflict
- `500`: Internal server error

### `PATCH /orgs/{org_name}/governance/policies/{policy_id}/rules/{rule_id}`

**Update rule**

Partially updates a rule. Only fields present in the request body are
updated; absent fields are left unchanged. Returns the rule in both its
old and new states.

Changing `actions` across domains (for example, from network actions to
filesystem actions) is rejected. Changes may take up to five minutes to
reach developer machines.

**Parameters**

- `org_name` (path, required): Docker Hub organization name.
- `policy_id` (path, required): Unique policy identifier.
- `rule_id` (path, required): Unique rule identifier within the policy.

**Request body**: Fields to update. Absent fields are left unchanged.

**Responses**

- `200`: Rule updated, returns old and new states.
- `400`: Bad request
- `401`: Missing or invalid credentials
- `403`: Caller lacks the required permission for this org, or the org is not entitled to use governance.
- `404`: Not found
- `409`: Conflict
- `500`: Internal server error

### `DELETE /orgs/{org_name}/governance/policies/{policy_id}/rules/{rule_id}`

**Delete rule**

Deletes a rule from the policy. Returns the deleted rule. Changes may
take up to five minutes to reach developer machines.

**Parameters**

- `org_name` (path, required): Docker Hub organization name.
- `policy_id` (path, required): Unique policy identifier.
- `rule_id` (path, required): Unique rule identifier within the policy.

**Responses**

- `200`: Rule deleted, returns the deleted rule.
- `401`: Missing or invalid credentials
- `403`: Caller lacks the required permission for this org, or the org is not entitled to use governance.
- `404`: Not found
- `500`: Internal server error
