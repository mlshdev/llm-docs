> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/machines/{machine_id}/minbid](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/api-reference/openapi.yaml%23put%20/api/v0/machines/%7Bmachine_id%7D/minbid)
> Canonical documentation: https://docs.vast.ai/api-reference/machines/set-min-bid

# set min-bid

`PUT /api/v0/machines/{machine_id}/minbid`

Sets the minimum bid price for a specified machine.

CLI Usage: `vastai set min-bid <machine_id> --price <price>`

**Authentication:** `BearerAuth`

**Parameters**

- `machine_id` (path; required; integer): The ID of the machine.

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `price` (required; number; format: float): Minimum bid price for the machine.
      - Example: `0.5`

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `you_sent` (object): The original request JSON.
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `422`: Unprocessable Entity
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
        - Example: `API requests too frequent endpoint threshold=1.5`
