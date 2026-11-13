> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/workergroups](https://github.com/vast-ai/docs/blob/349512480817168ffb72a144bed96c2678228c5c/api-reference/openapi.yaml%23post%20/api/v0/workergroups)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/create-workergroup

# create workergroup

`POST /api/v0/workergroups`

Creates a new workergroup configuration that manages worker instances for a serverless endpoint.

CLI Usage: `vastai create workergroup --template_hash <hash> --endpoint_name <name> [options]`

**Authentication:** `BearerAuth`

**Request body**

- Media type: `application/json`
  - Schema (object)
    - `endpoint_id` (integer): ID of the endpoint this workergroup belongs to. Either `endpoint_id` or `endpoint_name` is required.
      - Example: `123`
    - `endpoint_name` (string): Name of the endpoint this workergroup belongs to. Either `endpoint_id` or `endpoint_name` is required. If you have no endpoint with this name, one is created with default parameters.
      - Example: `vLLM-Qwen3-8B`
    - `template_hash` (string): Hash ID of template to use for worker instances
      - Example: `abc123def456`
    - `template_id` (integer): ID of template (alternative to template\_hash)
      - Example: `456`
    - `search_params` (required; string): Search filters for the offers that workers are recruited from, as a query string or JSON object. Combined with any search filters defined by the template; where both set the same filter, this value wins.
      - Example: `gpu_name=RTX_3090 rentable=true`
    - `launch_args` (string): Additional launch arguments for worker instances
      - Example: `--env VAR=value`
    - `gpu_ram` (number; default: `8`; exclusive minimum: `0`): Estimated GPU memory, in GB, that the model needs. Used to estimate worker load times; to filter offers by GPU memory, use `search_params`.
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
