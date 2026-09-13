> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/machines/create_bids](https://docs.vast.ai/api-reference/machines/set-defjob)

# set defjob

`PUT /api/v0/machines/create_bids`

Creates default jobs (background instances) for a specified machine with the given parameters.

CLI Usage: `vastai set defjob <machine_id> --price_gpu <price> --price_inetu <price> --price_inetd <price> --image <image> [--args <args>]`

**Request body**

**Responses**

- `200`: Success response
- `400`: Bad Request
- `403`: Forbidden
- `429`: Too Many Requests
