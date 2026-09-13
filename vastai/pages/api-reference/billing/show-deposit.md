> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/instances/balance/{id}](https://docs.vast.ai/api-reference/billing/show-deposit)

# show deposit

`GET /api/v0/instances/balance/{id}`

Retrieves the deposit details for a specified instance.

CLI Usage: `vastai show deposit <id>`

**Parameters**

- `id` (path, required): The ID of the instance.

**Responses**

- `200`: Success response
- `404`: Instance Not Found
- `429`: Too Many Requests
