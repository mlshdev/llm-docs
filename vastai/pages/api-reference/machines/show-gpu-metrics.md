> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/metrics/gpu/current](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/api-reference/openapi.yaml%23get%20/api/v0/metrics/gpu/current)
> Canonical documentation: https://docs.vast.ai/api-reference/machines/show-gpu-metrics

# show gpu metrics

`GET /api/v0/metrics/gpu/current`

Returns a current snapshot of supply, demand, and pricing across all GPU types on the Vast marketplace. Use filters to narrow results to verified or datacenter machines.

CLI Usage: `vastai metrics gpu [options]`

**Authentication:** `BearerAuth`

**Parameters**

- `verified` (query; string; enum: `yes`, `no`, `all`; default: `yes`): Filter by verification status
- `hosting_type` (query; string; enum: `all`, `secure_cloud`, `community`; default: `all`): Filter by hosting type
- `num_gpus` (query; string; default: `all`): GPU count bucket or "all" for true population

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `gpus` (array)
        - `items` (object)
          - `gpu_name` (string)
            - Example: `RTX 4090`
          - `total` (integer): Total number of machines
          - `available` (integer): Available machines
          - `rented_verified` (integer): Rented verified machines
          - `avail_verified` (integer): Available verified machines
          - `rented_unverified` (integer): Rented unverified machines
          - `avail_unverified` (integer): Available unverified machines
          - `usage` (number): Current utilization percentage
          - `usage_30d` (number): 30-day average utilization percentage
          - `dlperf` (number): Deep learning performance score
          - `tflops` (number): GPU TFLOPS rating
          - `price_p10` (number): 10th percentile price per GPU per hour
          - `price_p25` (number): 25th percentile price
          - `price_median` (number): Median price per GPU per hour
          - `price_p75` (number): 75th percentile price
          - `price_p90` (number): 90th percentile price
          - `tflops_per_dollar` (number): TFLOPS per dollar
          - `dlperf_per_dollar` (number): Deep learning performance per dollar
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=3.0`
