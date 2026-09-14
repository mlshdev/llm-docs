> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/machines/{machine_id}/reports](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/api-reference/openapi.yaml%23get%20/api/v0/machines/%7Bmachine_id%7D/reports)
> Canonical documentation: https://docs.vast.ai/api-reference/machines/show-reports

# show reports

`GET /api/v0/machines/{machine_id}/reports`

Retrieves a list of the most recent reports for a given machine. Each report includes details such as the problem identified, a message describing the issue, and the timestamp when the report was created.

CLI Usage: `vastai reports <machine_id>`

**Authentication:** `BearerAuth`

**Parameters**

- `machine_id` (path; required; integer): The unique identifier of the machine.

**Responses**

- `200`: An array of reports for the specified machine.
  - Media type: `application/json`
    - Schema (array)
      - `items` (object)
        - `problem` (string): The type of problem reported.
        - `message` (string): Detailed message describing the problem.
        - `created_at` (string; format: date-time): Timestamp when the report was created.
- `404`: Machine not found.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `500`: Internal server error.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
