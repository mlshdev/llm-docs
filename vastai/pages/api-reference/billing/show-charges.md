> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/charges](https://docs.vast.ai/api-reference/billing/show-charges)

# show charges

`GET /api/v0/charges`

Shows charges per instance, including GPU, storage, and bandwidth. For invoice/payment records (Stripe top-ups, transfers, payouts), use [show invoices](/api-reference/billing/show-invoices) instead.

CLI: `vastai show invoices-v1 --charges`

**Parameters**

- `select_filters` (query, required): **`day`** (required). Date range in unix seconds (UTC). Operators: `gte`, `lte`. **`type`** (optional). Filter by contract type: `instance`, `volume`, `serverless`. Operator: `in`. **Examples**: ```json // All charges in January 2026 {"day":{"gte":1767225600,"lte":1769903999}} // Only instance charges {"day":{"gte":1767225600,"lte":1769903999},"type":{"in":["instance"]}} // Volumes and serverless only {"day":{"gte":1767225600,"lte":1769903999},"type":{"in":["volume","serverless"]}} ```
- `format` (query): - `table` (default) flat list of per-contract rows with `type: "instance"` or `"volume"`. - `tree` serverless contracts are collapsed under endpoint/workergroup wrappers with `type: "serverless"` and `source: "endpoint-<id>"` / `"workergroup-<id>"`. Regular instances and volumes are unchanged.
- `latest_first` (query): Sort by most recent charges first.
- `limit` (query): Max results per page. Server maximum 500.
- `after_token` (query): Pass the `next_token` value from the previous response to fetch the next page of results. When the response returns `next_token: null`, there are no more pages.

**Responses**

- `200`: Paginated per-instance charge results
- `400`: Invalid request. Returned when the required `day.gte` / `day.lte` filters are missing, or when the supplied `after_token` cannot be decoded.
- `401`: Unauthorized. May be returned in framework-level authentication failure cases.
- `403`: Forbidden. Returned when no `Authorization` header is provided.
- `404`: Not Found. Returned when the supplied API key does not match any user.
- `429`: Too Many Requests
