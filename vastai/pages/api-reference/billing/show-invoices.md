> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v1/invoices](https://docs.vast.ai/api-reference/billing/show-invoices)

# show invoices

`GET /api/v1/invoices`

Returns Stripe top-ups, transfers, payouts, coinbase payments, and other billing transactions. For per-instance cost breakdowns, use [show charges](/api-reference/billing/show-charges) instead.

CLI: `vastai show invoices-v1 --invoices`

**Parameters**

- `select_filters` (query, required): **`when`** (required). Date range in unix seconds (UTC). Operators: `gte`, `gt`, `lte`, `lt`. **`service`** (optional). Filter by payment service: `transfer`, `stripe_payments`, `bitpay`, `coinbase`, `crypto.com`, `instance_prepay`, `paypal_manual`, `wise_manual`. Operators: `eq`, `neq`, `in`, `notin`. **Examples**: ```json // January 2026, all services {"when":{"gte":1767225600,"lte":1769903999}} // Only PayPal and Wise payouts {"when":{"gte":1767225600,"lte":1769903999},"service":{"in":["paypal_manual","wise_manual"]}} // Everything except crypto {"when":{"gte":1767225600,"lte":1769903999},"service":{"notin":["bitpay","coinbase","crypto.com"]}} ```
- `order_by` (query): Sort results by column. Columns: `paid_on`, `amount_cents`, `when`. Direction: `asc` or `desc` (default `desc`). Example: `[{"col":"paid_on","dir":"desc"}]`
- `latest_first` (query): Sort newest invoices first. If `order_by` is also set, `order_by` takes precedence.
- `limit` (query): Max results per page.
- `after_token` (query): Pass the `next_token` value from the previous response to fetch the next page of results. When the response returns `next_token: null`, there are no more pages.

**Responses**

- `200`: Invoice results. A missing or invalid `when` range also returns HTTP 200 with `success: false`.
- `400`: Invalid request, e.g. malformed `after_token`.
- `401`: Unauthorized. May be returned in framework-level authentication failure cases.
- `403`: Forbidden. Returned when no `Authorization` header is provided.
- `404`: Not Found. Returned when the supplied API key does not match any user.
- `429`: Too Many Requests
