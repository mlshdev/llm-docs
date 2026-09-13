> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#post /route](https://docs.vast.ai/api-reference/serverless/route)

# route

`POST /route`

Calls on the serverless engine to retrieve a GPU instance address within your endpoint for processing a request.
The engine will return either a ready worker URL or status information if no workers are available.

CLI Usage: `vastai route <endpoint> <cost>`

**Request body**

**Responses**

- `200`: Success response - either worker assignment or status
- `400`: Bad Request - invalid parameters
- `401`: Unauthorized - authentication failed
