> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v1/invoices](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/api-reference/openapi.yaml%23get%20/api/v1/invoices)
> Canonical documentation: https://docs.vast.ai/api-reference/billing/show-invoices

# show invoices

`GET /api/v1/invoices`

Returns Stripe top-ups, transfers, payouts, coinbase payments, and other billing transactions. For per-instance cost breakdowns, use [show charges](https://docs.vast.ai/api-reference/billing/show-charges) instead.

CLI: `vastai show invoices-v1 --invoices`

**Authentication:** `BearerAuth`

**Parameters**

- `select_filters` (query; required; string): **`when`** (required). Date range in unix seconds (UTC). Operators: `gte`, `gt`, `lte`, `lt`. **`service`** (optional). Filter by payment service: `transfer`, `stripe_payments`, `bitpay`, `coinbase`, `crypto.com`, `instance_prepay`, `paypal_manual`, `wise_manual`. Operators: `eq`, `neq`, `in`, `notin`. **Examples**: `json // January 2026, all services {"when":{"gte":1767225600,"lte":1769903999}} // Only PayPal and Wise payouts {"when":{"gte":1767225600,"lte":1769903999},"service":{"in":["paypal_manual","wise_manual"]}} // Everything except crypto {"when":{"gte":1767225600,"lte":1769903999},"service":{"notin":["bitpay","coinbase","crypto.com"]}} `
- `order_by` (query; string): Sort results by column. Columns: `paid_on`, `amount_cents`, `when`. Direction: `asc` or `desc` (default `desc`). Example: `[{"col":"paid_on","dir":"desc"}]`
- `latest_first` (query; boolean; default: `true`): Sort newest invoices first. If `order_by` is also set, `order_by` takes precedence.
- `limit` (query; integer; default: `60`; minimum: `1`): Max results per page.
- `after_token` (query; string): Pass the `next_token` value from the previous response to fetch the next page of results. When the response returns `next_token: null`, there are no more pages.

**Responses**

- `200`: Invoice results. A missing or invalid `when` range also returns HTTP 200 with `success: false`.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `count` (integer): Number of invoices returned in this page.
        - Example: `2`
      - `total` (integer): Total number of invoices matching the filters.
        - Example: `42`
      - `next_token` (nullable): Token for the next page. `null` when no more pages.
        - Example: `eyJ2YWx1ZXMiOiB7ImlkIjogMjE4OTM4N30sICJvc19wYWdlIjogMH0=`
      - `results` (array): List of invoice entries.
        - `items` (object)
          - `start` (number): Invoice creation time (unix seconds UTC).
            - Example: `1761980044`
          - `end` (nullable): Payment time (unix seconds UTC). `null` if unpaid.
            - Example: `1761980301`
          - `type` (string): Invoice type. `credit`, `transfer`, `payout`, `refund`, `reserved`.
            - Example: `credit`
          - `source` (string): Payment source, e.g. `stripe`, `coinbase`, or sender email for transfers.
            - Example: `stripe`
          - `description` (string)
            - Example: `Manual Billing from MASTERCARD ...7376`
          - `amount` (number): Amount in dollars. Negative for charges, positive for transfers/payouts.
            - Example: `-25`
          - `metadata` (object): Additional details depending on service type.
            - `invoice_id` (integer)
              - Example: `2185418`
            - `service` (string)
              - Example: `stripe_payments`
          - `items` (array): Always empty for invoices.
            - Example: `[]`
    - Example `success`: `{"success":true,"count":2,"total":42,"next_token":"eyJ2YWx1ZXMiOiB7ImlkIjogMjE4OTM4N30sICJvc19wYWdlIjogMH0=","results":[{"start":1761980044,"end":1761980301,"type":"credit","source":"stripe","description":"Manual Billing from MASTERCARD ...7376","amount":-25,"metadata":{"invoice_id":2185418,"service":"stripe_payments"},"items":[]}]}`
    - Example `invalid_date_range`: `{"success":false,"error":"Invalid date range","count":0,"total":0,"results":[],"next_token":null}`
- `400`: Invalid request, e.g. malformed `after_token`.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
    - Example: `{"success":false,"error":"invalid_token","msg":"Invalid pagination token"}`
- `401`: Unauthorized. May be returned in framework-level authentication failure cases.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `403`: Forbidden. Returned when no `Authorization` header is provided.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
    - Example: `{"success":false,"error":"auth_error","msg":"This action requires login."}`
- `404`: Not Found. Returned when the supplied API key does not match any user.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
    - Example: `{"success":false,"error":"auth_error","msg":"Invalid user key"}`
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=3.0`
