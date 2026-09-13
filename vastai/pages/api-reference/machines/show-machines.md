> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/machines](https://docs.vast.ai/api-reference/machines/show-machines)

# show machines

`GET /api/v0/machines`

Fetches data for multiple machines associated with the authenticated user.

CLI Usage: `vastai show machines [--user_id <user_id>]`

**Parameters**

- `user_id` (query, required): The ID of the user whose machines are being requested.

**Responses**

- `200`: A list of machines
- `401`: Unauthorized - User authentication failed
- `429`: Too Many Requests - Rate limit exceeded
