> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/metrics/gpu/locations](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/api-reference/openapi.yaml%23get%20/api/v0/metrics/gpu/locations)
> Canonical documentation: https://docs.vast.ai/api-reference/machines/show-gpu-locations

# show gpu locations

`GET /api/v0/metrics/gpu/locations`

Returns the geographic distribution of GPUs across the Vast marketplace. The CLI supports client-side filtering by GPU type, verification, datacenter, and rental status.

CLI Usage: `vastai metrics gpu-locations [options]`

**Authentication:** `BearerAuth`

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `locations` (array)
        - `items` (object)
          - `latitude` (number)
            - Example: `37.7749`
          - `longitude` (number)
            - Example: `-122.4194`
          - `city` (string)
            - Example: `San Francisco`
          - `country_code` (string)
            - Example: `US`
          - `gpu_name` (string)
            - Example: `RTX 4090`
          - `rented` (boolean)
          - `verified` (boolean)
          - `datacenter` (boolean)
          - `num_gpus` (integer)
            - Example: `4`
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
