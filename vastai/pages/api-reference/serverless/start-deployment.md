> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/deployment/{id}/start](https://docs.vast.ai/api-reference/serverless/start-deployment)

# start deployment

`POST /api/v0/deployment/{id}/start`

Starts (or restarts) the endpoint associated with a deployment. The autoscaler will begin recruiting workers according to the scaling policy.

CLI Usage: `vastai start deployment <id>`

**Parameters**

- `id` (path, required): Deployment ID

**Responses**

- `200`: Deployment started successfully
- `401`: Unauthorized
- `404`: Deployment not found
- `429`: Too Many Requests
