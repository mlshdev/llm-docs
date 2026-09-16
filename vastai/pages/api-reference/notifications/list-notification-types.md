> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/notification-types](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/api-reference/openapi.yaml%23get%20/api/v0/notification-types)
> Canonical documentation: https://docs.vast.ai/api-reference/notifications/list-notification-types

# list notification types

`GET /api/v0/notification-types`

List the notification types available to the authenticated user, including their display names, contexts, topics, and default channel settings.

**Authentication:** `BearerAuth`

**Responses**

- `200`: Notification types returned successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `notification_types` (array)
        - `items` (object)
          - `key` (string): Full notification type key.
            - Example: `client:low_credit`
          - `slug` (string)
            - Example: `low_credit`
          - `context` (string; enum: `client`, `host`)
          - `topic` (nullable)
            - Example: `billing`
          - `category` (string)
            - Example: `billing`
          - `display_name` (string)
            - Example: `Low balance notifications`
          - `default_preferences` (object)
            - Example: `{"email":true,"webhooks":false}`
            - `additional properties` (boolean)
          - `mandatory_email` (boolean)
            - Example: `false`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
