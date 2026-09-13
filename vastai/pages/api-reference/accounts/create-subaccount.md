> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/users](https://docs.vast.ai/api-reference/accounts/create-subaccount)

# create subaccount

`POST /api/v0/users`

Creates either a standalone user account or a subaccount under a parent account. Subaccounts can be restricted to host-only functionality.

CLI Usage: `vastai create subaccount --email <email> --username <username> --password <password> [--type host]`

**Request body**

**Responses**

- `200`: Account created successfully
- `400`: Bad Request
- `403`: Forbidden - billing blacklisted
- `409`: User already exists
- `429`: Too Many Requests
