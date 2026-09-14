> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/instances/recycle/{id}](https://docs.vast.ai/api-reference/instances/recycle-instance)

# recycle instance

`PUT /api/v0/instances/recycle/{id}`

Destroys and recreates container in place (from newly pulled image) without losing GPU priority.
Updates container status to 'recycling' and executes docker stop/remove commands on the host machine.

CLI Usage: `vastai recycle instance <id>`

**Parameters**

- `id` (path, required): ID of the instance to recycle

**Responses**

- `200`: Instance recycle initiated successfully
- `400`: Bad Request - Invalid instance ID
- `401`: Unauthorized
- `429`: Too Many Requests
