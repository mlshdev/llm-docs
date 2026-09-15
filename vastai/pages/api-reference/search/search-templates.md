> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/template](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/api-reference/openapi.yaml%23get%20/api/v0/template)
> Canonical documentation: https://docs.vast.ai/api-reference/search/search-templates

# search templates

`GET /api/v0/template`

Searches for templates using filter-based queries.

Use `select_filters` to search by specific field conditions. Results include both your own templates and publicly shared templates.

**Available filter fields:** `creator_id`, `created_at`, `count_created`, `default_tag`, `docker_login_repo`, `id`, `image`, `jup_direct`, `hash_id`, `name`, `recent_create_date`, `recommended_disk_space`, `recommended`, `ssh_direct`, `tag`, `use_ssh`

**Operators:** `eq`, `neq`, `lt`, `lte`, `gt`, `gte`, `in`, `notin`

For detailed usage, see [Creating and Using Templates with API](https://docs.vast.ai/api-reference/creating-and-using-templates-with-api).

CLI Usage: `vastai search templates`

**Authentication:** `BearerAuth`

**Parameters**

- `select_filters` (query; string): JSON-encoded filter object. Format: `{"field": {"op": value}}`. Example: `{"use_ssh": {"eq": true}, "recommended": {"eq": true}}` or `{"count_created": {"gt": 100}}`
- `select_cols` (query; string): JSON-encoded array of columns to return. Example: `["*"]` for all columns or `["id", "name", "hash_id"]` for specific columns.
- `order_by` (query; string): Column to order the results by.

**Responses**

- `200`: Successfully retrieved templates
  - Media type: `application/json`
    - Schema (object)
      - `success` (required; boolean)
        - Example: `true`
      - `templates_found` (required; integer): Number of templates found.
        - Example: `5`
      - `templates` (required; array): List of templates matching the search criteria.
        - `items` (object)
          - `id` (integer): Template ID
          - `name` (string): Template name
          - `image` (string): Docker image name
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=3.0`
