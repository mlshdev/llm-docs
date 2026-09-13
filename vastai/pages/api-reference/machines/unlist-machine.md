> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/machines/{machine_id}/asks](https://docs.vast.ai/api-reference/machines/unlist-machine)

# unlist machine

`DELETE /api/v0/machines/{machine_id}/asks`

Removes all 'ask' type offer contracts for a specified machine, effectively unlisting it from being available for rent.

CLI Usage: `vastai unlist machine <id>`

**Parameters**

- `machine_id` (path, required): The ID of the machine to unlist.

**Responses**

- `200`: Success response
- `401`: Unauthorized
- `404`: Not Found
- `429`: Too Many Requests
