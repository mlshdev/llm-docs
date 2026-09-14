> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/users/cloud_integrations](https://docs.vast.ai/api-reference/accounts/show-connections)

# show connections

`GET /api/v0/users/cloud_integrations`

Retrieves the list of cloud connections associated with the authenticated user.

CLI Usage: `vastai show connections`

**Responses**

- `200`: Success response
- `401`: Unauthorized - Invalid or missing authentication
- `429`: Too Many Requests
