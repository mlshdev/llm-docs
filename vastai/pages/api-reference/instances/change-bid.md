> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/instances/bid_price/{id}](https://docs.vast.ai/api-reference/instances/change-bid)

# change bid

`PUT /api/v0/instances/bid_price/{id}`

Change the current bid price of an instance to a specified price.

CLI Usage: `vastai change bid <id> --price <price>`

**Parameters**

- `id` (path, required): Instance ID

**Request body**

**Responses**

- `200`: Success response
- `400`: Bad Request
- `404`: Not Found
- `429`: Too Many Requests
