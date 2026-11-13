> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/endptjobs/{id}](https://github.com/vast-ai/docs/blob/349512480817168ffb72a144bed96c2678228c5c/api-reference/openapi.yaml%23put%20/api/v0/endptjobs/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/update-endpoint

# update endpoint

`PUT /api/v0/endptjobs/{id}`

Updates the specified endpoint group with the provided parameters. Fields you omit are left unchanged. For what each parameter controls, see [Endpoint Parameters](https://docs.vast.ai/guides/serverless/serverless-parameters).

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
    - `min_cold_load` (number; minimum: `0`): Floor on the load used to size the total pool of active and inactive workers, in load per second
      - Example: `0`
    - `max_queue_time` (number; exclusive minimum: `0`): Maximum seconds of expected queue time allowed to build up on each worker
      - Example: `30`
    - `target_queue_time` (number; exclusive minimum: `0`): Endpoint-wide queue time, in seconds, above which the serverless engine scales up aggressively
      - Example: `10`
    - `inactivity_timeout` (number; exclusive minimum: `0`): Seconds without queued or in-progress requests after which active workers are stopped down to the `min_load` floor. Can be changed but not removed once set.
      - Example: `600`
    - `endpoint_state` (string; enum: `active`, `suspended`, `stopped`): Set to `suspended` or `stopped` to pause the serverless engine, or `active` to resume it. See [Pricing](https://docs.vast.ai/guides/serverless/pricing) for how each state is billed.
      - Example: `active`
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
