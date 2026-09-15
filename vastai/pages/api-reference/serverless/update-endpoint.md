> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/endptjobs/{id}](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/api-reference/openapi.yaml%23put%20/api/v0/endptjobs/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/update-endpoint

# update endpoint

`PUT /api/v0/endptjobs/{id}`

Updates the specified endpoint group with the provided parameters.

CLI Usage: `vastai update endpoint <id> [options]`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): ID of the endpoint group to update

**Request body**

- Media type: `application/json`
  - Schema (object)
    - `min_load` (number): Minimum floor load in perf units/s (token/s for LLMs)
      - Example: `0`
    - `target_util` (number): Target capacity utilization (fraction, max 1.0)
      - Example: `0.9`
    - `cold_mult` (number): Cold/stopped instance capacity target as multiple of hot capacity target
      - Example: `2.5`
    - `cold_workers` (integer): Min number of workers to keep 'cold' when you have no load
      - Example: `5`
    - `max_workers` (integer): Max number of workers your endpoint group can have
      - Example: `20`
    - `endpoint_name` (string): Deployment endpoint name
      - Example: `my_endpoint`

**Responses**

- `200`: Success response
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
        - Example: `Endpointgroup not found for user`
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
