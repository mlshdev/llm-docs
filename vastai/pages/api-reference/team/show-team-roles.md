> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/team/roles-full](https://docs.vast.ai/api-reference/team/show-team-roles)

# show team roles

`GET /api/v0/team/roles-full`

Retrieve a list of all roles for a team, excluding the owner' role.

CLI Usage: `vastai show team-roles`

**Responses**

- `200`: Success response
- `401`: Unauthorized
- `404`: Invalid API key
