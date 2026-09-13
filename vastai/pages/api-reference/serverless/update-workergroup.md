> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/workergroups/{id}](https://docs.vast.ai/api-reference/serverless/update-workergroup)

# update workergroup

`PUT /api/v0/workergroups/{id}`

Updates the properties of an existing workergroup based on the provided parameters.

CLI Usage: `vastai update workergroup <id> [options]`

**Parameters**

- `id` (path, required): The ID of the workergroup to update.

**Request body**

**Responses**

- `200`: Successfully updated the workergroup.
- `400`: Bad Request
- `401`: Unauthorized
- `429`: Too Many Requests
