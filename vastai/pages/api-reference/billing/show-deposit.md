> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/instances/balance/{id}](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/api-reference/openapi.yaml%23get%20/api/v0/instances/balance/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/billing/show-deposit

# show deposit

`GET /api/v0/instances/balance/{id}`

Retrieves the deposit details for a specified instance.

CLI Usage: `vastai show deposit <id>`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): The ID of the instance.

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `refundable_deposit` (number): The refundable deposit amount.
        - Example: `100`
      - `total_discount` (number): The total discount applied.
        - Example: `10`
      - `discount_months` (integer): The number of months the discount applies.
        - Example: `3`
- `404`: Instance Not Found
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
        - Example: `API requests too frequent endpoint threshold=3.0`
