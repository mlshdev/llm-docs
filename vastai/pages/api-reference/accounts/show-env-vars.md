> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/secrets](https://docs.vast.ai/api-reference/accounts/show-env-vars)

# show env vars

`GET /api/v0/secrets`

Retrieve a list of environment variables (secrets) for the authenticated user.

CLI Usage: `vastai show env-vars [-s]`

**Responses**

- `200`: Success response with user secrets
- `401`: Unauthorized
- `403`: Forbidden
- `429`: Too Many Requests
