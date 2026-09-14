> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/machines/{machine_id}/defjob](https://docs.vast.ai/api-reference/machines/remove-defjob)

# remove defjob

`DELETE /api/v0/machines/{machine_id}/defjob`

Deletes the default job (background instances) for a specified machine.

CLI Usage: `vastai remove defjob <machine_id>`

**Parameters**

- `machine_id` (path, required): ID of the machine to remove the default job from.

**Responses**

- `200`: Success response
- `404`: Not Found
- `429`: Too Many Requests
