> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/instances/{id}/ssh](https://docs.vast.ai/api-reference/instances/attach-ssh-key)

# attach ssh-key

`POST /api/v0/instances/{id}/ssh`

Attaches an SSH key to the specified instance, allowing SSH access using the provided key.

CLI Usage: `vastai attach ssh <instance_id> <ssh_key>`

**Parameters**

- `id` (path, required): ID of the instance to attach the SSH key to

**Request body**

**Responses**

- `200`: SSH key attached successfully
- `400`: Bad Request
- `401`: Unauthorized
- `404`: Not Found
