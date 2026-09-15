> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/team/roles](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/api-reference/openapi.yaml%23post%20/api/v0/team/roles)
> Canonical documentation: https://docs.vast.ai/api-reference/team/create-team-role

# create team role

`POST /api/v0/team/roles`

Creates a new role within a team. Only team owners or managers with the appropriate permissions can perform this operation.

CLI Usage: `vastai create team role --name <role_name> --permissions <permissions_json>`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `name` (required; string): Name for the new role
      - Example: `developer`
    - `permissions` (required; object): JSON object containing permission definitions
      - `api` (object): API permissions
        - allOf:
          - `variant 1` (object)
            - `user_read` (object; default: `{}`): Permission to read user info
            - `instance_write` (object; default: `{}`): Permission to write instances

**Responses**

- `200`: Role created successfully
  - Media type: `application/json`
    - Schema (object)
      - `msg` (string)
        - Example: `success`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `msg` (string)
        - Example: `Missing permissions parameter`
- `401`: Unauthorized - Invalid or missing API key
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `403`: Forbidden - User lacks permission
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
