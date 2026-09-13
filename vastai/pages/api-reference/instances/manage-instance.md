> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/instances/{id}](https://docs.vast.ai/api-reference/instances/manage-instance)

# manage instance

`PUT /api/v0/instances/{id}`

Manage instance state and labels. The operation is determined by the request body parameters.

CLI Usage:
- To stop: `vastai stop instance <id>`
- To start: `vastai start instance <id>`
- To label: `vastai label instance <id> <label>`

**Parameters**

- `id` (path, required): ID of the instance to modify

**Request body**

**Responses**

- `200`: Operation completed successfully
- `400`: Bad Request
- `401`: Unauthorized
- `404`: Not Found
- `429`: Too Many Requests
