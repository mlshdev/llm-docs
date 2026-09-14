> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/secrets](https://docs.vast.ai/api-reference/accounts/delete-env-var)

# delete env var

`DELETE /api/v0/secrets`

Deletes an environment variable associated with the authenticated user.
The variable must exist and belong to the requesting user.

CLI Usage: `vastai delete env-var <name>`

**Request body**

**Responses**

- `200`: Environment variable deleted successfully
- `400`: Bad request - missing or invalid input
- `401`: Unauthorized - Invalid or missing API key
- `403`: Forbidden - User is blacklisted
- `429`: Too many requests - rate limit exceeded
