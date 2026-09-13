> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/ssh/{id}](https://docs.vast.ai/api-reference/accounts/update-ssh-key)

# update ssh key

`PUT /api/v0/ssh/{id}`

Updates the specified SSH key with the provided value.

CLI Usage: `vastai update ssh-key <id> <ssh_key>`

**Parameters**

- `id` (path, required): ID of the SSH key to update

**Request body**

**Responses**

- `200`: SSH key updated successfully
- `400`: Bad Request
- `429`: Too Many Requests
