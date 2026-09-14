> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/team/roles](https://docs.vast.ai/api-reference/team/create-team-role)

# create team role

`POST /api/v0/team/roles`

Creates a new role within a team. Only team owners or managers with the appropriate permissions can perform this operation.

CLI Usage: `vastai create team role --name <role_name> --permissions <permissions_json>`

**Request body**

**Responses**

- `200`: Role created successfully
- `400`: Bad Request
- `401`: Unauthorized - Invalid or missing API key
- `403`: Forbidden - User lacks permission
