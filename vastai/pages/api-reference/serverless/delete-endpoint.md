> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/endptjobs/{id}](https://docs.vast.ai/api-reference/serverless/delete-endpoint)

# delete endpoint

`DELETE /api/v0/endptjobs/{id}`

Deletes an endpoint group by ID. Associated workergroups will also be deleted.

CLI Usage: `vastai delete endpoint <id>`

**Parameters**

- `id` (path, required): ID of the endpoint group to delete

**Responses**

- `200`: Endpoint group successfully deleted
- `400`: Bad request
- `401`: Unauthorized
- `429`: Too Many Requests
