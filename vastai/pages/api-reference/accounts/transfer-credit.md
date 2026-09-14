> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/commands/transfer_credit](https://docs.vast.ai/api-reference/accounts/transfer-credit)

# transfer credit

`PUT /api/v0/commands/transfer_credit`

Transfers specified amount of credits from the authenticated user's account to another user's account.

The recipient can be specified by either email address or user ID.

CLI Usage: `vastai transfer credit <recipient_email> <amount>`

**Request body**

**Responses**

- `200`: Transfer completed successfully
- `400`: Bad Request
- `401`: Unauthorized
- `429`: Too Many Requests
