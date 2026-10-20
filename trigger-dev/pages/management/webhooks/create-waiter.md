> Pinned source for Trigger.dev v4.7.6: [docs/management/webhooks/create-waiter.mdx](https://github.com/triggerdotdev/trigger.dev/blob/166db1ca0781345894af115bc877081a9546a44c/docs/management/webhooks/create-waiter.mdx)
> Canonical documentation: https://trigger.dev/docs/management/webhooks/create-waiter

# Create a webhook waiter

`POST /api/v1/webhooks/endpoints/{endpointId}/waiters`

**Create a webhook waiter**

**Private beta:** [request access](https://trigger.dev/webhooks-beta) to use webhooks.
Create a waiter on an endpoint. A waiter is a waitpoint that completes when a matching delivery arrives on the endpoint, so a run waiting on its id resumes with the verified event. It only matches deliveries that arrive after it was created. Omit `match` to get a waiter with its own `url`, for providers that take a webhook URL per request.

**Authentication:** `secretKey`

**Parameters**

- `endpointId` (path; required; string): The endpoint's declared id (the `id` passed to `webhooks.endpoint.define`) or its `wh_` id. A value starting with `wh_` is always a generated id, since declared ids can't start with `wh_`. A declared id names the endpoint's declared instance in the key's environment.
  - Example: `stripe`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `match` (object): Up to five paths, each mapped to the value it must equal. `event.*` reads the event body, `header.*` a request header (case-insensitive) and `webhook.*` the endpoint (`id`, `source`, `externalRef`, `tenantId` or `deliveryId`). Omit it to create a waiter with its own `url`.
      - Example: `{"event.type":"payment_intent.succeeded","event.data.object.metadata.orderId":"order_123"}`
      - `additional properties`
        - oneOf:
          - `variant 1` (string)
          - `variant 2` (number)
          - `variant 3` (boolean)
    - `filter` (string): A [filter](https://trigger.dev/docs/webhooks/filters) the event must also pass, checked after `match`.
      - Example: `event.data.object.amount > 1000`
    - `timeout` (string): A duration such as `30m` or `1h`, or an ISO 8601 date. Defaults to 24 hours, up to 90 days.
      - Example: `1h`
    - `tags`: Up to 10 tags, added to the `webhook:<endpoint id>` tag every waiter gets.
      - oneOf:
        - `variant 1` (string)
        - `variant 2` (array)
          - `items` (string)
    - `idempotencyKey` (string): A create with a key already used in the environment returns the original waiter with `isCached: true`, even if it has completed.
    - `idempotencyKeyTTL` (string): How long the idempotency key lasts, such as `1h` or `30d`.

**Responses**

- `200`: Waiter created, or the existing waiter for this idempotency key
  - Media type: `application/json`
    - Schema (object)
      - `id` (required; string): The waiter's id, which is also its waitpoint id. Wait on it with `webhooks.waiter.wait()` or `wait.forToken()`.
        - Example: `waitpoint_abc123`
      - `url` (string): Only for a waiter created without `match`: the URL to give the provider as its per-request webhook. A delivery to it is verified with the endpoint's source and resumes only this waiter.
      - `expiresAt` (required; string; format: date-time): When the waiter times out.
      - `isCached` (required; boolean): `true` if an existing waiter was returned for the same `idempotencyKey`.
- `401`: Unauthorized request
- `404`: No active endpoint with this id in the environment's current deployment
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
      - `code` (required; string; enum: `webhook_waiter_limit`, `webhook_endpoint_not_found`, `webhook_filter_invalid`, `invalid_request`)
      - `reason` (string; enum: `environment_limit`, `endpoint_limit`, `shape_limit`, `timeout_too_long`): For `webhook_waiter_limit`, which limit was reached.
- `422`: A limit was reached (`webhook_waiter_limit`), the filter doesn't parse (`webhook_filter_invalid`), or the request is invalid (`invalid_request`), for example an unknown `match` path or a bad `timeout`
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
      - `code` (required; string; enum: `webhook_waiter_limit`, `webhook_endpoint_not_found`, `webhook_filter_invalid`, `invalid_request`)
      - `reason` (string; enum: `environment_limit`, `endpoint_limit`, `shape_limit`, `timeout_too_long`): For `webhook_waiter_limit`, which limit was reached.
