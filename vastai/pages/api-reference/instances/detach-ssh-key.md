> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/instances/{id}/ssh/{ssh_key_id}](https://docs.vast.ai/api-reference/instances/detach-ssh-key)

# detach ssh-key

`DELETE /api/v0/instances/{id}/ssh/{ssh_key_id}`

Detaches an SSH key from a specified instance, removing SSH access for that key.

CLI Usage: `vastai detach <instance_id> <ssh_key_id>`

**Parameters**

- `id` (path, required): ID of the instance to detach the SSH key from
- `ssh_key_id` (path, required): Numeric ID of the SSH key to detach. Obtainable via `show ssh-keys` command

**Responses**

- `200`: SSH key successfully detached
- `400`: Bad Request
- `404`: Instance or SSH key not found
- `429`: Too Many Requests
- `500`: Internal Server Error
