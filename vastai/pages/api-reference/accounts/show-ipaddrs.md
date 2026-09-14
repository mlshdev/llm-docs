> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/users/{user_id}/ipaddrs](https://docs.vast.ai/api-reference/accounts/show-ipaddrs)

# show ipaddrs

`GET /api/v0/users/{user_id}/ipaddrs`

This endpoint retrieves the history of IP address accesses for the authenticated user.

CLI Usage: `vastai show ipaddrs`

**Parameters**

- `user_id` (path, required): The ID of the user whose IP address history is being retrieved.

**Responses**

- `200`: Success response with IP address history
- `401`: Unauthorized
- `403`: Forbidden
- `429`: Too Many Requests
