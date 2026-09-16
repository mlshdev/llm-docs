> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/workergroups/{id}](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/api-reference/openapi.yaml%23put%20/api/v0/workergroups/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/update-workergroup

# update workergroup

`PUT /api/v0/workergroups/{id}`

Updates the properties of an existing workergroup based on the provided parameters.

CLI Usage: `vastai update workergroup <id> [options]`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): The ID of the workergroup to update.

**Request body**

- Media type: `application/json`
  - Schema (object)
    - `min_load` (number): Minimum load for the workergroup.
      - Example: `1`
    - `target_util` (number): Target utilization for the workergroup.
      - Example: `0.9`
    - `cold_mult` (number): Cold multiplier for the workergroup.
      - Example: `3`
    - `test_workers` (integer; default: `3`): Number of test workers for performance estimation.
      - Example: `3`
    - `template_hash` (string): Template hash for the workergroup.
      - Example: `abc123def456`
    - `template_id` (integer): Template ID for the workergroup.
      - Example: `456`
    - `search_params` (string; default: `verified=true rentable=true rented=false`): Search parameters for offers (JSON object or query string).
      - Example: `gpu_name=RTX_3090 rentable=true`
    - `launch_args` (string): Launch arguments for creating instances.
      - Example: `--env VAR=value`
    - `gpu_ram` (number): Estimated GPU RAM requirement.
      - Example: `24`
    - `endpoint_name` (string): Deployment endpoint name.
      - Example: `vLLM-Qwen3-8B`
    - `endpoint_id` (integer): Deployment endpoint ID.
      - Example: `123`

**Responses**

- `200`: Successfully updated the workergroup.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `invalid_args`
      - `msg` (string)
        - Example: `Workgroup not found for user`
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
        - Example: `API requests too frequent endpoint threshold=2.0`
