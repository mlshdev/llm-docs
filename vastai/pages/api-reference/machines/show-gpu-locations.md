> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/metrics/gpu/locations](https://docs.vast.ai/api-reference/machines/show-gpu-locations)

# show gpu locations

`GET /api/v0/metrics/gpu/locations`

Returns the geographic distribution of GPUs across the Vast marketplace. The CLI supports client-side filtering by GPU type, verification, datacenter, and rental status.

CLI Usage: `vastai metrics gpu-locations [options]`

**Responses**

- `200`: Success response
- `401`: Unauthorized
- `429`: Too Many Requests
