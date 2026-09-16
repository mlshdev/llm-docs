> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/webhooks/{id}/rotate-secret](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/api-reference/openapi.yaml%23post%20/api/v0/webhooks/%7Bid%7D/rotate-secret)
> Canonical documentation: https://docs.vast.ai/api-reference/notifications/rotate-notification-webhook-secret

# rotate notification webhook secret

`POST /api/v0/webhooks/{id}/rotate-secret`

Rotate the webhook signing secret. Store the returned secret immediately.

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): Webhook ID.

**Responses**

- `200`: Webhook secret rotated successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `webhook`
        - allOf:
          - `variant 1` (object)
            - `id` (integer)
              - Example: `42`
            - `user_id` (integer)
              - Example: `123`
            - `name` (nullable)
              - Example: `Ops notifications`
            - `webhook_url` (string; format: uri)
              - Example: `https://example.com/vast/webhooks`
            - `event_types` (array)
              - Example: `["client:low_credit","host:machine_offline"]`
              - `items` (string)
            - `created_at` (number; format: float)
              - Example: `1772490000`
            - `updated_at` (number; format: float)
              - Example: `1772490000`
          - `variant 2` (object)
            - `webhook_secret` (string): Secret used to verify `X-Vast-Signature-256`.
              - Example: `<WEBHOOK_SECRET>`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
