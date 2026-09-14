> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/metrics/gpu/current](https://docs.vast.ai/api-reference/machines/show-gpu-metrics)

# show gpu metrics

`GET /api/v0/metrics/gpu/current`

Returns a current snapshot of supply, demand, and pricing across all GPU types on the Vast marketplace. Use filters to narrow results to verified or datacenter machines.

CLI Usage: `vastai metrics gpu [options]`

**Parameters**

- `verified` (query): Filter by verification status
- `hosting_type` (query): Filter by hosting type
- `num_gpus` (query): GPU count bucket or "all" for true population

**Responses**

- `200`: Success response
- `401`: Unauthorized
- `429`: Too Many Requests
