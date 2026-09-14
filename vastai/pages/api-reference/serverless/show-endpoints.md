> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/endptjobs](https://docs.vast.ai/api-reference/serverless/show-endpoints)

# show endpoints

`GET /api/v0/endptjobs`

Retrieve a list of endpoint jobs for the authenticated user.

CLI Usage: `vastai show endpoints`

**Responses**

- `200`: A list of endpoint jobs
- `400`: Bad request
- `401`: Unauthorized
- `429`: Too Many Requests
