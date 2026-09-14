> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/secrets](https://docs.vast.ai/api-reference/accounts/create-env-var)

# create env-var

`POST /api/v0/secrets`

Creates a new encrypted environment variable for the authenticated user.
Keys are automatically converted to uppercase. Values are encrypted before storage.
There is a limit on the total number of environment variables per user.

CLI Usage: `vastai create env-var <key> <value>`

**Request body**

**Responses**

- `200`: Environment variable created successfully
- `400`: Bad Request
- `401`: Unauthorized - Invalid or missing API key
- `403`: Forbidden - User is blacklisted
- `429`: Too Many Requests
