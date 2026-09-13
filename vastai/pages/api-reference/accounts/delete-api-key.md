> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/auth/apikeys/{id}](https://docs.vast.ai/api-reference/accounts/delete-api-key)

# delete api key

`DELETE /api/v0/auth/apikeys/{id}`

Deletes an existing API key belonging to the authenticated user.
The API key is soft-deleted by setting a deleted_at timestamp.

CLI Usage: `vastai delete api-key <id>`

**Parameters**

- `id` (path, required): ID of the API key to delete

**Responses**

- `200`: API key successfully deleted
- `400`: Bad Request - API key ID not provided
- `401`: Unauthorized - Invalid or missing authentication
- `403`: Forbidden - API key belongs to a different user
- `404`: Not Found - API key does not exist
- `429`: Too Many Requests
