> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/machines/{machine_id}/cleanup](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/api-reference/openapi.yaml%23put%20/api/v0/machines/%7Bmachine_id%7D/cleanup)
> Canonical documentation: https://docs.vast.ai/api-reference/machines/cleanup-machine

# cleanup machine

`PUT /api/v0/machines/{machine_id}/cleanup`

This endpoint removes expired contracts on a specified machine, freeing up space.

CLI Usage: `vastai cleanup machine <machine_id>`

**Authentication:** `BearerAuth`

**Parameters**

- `machine_id` (path; required; integer): The ID of the machine to clean up.

**Request body** (required)

- Media type: `application/json`
  - Schema (object): An empty JSON object is expected.

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `ctime` (number; format: float)
        - Example: `1633036800`
      - `machine_id` (integer)
        - Example: `123`
      - `user_id` (integer)
        - Example: `456`
      - `num_deleted` (integer)
        - Example: `5`
      - `msg` (string)
        - Example: `deleted 5 expired contracts on machine 123`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
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
        - Example: `API requests too frequent endpoint threshold=8`
