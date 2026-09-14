> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/team/roles/{name}](https://docs.vast.ai/api-reference/team/show-team-role)

# show team role

`GET /api/v0/team/roles/{name}`

Retrieve details of a specific team role by its name.

CLI Usage: `vastai show team-role <name>`

**Parameters**

- `name` (path, required): Name of the team role

**Responses**

- `200`: Success response
- `404`: Role not found
