> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/webhooks](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/api-reference/openapi.yaml%23post%20/api/v0/webhooks)
> Canonical documentation: https://docs.vast.ai/api-reference/notifications/create-notification-webhook

# create notification webhook

`POST /api/v0/webhooks`

Create a notification webhook for one or more notification type keys. The response includes the signing secret; store it immediately.

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `name` (nullable; maximum length: `120`)
    - `webhook_url` (required; string; format: uri; maximum length: `2048`)
    - `event_types` (required; array; minimum items: `1`)
      - `items` (string)
  - Example: `{"name":"Ops notifications","webhook_url":"https://example.com/vast/webhooks","event_types":["client:low_credit","host:machine_offline"]}`

**Responses**

- `200`: Webhook created successfully
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
      - `enabled_notification_preferences` (array)
        - Example: `["client:low_credit"]`
        - `items` (string)
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
