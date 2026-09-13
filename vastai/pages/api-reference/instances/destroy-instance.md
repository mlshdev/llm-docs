> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/instances/{id}](https://docs.vast.ai/api-reference/instances/destroy-instance)

# destroy instance

`DELETE /api/v0/instances/{id}`

Destroys/deletes an instance permanently. This is irreversible and will delete all data.

CLI Usage: `vastai destroy instance <id>`

**Parameters**

- `id` (path, required): ID of the instance to destroy

**Responses**

- `200`: Instance destroyed successfully
- `400`: Bad request - invalid instance ID
- `404`: Instance not found
- `429`: Too many requests
