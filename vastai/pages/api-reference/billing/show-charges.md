> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/charges](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/api-reference/openapi.yaml%23get%20/api/v0/charges)
> Canonical documentation: https://docs.vast.ai/api-reference/billing/show-charges

# show charges

`GET /api/v0/charges`

Shows charges per instance, including GPU, storage, and bandwidth. For invoice/payment records (Stripe top-ups, transfers, payouts), use [show invoices](https://docs.vast.ai/api-reference/billing/show-invoices) instead.

CLI: `vastai show invoices-v1 --charges`

**Authentication:** `BearerAuth`

**Parameters**

- `select_filters` (query; required; string): **`day`** (required). Date range in unix seconds (UTC). Operators: `gte`, `lte`. **`type`** (optional). Filter by contract type: `instance`, `volume`, `serverless`. Operator: `in`. **Examples**: `json // All charges in January 2026 {"day":{"gte":1767225600,"lte":1769903999}} // Only instance charges {"day":{"gte":1767225600,"lte":1769903999},"type":{"in":["instance"]}} // Volumes and serverless only {"day":{"gte":1767225600,"lte":1769903999},"type":{"in":["volume","serverless"]}} `
- `format` (query; string; enum: `table`, `tree`; default: `table`): - `table` (default) flat list of per-contract rows with `type: "instance"` or `"volume"`. - `tree` serverless contracts are collapsed under endpoint/workergroup wrappers with `type: "serverless"` and `source: "endpoint-<id>"` / `"workergroup-<id>"`. Regular instances and volumes are unchanged.
- `latest_first` (query; boolean; default: `true`): Sort by most recent charges first.
- `limit` (query; integer; default: `100`; minimum: `1`): Max results per page. Server maximum 500.
- `after_token` (query; string): Pass the `next_token` value from the previous response to fetch the next page of results. When the response returns `next_token: null`, there are no more pages.

**Responses**

- `200`: Paginated per-instance charge results
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `count` (integer): Number of contracts returned in this page.
        - Example: `2`
      - `total` (integer): Total number of contracts matching the filters.
        - Example: `14`
      - `next_token` (nullable): Pagination cursor for the next page. `null` when no more pages.
        - Example: `eyJ2YWx1ZXMiOiB7ImlkIjogMTIzNDU2Nzh9fQ==`
      - `results` (array): List of per-contract charge entries.
        - `items` (object)
          - `start` (integer): Contract start time (unix seconds UTC).
            - Example: `1730419200`
          - `end` (integer): Contract end time (unix seconds UTC).
            - Example: `1730678400`
          - `type` (string): Contract type. `instance` or `volume` in table format, or `serverless` (wrapper) in tree format.
            - Example: `instance`
          - `source` (string): Identifier in the form `{type}-{id}`. For tree-format serverless wrappers, uses `endpoint-<id>` or `workergroup-<id>`.
            - Example: `instance-12345678`
          - `description` (string)
            - Example: `Instance 12345678 Charges - 4 days`
          - `amount` (number; format: float): Total charge for this contract (rounded to 3 decimals).
            - Example: `38.421`
          - `metadata` (object): Optional instance metadata. Keys present only when non-null on the contract.
            - `template_id` (integer)
              - Example: `101`
            - `label` (string)
              - Example: `my-training-job`
            - `endpoint_id` (integer)
              - Example: `19392`
            - `workergroup_id` (integer)
              - Example: `25355`
          - `items` (array): Per-charge-type breakdown (`gpu`, `disk`, `bwd`, `bwu`). Empty for tree-format wrappers above the contract level.
            - `items` (object)
              - `start` (integer)
                - Example: `1730419200`
              - `end` (integer)
                - Example: `1730678400`
              - `type` (string; enum: `gpu`, `disk`, `bwd`, `bwu`)
                - Example: `gpu`
              - `source` (nullable)
                - Example: `null`
              - `description` (string)
                - Example: `96.000 hours at $0.389/hour`
              - `amount` (number; format: float)
                - Example: `37.344`
              - `metadata` (object)
                - Example: `{}`
              - `items` (array)
                - Example: `[]`
- `400`: Invalid request. Returned when the required `day.gte` / `day.lte` filters are missing, or when the supplied `after_token` cannot be decoded.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
    - Example `missing_date_range`: `{"success":false,"msg":"Must provide both 'day' gte and lte filters for instance charges"}`
    - Example `invalid_pagination_token`: `{"success":false,"error":"invalid_token","msg":"Invalid pagination token"}`
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
        - Example: `API requests too frequent endpoint threshold=1.0`
