> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/auth/apikeys](https://docs.vast.ai/api-reference/accounts/create-api-key)

# create api-key

`POST /api/v0/auth/apikeys`

Creates a new API key with specified permissions for the authenticated user.

CLI Usage: `vastai create api-key --name <name> --permission_file <permissions_file> [--key_params <params>]`

**Request body**

**Responses**

- `200`: API key created successfully
- `400`: Bad Request
- `401`: Unauthorized
- `429`: Too Many Requests
