> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/deployments](https://docs.vast.ai/api-reference/serverless/show-deployments)

# show deployments

`GET /api/v0/deployments`

Returns all deployments owned by the authenticated user.

CLI Usage: `vastai show deployments`

**Responses**

- `200`: A list of deployments
- `401`: Unauthorized
- `429`: Too Many Requests
