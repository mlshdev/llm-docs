> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/endptjobs/{id}](https://docs.vast.ai/api-reference/serverless/update-endpoint)

# update endpoint

`PUT /api/v0/endptjobs/{id}`

Updates the specified endpoint group with the provided parameters.

CLI Usage: `vastai update endpoint <id> [options]`

**Parameters**

- `id` (path, required): ID of the endpoint group to update

**Request body**

**Responses**

- `200`: Success response
- `400`: Bad Request
- `401`: Unauthorized
- `429`: Too Many Requests
