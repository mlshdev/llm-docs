> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/deployment/{id}](https://docs.vast.ai/api-reference/serverless/show-deployment)

# show deployment

`GET /api/v0/deployment/{id}`

Returns detailed information about a single deployment, including endpoint state and worker count.

CLI Usage: `vastai show deployment <id>`

**Parameters**

- `id` (path, required): Deployment ID

**Responses**

- `200`: Deployment details
- `401`: Unauthorized
- `404`: Deployment not found
- `429`: Too Many Requests
