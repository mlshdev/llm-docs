> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/team/roles/{name}](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/api-reference/openapi.yaml%23get%20/api/v0/team/roles/%7Bname%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/team/show-team-role

# show team role

`GET /api/v0/team/roles/{name}`

Retrieve details of a specific team role by its name.

CLI Usage: `vastai show team-role <name>`

**Authentication:** `BearerAuth`

**Parameters**

- `name` (path; required; string): Name of the team role
  - Example: `admin`

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `id` (integer): Role ID
        - Example: `1`
      - `name` (string): Name of the role
        - Example: `admin`
      - `permissions` (array): Permissions associated with the role
        - Example: `["read","write"]`
        - `items` (string)
- `404`: Role not found
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
