> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/commands/transfer_credit](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/api-reference/openapi.yaml%23put%20/api/v0/commands/transfer_credit)
> Canonical documentation: https://docs.vast.ai/api-reference/accounts/transfer-credit

# transfer credit

`PUT /api/v0/commands/transfer_credit`

Transfers specified amount of credits from the authenticated user's account to another user's account.

The recipient can be specified by either email address or user ID.

CLI Usage: `vastai transfer credit <recipient_email> <amount>`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `recipient` (required; string): Email address or user ID of the recipient
      - Example: `user@example.com`
    - `amount` (required; number; format: float; minimum: `0.01`): Amount of credits to transfer (must be positive)
      - Example: `100`
    - `client_id` (string): Client identifier (usually "me")
      - Example: `me`
    - `apikey_id` (string): Optional API key identifier for audit logging

**Responses**

- `200`: Transfer completed successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string; enum: `invalid_args`, `invalid_params`, `invalid_recipient`, `insufficient_balance`)
      - `msg` (string)
        - Example: `Invalid amount`
- `401`: Unauthorized
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
