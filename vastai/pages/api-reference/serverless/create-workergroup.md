> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/workergroups](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/api-reference/openapi.yaml%23post%20/api/v0/workergroups)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/create-workergroup

# create workergroup

`POST /api/v0/workergroups`

Creates a new workergroup configuration that manages worker instances for a serverless endpoint.

CLI Usage: `vastai create workergroup --template_hash <hash> --endpoint_name <name> [options]`

**Authentication:** `BearerAuth`

**Request body**

- Media type: `application/json`
  - Schema (object)
    - `endpoint_name` (string): Name of the endpoint group
      - Example: `vLLM-Qwen3-8B`
    - `endpoint_id` (integer): ID of existing endpoint group (alternative to endpoint\_name)
      - Example: `123`
    - `template_hash` (string): Hash ID of template to use for worker instances
      - Example: `abc123def456`
    - `template_id` (integer): ID of template (alternative to template\_hash)
      - Example: `456`
    - `search_params` (string; default: `verified=true rentable=true rented=false`): Search query for finding worker instances (alternative to template)
      - Example: `gpu_name=RTX_3090 rentable=true`
    - `launch_args` (string): Additional launch arguments for worker instances
      - Example: `--env VAR=value`
    - `min_load` (number; default: `1`): Minimum load threshold for scaling
      - Example: `1`
    - `target_util` (number; default: `0.9`): Target GPU utilization
      - Example: `0.9`
    - `cold_mult` (number; default: `3`): Cold start multiplier
      - Example: `3`
    - `cold_workers` (integer; default: `3`): Number of cold workers to maintain
      - Example: `3`
    - `max_workers` (integer; default: `20`): Maximum number of worker instances
      - Example: `20`
    - `test_workers` (integer; default: `3`): Number of test workers
      - Example: `3`
    - `gpu_ram` (integer; default: `24`): Minimum GPU RAM in GB
      - Example: `24`

**Responses**

- `200`: Successfully created workergroup
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `id` (integer): ID of created autoscaling job
        - Example: `789`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string; enum: `invalid_args`)
      - `msg` (string)
        - Example: `Please assign your workergroup to a valid endpoint identifier`
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
        - Example: `API requests too frequent endpoint threshold=4.0`
