> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/machines/create_asks](https://docs.vast.ai/api-reference/machines/list-machine)

# list machine

`PUT /api/v0/machines/create_asks`

Creates or updates ask contracts for a machine to list it for rent on the vast.ai platform.
Allows setting pricing, minimum GPU requirements, end date and discount rates.

CLI Usage: `vastai list machine <machine_id> [options]`

**Request body**

**Responses**

- `200`: Successful response
- `400`: Bad Request
- `403`: Forbidden
