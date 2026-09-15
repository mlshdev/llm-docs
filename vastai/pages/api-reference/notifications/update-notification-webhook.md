> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/webhooks/{id}](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/api-reference/openapi.yaml%23put%20/api/v0/webhooks/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/notifications/update-notification-webhook

# update notification webhook

`PUT /api/v0/webhooks/{id}`

Update a notification webhook's name, URL, or event subscriptions.

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): Webhook ID.

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `name` (nullable; maximum length: `120`)
    - `webhook_url` (string; format: uri; maximum length: `2048`)
    - `event_types` (array; minimum items: `1`)
      - `items` (string)
  - Example: `{"name":"Primary ops notifications","event_types":["client:low_credit","client:outbid"]}`

**Responses**

- `200`: Webhook updated successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `webhook` (object)
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
      - `enabled_notification_preferences` (array)
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
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
