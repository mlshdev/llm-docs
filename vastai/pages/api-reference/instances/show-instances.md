> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v1/instances](https://docs.vast.ai/api-reference/instances/show-instances)

# show instances

`GET /api/v1/instances`

Retrieve a paginated list of instances for the authenticated user.
Supports keyset pagination (max 25 per page), filtering, column selection, and sorting.

CLI Usage: `vastai show instances [OPTIONS] [--api-key API_KEY] [--raw]`

**Parameters**

- `limit` (query): Instances per page. Default 25, max 25. Values ≤ 0 are treated as 5.
- `after_token` (query): Keyset pagination cursor from the previous response's `next_token`. An invalid token returns a 400 error.
- `order_by` (query): JSON array of sort directives, e.g. `[{"col":"id","dir":"asc"}]`. Valid `dir` values: `asc`, `desc` (anything else treated as `asc`). `id` is always appended as a tiebreaker. Invalid column returns 400.
- `select_cols` (query): JSON array of column names to return, e.g. `["id","label","actual_status"]`. Use `["*"]` for all columns (default). Unknown column names are returned as `null`.
- `select_filters` (query): JSON object of column filters. Supported operators: `eq`, `neq`, `gt`, `gte`, `lt`, `lte`, `in`, `notin`. Filterable columns: `actual_status`, `gpu_name`, `verification`, `id`, `label`, and other columns stored directly on the contract record. Computed fields (e.g. `dph_total`, `num_gpus`) are not filterable and return 400.

**Responses**

- `200`: Paginated list of instances
- `400`: Bad request. Returned for invalid filter column/operator, invalid `order_by` column, or invalid `after_token`.
- `401`: Unauthorized
- `429`: Too Many Requests
