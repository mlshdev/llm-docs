> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/asks/{id}](https://docs.vast.ai/api-reference/instances/create-instance)

# create instance

`PUT /api/v0/asks/{id}`

Creates a new instance by accepting an "ask" contract from a provider.

- Use the search offers endpoint to discover available machines.
- If `template_id` is provided, those template defaults are either merged or overridden by parameters specified in the request body.

**Template Precedence Rules:**
- **Scalar fields** (image, disk, runtype, etc.): Request value overrides template value
- **`env`**: Merged by key. Request values win on key conflicts
- **`extra_filters`**: Merged by key. Request values win on key conflicts

For detailed template usage, see [Creating and Using Templates with API](/api-reference/creating-and-using-templates-with-api).

CLI Usage: `vastai create instance <offer_id> <image> [options]`

**Parameters**

- `id` (path, required): ID of the offer to accept (ask_id)

**Request body**

**Responses**

- `200`: Instance created successfully
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Offer not found or not available
- `410`: Offer no longer available (when cancel_unavail is true and instance cannot start)
- `429`: Too Many Requests
