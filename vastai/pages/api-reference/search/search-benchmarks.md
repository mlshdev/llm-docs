> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/benchmarks](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/api-reference/openapi.yaml%23get%20/api/v0/benchmarks)
> Canonical documentation: https://docs.vast.ai/api-reference/search/search-benchmarks

# search benchmarks

`GET /api/v0/benchmarks`

Retrieve benchmark data based on search parameters.

CLI Usage: `vastai search benchmarks`

**Authentication:** `BearerAuth`

**Parameters**

- `query` (query; string): Search query string to filter benchmarks.
  - Example: `score>1000`

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (array)
      - `items` (object)
        - `contract_id` (integer): ID of instance/contract reporting benchmark
        - `id` (integer): Benchmark unique ID
        - `image` (string): Image used for benchmark
        - `last_update` (number; format: float): Date of benchmark
        - `machine_id` (integer): ID of machine benchmarked
        - `model` (string): Name of model used in benchmark
        - `name` (string): Name of benchmark
        - `num_gpus` (integer): Number of GPUs used in benchmark
        - `score` (number; format: float): Benchmark score result
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
