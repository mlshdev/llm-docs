> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/machines/{machine_id}/cleanup](https://docs.vast.ai/api-reference/machines/cleanup-machine)

# cleanup machine

`PUT /api/v0/machines/{machine_id}/cleanup`

This endpoint removes expired contracts on a specified machine, freeing up space.

CLI Usage: `vastai cleanup machine <machine_id>`

**Parameters**

- `machine_id` (path, required): The ID of the machine to clean up.

**Request body**

**Responses**

- `200`: Success response
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `429`: Too Many Requests
