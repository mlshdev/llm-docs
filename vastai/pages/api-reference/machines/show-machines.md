> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/machines](https://github.com/vast-ai/docs/blob/d157814df41bf9eb85ed0ef988b9a83b851710d7/api-reference/openapi.yaml%23get%20/api/v0/machines)
> Canonical documentation: https://docs.vast.ai/api-reference/machines/show-machines

# show machines

`GET /api/v0/machines`

Fetches data for multiple machines associated with the authenticated user.

CLI Usage: `vastai show machines [--user_id <user_id>]`

**Authentication:** `BearerAuth`

**Parameters**

- `user_id` (query; required; string): The ID of the user whose machines are being requested.

**Responses**

- `200`: A list of machines
  - Media type: `application/json`
    - Schema (object)
      - `machines` (array)
        - `items` (object)
          - `id` (string): The unique identifier for the machine.
          - `name` (string): The name of the machine.
- `401`: Unauthorized - User authentication failed
- `429`: Too Many Requests - Rate limit exceeded
