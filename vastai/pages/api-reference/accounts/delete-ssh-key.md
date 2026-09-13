> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/ssh/{id}](https://docs.vast.ai/api-reference/accounts/delete-ssh-key)

# delete ssh key

`DELETE /api/v0/ssh/{id}`

Removes an SSH key from the authenticated user's account

CLI Usage: `vastai delete ssh-key <id>`

**Parameters**

- `id` (path, required): ID of the SSH key to delete

**Responses**

- `200`: SSH key successfully deleted
- `400`: Invalid request or SSH key not found
