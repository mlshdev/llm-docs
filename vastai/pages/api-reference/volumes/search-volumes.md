> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/volumes/search](https://docs.vast.ai/api-reference/volumes/search-volumes)

# search volumes

`POST /api/v0/volumes/search`

Search for available volumes based on specified criteria.

CLI Usage: `vastai search volumes <query> [options]`

**Parameters**

- `q` (query): Query parameters for filtering volume search results

**Request body**

**Responses**

- `200`: Success response
- `400`: Bad Request
- `429`: Too Many Requests
