> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/secrets](https://docs.vast.ai/api-reference/accounts/update-env-var)

# update env var

`PUT /api/v0/secrets`

Updates the value of an existing environment variable for the authenticated user.

CLI Usage: `vastai update env-var <key> <value>`

**Request body**

**Responses**

- `200`: Environment variable updated successfully
- `400`: Bad Request
- `401`: Unauthorized
- `429`: Too Many Requests
