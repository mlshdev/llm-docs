> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/metrics/gpu/history](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/api-reference/openapi.yaml%23get%20/api/v0/metrics/gpu/history)
> Canonical documentation: https://docs.vast.ai/api-reference/machines/show-gpu-trends

# show gpu trends

`GET /api/v0/metrics/gpu/history`

Returns time-series data for GPU supply, demand, and pricing. By default queries the last 24 hours and returns a sampled set of roughly 20 data points. Use start/end/step for custom time ranges.

CLI Usage: `vastai metrics gpu-trends [GPU_NAMES] [options]`

**Authentication:** `BearerAuth`

**Parameters**

- `gpu_name` (query; string): Comma-separated GPU names (e.g. "RTX 4090, H100\_SXM") or "all". Defaults to RTX 5090, 4090, and 3090.
- `verified` (query; string; enum: `yes`, `no`, `all`; default: `yes`): Filter by verification status
- `hosting_type` (query; string; enum: `all`, `secure_cloud`, `community`; default: `all`): Filter by hosting type
- `num_gpus` (query; string; default: `all`): GPU count bucket or "all"
- `start` (query; integer): Unix timestamp for range start
- `end` (query; integer): Unix timestamp for range end
- `step` (query; integer): Seconds between data points (e.g. 3600 for hourly)

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `gpus` (object): Keyed by GPU name
        - `additional properties` (object)
          - `supply_demand` (object): Time-series arrays of supply and demand counts
            - `timestamps` (array)
              - Example: `[1779736460,1779736632]`
              - `items` (integer)
            - `rented_verified` (array)
              - Example: `[3789,3756]`
              - `items` (integer)
            - `avail_verified` (array)
              - Example: `[165,200]`
              - `items` (integer)
            - `rented_unverified` (array)
              - Example: `[385,390]`
              - `items` (integer)
            - `avail_unverified` (array)
              - Example: `[107,100]`
              - `items` (integer)
            - `total` (array)
              - Example: `[4446,4446]`
              - `items` (integer)
          - `pricing` (object): Time-series arrays of pricing percentiles
            - `timestamps` (array)
              - Example: `[1779736460,1779736632]`
              - `items` (integer)
            - `rented_p10` (array)
              - Example: `[0.246,0.246]`
              - `items` (number)
            - `rented_median` (array)
              - Example: `[0.39,0.38]`
              - `items` (number)
            - `rented_p90` (array)
              - Example: `[0.599,0.55]`
              - `items` (number)
            - `avail_p10` (array)
              - Example: `[0.254,0.289]`
              - `items` (number)
            - `avail_median` (array)
              - Example: `[0.5,0.5]`
              - `items` (number)
            - `avail_p90` (array)
              - Example: `[0.973,0.85]`
              - `items` (number)
          - `stats` (object): Static performance metrics for this GPU
            - `tflops` (number)
              - Example: `82.6`
            - `dlperf` (number)
              - Example: `97.5`
            - `tflops_per_dollar` (number)
              - Example: `127.1`
            - `dlperf_per_dollar` (number)
              - Example: `150`
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
