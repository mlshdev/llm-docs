> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/machines/{machine_id}/dnotify](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/api-reference/openapi.yaml%23put%20/api/v0/machines/%7Bmachine_id%7D/dnotify)
> Canonical documentation: https://docs.vast.ai/api-reference/machines/schedule-maint

# schedule maint

`PUT /api/v0/machines/{machine_id}/dnotify`

Schedules a maintenance window for a specified machine and notifies clients.

CLI Usage: `vastai schedule maint <machine_id> --sdate <sdate> --duration <duration>`

**Authentication:** `BearerAuth`

**Parameters**

- `machine_id` (path; required; integer): ID of the machine to schedule maintenance for.

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `sdate` (required; string; format: date-time): Start date and time of the maintenance window.
      - Example: `2023-10-30T14:00:00Z`
    - `duration` (required; integer): Duration of the maintenance window in hours.
      - Example: `2`
    - `maintenance_reason` (string): Reason for the maintenance.
      - Example: `Routine hardware check`
    - `maintenance_category` (string; enum: `power`, `internet`, `disk`, `gpu`, `software`, `other`): Category of the maintenance.
      - Example: `software`

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `you_sent` (string)
        - Example: `2 notifications sent`
- `400`: Bad Request
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
        - Example: `API requests too frequent endpoint threshold=2.5`
