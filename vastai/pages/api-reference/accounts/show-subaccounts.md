> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/subaccounts](https://docs.vast.ai/api-reference/accounts/show-subaccounts)

# show subaccounts

`GET /api/v0/subaccounts`

Retrieve a list of subaccounts associated with the authenticated user's account.

CLI Usage: `vastai show subaccounts`

**Responses**

- `200`: A list of subaccounts.
- `401`: Unauthorized access due to invalid or missing authentication token.
- `429`: Too Many Requests
