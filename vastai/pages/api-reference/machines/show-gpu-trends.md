> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/metrics/gpu/history](https://docs.vast.ai/api-reference/machines/show-gpu-trends)

# show gpu trends

`GET /api/v0/metrics/gpu/history`

Returns time-series data for GPU supply, demand, and pricing. By default queries the last 24 hours and returns a sampled set of roughly 20 data points. Use start/end/step for custom time ranges.

CLI Usage: `vastai metrics gpu-trends [GPU_NAMES] [options]`

**Parameters**

- `gpu_name` (query): Comma-separated GPU names (e.g. "RTX 4090, H100_SXM") or "all". Defaults to RTX 5090, 4090, and 3090.
- `verified` (query): Filter by verification status
- `hosting_type` (query): Filter by hosting type
- `num_gpus` (query): GPU count bucket or "all"
- `start` (query): Unix timestamp for range start
- `end` (query): Unix timestamp for range end
- `step` (query): Seconds between data points (e.g. 3600 for hourly)

**Responses**

- `200`: Success response
- `401`: Unauthorized
- `429`: Too Many Requests
