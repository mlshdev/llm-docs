> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/ssh](https://docs.vast.ai/api-reference/accounts/show-ssh-keys)

# show ssh keys

`GET /api/v0/ssh`

Retrieve a list of SSH keys associated with the authenticated user's account.

CLI Usage: `vastai show ssh-keys`

**Parameters**

- `Authorization` (header, required): Bearer token for user authentication.

**Responses**

- `200`: A list of SSH keys.
- `401`: Unauthorized access due to invalid or missing authentication token.
- `404`: No SSH keys found for the user.
