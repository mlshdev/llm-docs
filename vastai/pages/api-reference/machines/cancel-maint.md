> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/machines/{machine_id}/cancel_maint](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/api-reference/openapi.yaml%23put%20/api/v0/machines/%7Bmachine_id%7D/cancel_maint)
> Canonical documentation: https://docs.vast.ai/api-reference/machines/cancel-maint

# cancel maint

`PUT /api/v0/machines/{machine_id}/cancel_maint`

Cancel a scheduled maintenance window for a specified machine.

CLI Usage: `vastai cancel maint <machine_id>`

**Authentication:** `BearerAuth`

**Parameters**

- `machine_id` (path; required; integer): ID of the machine to cancel maintenance for.

**Responses**

- `200`: Maintenance window successfully canceled.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `ctime` (number; format: float): Current time in seconds since the epoch.
      - `machine_id` (integer): ID of the machine.
      - `msg` (string)
        - Example: `deleted 1 scheduled maintenance window(s) on machine 1234`
- `404`: Machine not found or does not belong to the user.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `msg` (string)
        - Example: `No such machine id`
      - `machine_id` (integer)
      - `user_id` (integer)
