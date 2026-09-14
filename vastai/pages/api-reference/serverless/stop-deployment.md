> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/deployment/{id}/stop](https://docs.vast.ai/api-reference/serverless/stop-deployment)

# stop deployment

`POST /api/v0/deployment/{id}/stop`

Stops the endpoint associated with a deployment. The deployment is not deleted and can be restarted with the start deployment endpoint.

CLI Usage: `vastai stop deployment <id>`

**Parameters**

- `id` (path, required): Deployment ID

**Responses**

- `200`: Deployment stopped successfully
- `401`: Unauthorized
- `404`: Deployment not found
- `429`: Too Many Requests
