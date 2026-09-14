> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/team/roles/{name}](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/api-reference/openapi.yaml%23put%20/api/v0/team/roles/%7Bname%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/team/update-team-role

# update team role

`PUT /api/v0/team/roles/{name}`

Update an existing team role with new name and permissions.

CLI Usage: `vastai update team-role <id> --name <new_name> --permissions <new_permissions_json>`

**Authentication:** `BearerAuth`

**Parameters**

- `name` (path; required; integer): ID of the role to update.

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `name` (required; string): New name for the role.
    - `permissions` (required; object): JSON encoded permissions for the role.

**Responses**

- `200`: Successfully updated team role.
  - Media type: `application/json`
    - Schema (string)
      - Example: `Successfully Updated Team Role For <role_name>`
