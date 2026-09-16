> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/team/roles-full](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/api-reference/openapi.yaml%23get%20/api/v0/team/roles-full)
> Canonical documentation: https://docs.vast.ai/api-reference/team/show-team-roles

# show team roles

`GET /api/v0/team/roles-full`

Retrieve a list of all roles for a team, excluding the owner' role.

CLI Usage: `vastai show team-roles`

**Authentication:** `BearerAuth`

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (array)
      - `items` (object)
        - `name` (string): Name of the role
          - Example: `admin`
        - `permissions` (array): Permissions associated with the role
          - Example: `["read","write"]`
          - `items` (string)
        - `identifier` (string): Unique identifier for the role
          - Example: `admin_role`
        - `id` (integer): Role ID
          - Example: `1234`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `404`: Invalid API key
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `auth_error`
      - `msg` (string)
        - Example: `Invalid user key`
