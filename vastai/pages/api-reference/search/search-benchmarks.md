> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/benchmarks](https://docs.vast.ai/api-reference/search/search-benchmarks)

# search benchmarks

`GET /api/v0/benchmarks`

Retrieve benchmark data based on search parameters.

CLI Usage: `vastai search benchmarks`

**Parameters**

- `query` (query): Search query string to filter benchmarks.

**Responses**

- `200`: Success response
- `401`: Unauthorized
- `429`: Too Many Requests
