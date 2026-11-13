> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/workergroups/{id}](https://github.com/vast-ai/docs/blob/349512480817168ffb72a144bed96c2678228c5c/api-reference/openapi.yaml%23put%20/api/v0/workergroups/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/update-workergroup

# update workergroup

`PUT /api/v0/workergroups/{id}`

Updates the properties of an existing workergroup based on the provided parameters. Fields you omit are left unchanged.

CLI Usage: `vastai update workergroup <id> [options]`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): The ID of the workergroup to update.

**Request body**

- Media type: `application/json`
  - Schema (object)
    - `endpoint_id` (required; integer): ID of the endpoint the workergroup belongs to.
      - Example: `123`
    - `template_hash` (string): Template hash for the workergroup.
      - Example: `abc123def456`
    - `template_id` (integer): Template ID for the workergroup.
      - Example: `456`
    - `search_params` (string): Search filters for offers, as a query string or JSON object. Merged into the workergroup's current filters; where both set the same filter, this value wins.
      - Example: `gpu_name=RTX_3090 rentable=true`
    - `launch_args` (string): Launch arguments for creating instances.
      - Example: `--env VAR=value`
    - `gpu_ram` (number): Estimated GPU memory, in GB, that the model needs. Used to estimate worker load times.
      - Example: `24`

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
