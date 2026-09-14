> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/workergroups/{id}](https://docs.vast.ai/api-reference/serverless/delete-workergroup)

# delete workergroup

`DELETE /api/v0/workergroups/{id}`

Deletes an existing workergroup.

CLI Usage: `vastai delete workergroup <id>`

**Parameters**

- `id` (path, required): ID of the workergroup to delete

**Responses**

- `200`: Workergroup deleted successfully
- `400`: Bad request
- `401`: Unauthorized
- `404`: Workergroup not found
- `429`: Too Many Requests
