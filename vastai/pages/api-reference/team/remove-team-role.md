> Pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/team/roles/{name}](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/api-reference/openapi.yaml%23delete%20/api/v0/team/roles/%7Bname%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/team/remove-team-role

# remove team role

`DELETE /api/v0/team/roles/{name}`

Removes a role from the team. Cannot remove the team owner role.

CLI Usage: `vastai remove team-role <name>`

**Authentication:** `BearerAuth`

**Parameters**

- `name` (path; required; string): Name of the role to remove
  - Example: `developer`

**Responses**

- `200`: Role removed successfully
  - Media type: `application/json`
    - Schema (object)
      - `status` (string; enum: `success`)
        - Example: `success`
      - `message` (string)
        - Example: `Role removed from team`
- `400`: Bad request - role name is required
  - Media type: `application/json`
    - Schema (object)
      - `msg` (string)
        - Example: `Role name is required`
- `401`: Unauthorized - invalid or missing API key
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `unauthorized`
      - `msg` (string)
        - Example: `Invalid or missing API key`
- `403`: Forbidden - cannot delete owner role or user is blacklisted
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `forbidden`
      - `msg` (string)
        - Example: `You cannot delete the owner role.`
- `404`: Role not found
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `not_found`
      - `msg` (string)
        - Example: `Specified role not found`
