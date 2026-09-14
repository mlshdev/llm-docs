> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/instances/prepay/{id}](https://docs.vast.ai/api-reference/instances/prepay-instance)

# prepay instance

`PUT /api/v0/instances/prepay/{id}`

Deposit credits into a reserved instance to receive usage discounts.
The discount rate is calculated based on how many months of usage the prepaid amount covers. Maximum discount is typically 40%.

CLI Usage: `vastai prepay instance <id> <amount>`

**Parameters**

- `id` (path, required): ID of the instance to prepay for

**Request body**

**Responses**

- `200`: Successfully applied prepayment
- `400`: Invalid instance ID
- `411`: Insufficient credit balance
- `429`: Rate limit exceeded
