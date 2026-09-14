> Pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/machines/{machine_id}/defjob](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/api-reference/openapi.yaml%23delete%20/api/v0/machines/%7Bmachine_id%7D/defjob)
> Canonical documentation: https://docs.vast.ai/api-reference/machines/remove-defjob

# remove defjob

`DELETE /api/v0/machines/{machine_id}/defjob`

Deletes the default job (background instances) for a specified machine.

CLI Usage: `vastai remove defjob <machine_id>`

**Authentication:** `BearerAuth`

**Parameters**

- `machine_id` (path; required; integer): ID of the machine to remove the default job from.

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `machine_id` (integer)
        - Example: `12345`
      - `user_id` (integer)
        - Example: `67890`
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
        - Example: `API requests too frequent endpoint threshold=1.2`
