> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/endptjobs](https://github.com/vast-ai/docs/blob/349512480817168ffb72a144bed96c2678228c5c/api-reference/openapi.yaml%23post%20/api/v0/endptjobs)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/create-endpoint

# create endpoint

`POST /api/v0/endptjobs`

This endpoint creates a new job processing endpoint with specified parameters.

CLI Usage: `vastai create endpoint [options]`

**Authentication:** `BearerAuth`

**Request body**

- Media type: `application/json`
  - Schema (object)
    - `endpoint_name` (string; minimum length: `1`; maximum length: `512`): Name of the endpoint. Must be unique among your endpoints. If omitted, a random 8-character name is generated.
      - Example: `my_endpoint`
    - `min_load` (number; default: `0`; minimum: `0`): Minimum active capacity to maintain, in load per second. `0` allows the endpoint to scale to zero active workers.
      - Example: `50`
    - `min_cold_load` (number; default: `0`; minimum: `0`): Floor on the load used to size the total pool of active and inactive workers, in load per second.
      - Example: `0`
    - `target_util` (number; default: `0.9`; minimum: `0`; maximum: `1`): Target ratio of anticipated load to active capacity. Lower values keep more spare capacity.
      - Example: `0.75`
    - `cold_mult` (number; default: `3`; minimum: `0`; exclusive maximum: `100`): Total capacity (active and inactive) to maintain, as a multiple of the active capacity target.
      - Example: `2`
    - `cold_workers` (integer; default: `5`; minimum: `0`): Minimum number of workers (active and inactive) to maintain. Shown as **Minimum Workers** in the console. Must not be greater than `max_workers`.
      - Example: `5`
    - `max_workers` (integer; default: `20`; minimum: `0`): Maximum number of workers (active and inactive) the serverless engine will recruit.
      - Example: `20`
    - `max_queue_time` (number; default: `30`; exclusive minimum: `0`): Maximum seconds of expected queue time allowed to build up on each worker before new requests wait in the endpoint queue.
      - Example: `30`
    - `target_queue_time` (number; default: `10`; exclusive minimum: `0`): Endpoint-wide queue time, in seconds, above which the serverless engine scales up aggressively. Must not be greater than `max_queue_time`.
      - Example: `10`
    - `inactivity_timeout` (number; exclusive minimum: `0`): Seconds without queued or in-progress requests after which active workers are stopped down to the `min_load` floor. Not set by default. Once set, it can be changed but not removed.
      - Example: `600`
    - `endpoint_state` (string; enum: `active`, `suspended`, `stopped`; default: `active`): Initial state of the endpoint.
      - Example: `active`

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `result` (integer): The ID of the created endpoint
        - Example: `12345`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `success` (boolean)
            - Example: `false`
          - `error` (string)
          - `msg` (string)
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `403`: Forbidden
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
