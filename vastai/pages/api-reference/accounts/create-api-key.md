> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/auth/apikeys](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/api-reference/openapi.yaml%23post%20/api/v0/auth/apikeys)
> Canonical documentation: https://docs.vast.ai/api-reference/accounts/create-api-key

# create api-key

`POST /api/v0/auth/apikeys`

Creates a new API key with specified permissions for the authenticated user.

CLI Usage: `vastai create api-key --name <name> --permission_file <permissions_file> [--key_params <params>]`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `name` (required; string): Name for the API key
      - Example: `read-only-key`
    - `permissions` (object): JSON object containing permission definitions
      - Example: `{"read":true,"write":false}`
    - `key_params` (object): Optional wildcard parameters for advanced keys
      - Example: `{"ip_whitelist":["1.2.3.4"]}`

**Responses**

- `200`: API key created successfully
  - Media type: `application/json`
    - Schema (object)
      - `id` (integer): The ID of the created API key
        - Example: `12345`
      - `key` (string): The newly generated API key
        - Example: `vast-123456789abcdef`
      - `permissions`
        - anyOf:
          - `variant 1` (boolean): False when permissions are disabled
            - Example: `false`
          - `variant 2` (object): Object defining the permissions when enabled
            - Example: `{"read":true,"write":false}`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string; enum: `invalid_permissions`, `missing_permissions`)
      - `msg` (string)
        - Example: `Invalid permission format`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `msg` (string)
        - Example: `Unauthorized`
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=2.0`
