> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/team/roles/{name}](https://docs.vast.ai/api-reference/team/update-team-role)

# update team role

`PUT /api/v0/team/roles/{name}`

Update an existing team role with new name and permissions.

CLI Usage: `vastai update team-role <id> --name <new_name> --permissions <new_permissions_json>`

**Parameters**

- `name` (path, required): ID of the role to update.

**Request body**

**Responses**

- `200`: Successfully updated team role.
