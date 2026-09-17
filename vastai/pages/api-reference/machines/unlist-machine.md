> Pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/machines/{machine_id}/asks](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/api-reference/openapi.yaml%23delete%20/api/v0/machines/%7Bmachine_id%7D/asks)
> Canonical documentation: https://docs.vast.ai/api-reference/machines/unlist-machine

# unlist machine

`DELETE /api/v0/machines/{machine_id}/asks`

Removes all 'ask' type offer contracts for a specified machine, effectively unlisting it from being available for rent.

CLI Usage: `vastai unlist machine <id>`

**Authentication:** `BearerAuth`

**Parameters**

- `machine_id` (path; required; integer): The ID of the machine to unlist.

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `machine_id` (integer)
        - Example: `123`
      - `user_id` (integer)
        - Example: `456`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `404`: Not Found
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
        - Example: `API requests too frequent endpoint threshold=1.8`
