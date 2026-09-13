> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/auth/apikeys](https://docs.vast.ai/api-reference/accounts/show-api-keys)

# show api keys

`GET /api/v0/auth/apikeys`

Retrieves all API keys associated with the authenticated user.

CLI Usage: `vastai show api-keys`

**Responses**

- `200`: API keys successfully retrieved
- `400`: Bad Request - API Key not provided or not found
- `401`: Unauthorized - Invalid or missing authentication
- `429`: Too Many Requests
