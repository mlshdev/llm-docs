> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/template](https://docs.vast.ai/api-reference/search/search-templates)

# search templates

`GET /api/v0/template`

Searches for templates using filter-based queries.

Use `select_filters` to search by specific field conditions. Results include both your own templates and publicly shared templates.

**Available filter fields:** `creator_id`, `created_at`, `count_created`, `default_tag`, `docker_login_repo`, `id`, `image`, `jup_direct`, `hash_id`, `name`, `recent_create_date`, `recommended_disk_space`, `recommended`, `ssh_direct`, `tag`, `use_ssh`

**Operators:** `eq`, `neq`, `lt`, `lte`, `gt`, `gte`, `in`, `notin`

For detailed usage, see [Creating and Using Templates with API](/api-reference/creating-and-using-templates-with-api).

CLI Usage: `vastai search templates`

**Parameters**

- `select_filters` (query): JSON-encoded filter object. Format: `{"field": {"op": value}}`. Example: `{"use_ssh": {"eq": true}, "recommended": {"eq": true}}` or `{"count_created": {"gt": 100}}`
- `select_cols` (query): JSON-encoded array of columns to return. Example: `["*"]` for all columns or `["id", "name", "hash_id"]` for specific columns.
- `order_by` (query): Column to order the results by.

**Responses**

- `200`: Successfully retrieved templates
- `400`: Bad Request
- `401`: Unauthorized
- `429`: Too Many Requests
