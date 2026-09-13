> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/instances/{id}/ssh](https://docs.vast.ai/api-reference/instances/show-ssh-keys)

# show ssh-keys

`GET /api/v0/instances/{id}/ssh`

Retrieves the SSH keys associated with a specific instance.

CLI Usage: `vastai show ssh-keys <instance_id>`

**Parameters**

- `id` (path, required): The ID of the instance to retrieve SSH keys for.

**Responses**

- `200`: Success response with SSH keys
- `400`: Bad Request - Invalid instance ID
- `401`: Unauthorized - Invalid or missing authentication
- `404`: Instance not found
