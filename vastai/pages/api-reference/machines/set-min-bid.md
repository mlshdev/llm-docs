> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/machines/{machine_id}/minbid](https://docs.vast.ai/api-reference/machines/set-min-bid)

# set min-bid

`PUT /api/v0/machines/{machine_id}/minbid`

Sets the minimum bid price for a specified machine.

CLI Usage: `vastai set min-bid <machine_id> --price <price>`

**Parameters**

- `machine_id` (path, required): The ID of the machine.

**Request body**

**Responses**

- `200`: Success response
- `403`: Forbidden
- `422`: Unprocessable Entity
- `429`: Too Many Requests
