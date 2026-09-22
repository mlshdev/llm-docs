> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/instances/prepay/{id}](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/api-reference/openapi.yaml%23put%20/api/v0/instances/prepay/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/instances/prepay-instance

# prepay instance

`PUT /api/v0/instances/prepay/{id}`

Deposit credits into a reserved instance to receive usage discounts.
The discount rate is calculated based on how many months of usage the prepaid amount covers. Maximum discount is typically 40%.

CLI Usage: `vastai prepay instance <id> <amount>`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): ID of the instance to prepay for

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `amount` (required; number; format: float): Amount of credits to prepay
      - Example: `500`

**Responses**

- `200`: Successfully applied prepayment
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `timescale` (number; format: float): Number of months the prepayment will cover
        - Example: `3.5`
      - `discount_rate` (number; format: float): Applied discount rate (0.0-0.4)
        - Example: `0.3`
- `400`: Invalid instance ID
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `msg` (string)
        - Example: `No such instance`
- `411`: Insufficient credit balance
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `msg` (string)
        - Example: `Insufficient credit`
- `429`: Rate limit exceeded
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=2.0`
