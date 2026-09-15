> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/users/{user_id}/machine-earnings](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/api-reference/openapi.yaml%23get%20/api/v0/users/%7Buser_id%7D/machine-earnings)
> Canonical documentation: https://docs.vast.ai/api-reference/billing/show-earnings

# show earnings

`GET /api/v0/users/{user_id}/machine-earnings`

Retrieves the earnings history for a specified time range and optionally per machine.

CLI Usage: `vastai show earnings [options]`

**Authentication:** `BearerAuth`

**Parameters**

- `user_id` (path; required; integer): The ID of the user.
- `sday` (query; integer): Start day for the earnings report.
- `eday` (query; integer): End day for the earnings report.
- `machid` (query; integer): Optional machine ID to filter earnings.
- `last_days` (query; integer): Number of days to look back from today.

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `summary` (object)
        - `total_gpu` (number)
        - `total_stor` (number)
        - `total_bwu` (number)
        - `total_bwd` (number)
      - `username` (string)
      - `email` (string)
      - `fullname` (string)
      - `address1` (string)
      - `address2` (string)
      - `city` (string)
      - `zip` (string)
      - `country` (string)
      - `taxinfo` (string)
      - `current` (object)
        - `balance` (number)
        - `service_fee` (number)
        - `total` (number)
        - `credit` (number)
      - `per_machine` (array)
        - `items` (object)
          - `machine_id` (integer)
          - `gpu_earn` (number)
          - `sto_earn` (number)
          - `bwu_earn` (number)
          - `bwd_earn` (number)
      - `per_day` (array)
        - `items` (object)
          - `day` (integer)
          - `gpu_earn` (number)
          - `sto_earn` (number)
          - `bwu_earn` (number)
          - `bwd_earn` (number)
- `400`: Bad Request - Invalid input syntax
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
