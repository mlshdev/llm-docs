> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/instances/{id}](https://docs.vast.ai/api-reference/instances/show-instance)

# show instance

`GET /api/v0/instances/{id}`

Retrieves the details of a specific instance for the authenticated user.

CLI Usage: `vastai show instance [--api-key <api_key>] [--raw]`

**Parameters**

- `id` (path, required): The instance (contract) ID to retrieve.

**Responses**

- `200`: Success response with instance details.
- `400`: Bad Request – Invalid instance ID or invalid arguments.
- `401`: Unauthorized – Invalid or missing authentication.
- `429`: Too Many Requests – API requests are too frequent.
