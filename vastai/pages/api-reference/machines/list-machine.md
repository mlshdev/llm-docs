> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/machines/create_asks](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/api-reference/openapi.yaml%23put%20/api/v0/machines/create_asks)
> Canonical documentation: https://docs.vast.ai/api-reference/machines/list-machine

# list machine

`PUT /api/v0/machines/create_asks`

Creates or updates ask contracts for a machine to list it for rent on the vast.ai platform.
Allows setting pricing, minimum GPU requirements, end date and discount rates.

CLI Usage: `vastai list machine <machine_id> [options]`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `machine` (required; integer): ID of the machine to list
    - `price_gpu` (number; format: float): Price per GPU per hour
    - `price_disk` (number; format: float): Price per GB of disk storage
    - `price_inetu` (number; format: float): Price per GB of upload bandwidth
    - `price_inetd` (number; format: float): Price per GB of download bandwidth
    - `price_min_bid` (number; format: float): Minimum bid price allowed
    - `min_chunk` (integer; default: `1`): Minimum number of GPUs that must be rented together
    - `end_date` (number; format: float): Unix timestamp for when the listing expires
    - `credit_discount_max` (number; format: float): Maximum discount rate allowed for prepaid credits

**Responses**

- `200`: Successful response
  - Media type: `application/json`
    - Schema (object)
      - Example: `{"success":true,"extended":2}`
      - `success` (boolean)
      - `extended` (integer): Number of client contracts extended to new end date
      - `msg` (string): Status message if success is false
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `error` (string)
        - Example: `invalid_args`
      - `msg` (string)
        - Example: `Invalid machine id or parameters`
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `error` (string)
        - Example: `not_authorized`
      - `msg` (string)
        - Example: `Only machine owner can create ask contracts`
