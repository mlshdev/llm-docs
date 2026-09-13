> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/users/current](https://docs.vast.ai/api-reference/accounts/show-user)

# show user

`GET /api/v0/users/current`

Retrieve information about the current authenticated user, excluding the API key.

CLI Usage: `vastai show user`

**Responses**

- `200`: Success response with user information
- `401`: Unauthorized access due to invalid or missing authentication token.
- `500`: Internal Server Error
