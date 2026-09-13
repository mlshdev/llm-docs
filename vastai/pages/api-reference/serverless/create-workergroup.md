> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/workergroups](https://docs.vast.ai/api-reference/serverless/create-workergroup)

# create workergroup

`POST /api/v0/workergroups`

Creates a new workergroup configuration that manages worker instances for a serverless endpoint.

CLI Usage: `vastai create workergroup --template_hash <hash> --endpoint_name <name> [options]`

**Request body**

**Responses**

- `200`: Successfully created workergroup
- `400`: Bad Request
- `401`: Unauthorized
- `429`: Too Many Requests
