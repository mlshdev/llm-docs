> Pinned source for Trigger.dev v4.8.3: [docs/management/webhooks/list-deliveries.mdx](https://github.com/triggerdotdev/trigger.dev/blob/645cc47dd2eeb99387f604cad2c90ba2ef568680/docs/management/webhooks/list-deliveries.mdx)
> Canonical documentation: https://trigger.dev/docs/management/webhooks/list-deliveries

# List webhook deliveries

`GET /api/v1/webhooks/deliveries`

**List webhook deliveries**

List the verified events providers sent to the environment's endpoints, newest first. Filter by endpoint, status and time range, and page with `page[after]` and `page[before]`.

**Authentication:** `secretKey`

**Parameters**

- `page[size]` (query; integer; minimum: `1`; maximum: `100`): Number of deliveries to return per page (1 to 100).
- `page[after]` (query; string): Return older deliveries, after this cursor (from `pagination.next` in a previous response).
- `page[before]` (query; string): Return newer deliveries, before this cursor (from `pagination.previous` in a previous response).
- `filter[endpoint]` (query; string): Comma-separated endpoints, each a declared id or a `wh_` id.
  - Example: `stripe,github`
- `filter[status]` (query; string): Comma-separated statuses. Allowed values: `pending`, `processing`, `succeeded`, `failed`, `filtered`, `unmatched`.
  - Example: `failed,filtered`
- `filter[period]` (query; string): A duration back from now, such as `1h` or `7d`.
  - Example: `24h`
- `filter[from]` (query; string; format: date-time): Only deliveries created at or after this ISO 8601 timestamp.
- `filter[to]` (query; string; format: date-time): Only deliveries created at or before this ISO 8601 timestamp.

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `data` (required; array)
        - `items` (object)
          - `id` (required; string): The delivery's id.
            - Example: `whd_1234`
          - `endpoint` (required; object; nullable): The endpoint the delivery arrived on, or `null` if it has since been removed.
            - `id` (required; string)
              - Example: `wh_cm1a2b3c4d5e6f`
            - `declaredId` (required; string)
              - Example: `stripe`
          - `status` (required; string; enum: `pending`, `processing`, `succeeded`, `failed`, `filtered`, `unmatched`): `pending` is waiting to be routed (including after a retryable error), `processing` is being routed, `succeeded` reached at least one subscriber or waiting run with nothing failed, `failed` means a subscriber failed after its retries, `filtered` means no subscriber's filter took it, and `unmatched` means runs were waiting on the endpoint but none matched and no subscriber took it.
          - `externalDeliveryId` (required; string): The provider's id for the delivery, such as a Stripe event id or GitHub's `X-GitHub-Delivery` header.
            - Example: `evt_1PqR2s3T4u5V6w`
          - `isTest` (required; boolean): Whether the request carried an `x-trigger-test` header, as test sends from the dashboard do.
          - `createdAt` (required; string; format: date-time)
          - `processedAt` (required; format: date-time; nullable)
      - `pagination` (required; object)
        - `next` (string): Pass as `page[after]` to get the next, older page.
        - `previous` (string): Pass as `page[before]` to get the previous, newer page.
- `400`: Invalid query parameters, such as an unknown status
- `401`: Unauthorized request
