> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/team/roles/{name}](https://docs.vast.ai/api-reference/team/remove-team-role)

# remove team role

`DELETE /api/v0/team/roles/{name}`

Removes a role from the team. Cannot remove the team owner role.

CLI Usage: `vastai remove team-role <name>`

**Parameters**

- `name` (path, required): Name of the role to remove

**Responses**

- `200`: Role removed successfully
- `400`: Bad request - role name is required
- `401`: Unauthorized - invalid or missing API key
- `403`: Forbidden - cannot delete owner role or user is blacklisted
- `404`: Role not found
