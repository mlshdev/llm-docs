> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/webhooks](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/api-reference/openapi.yaml%23get%20/api/v0/webhooks)
> Canonical documentation: https://docs.vast.ai/api-reference/notifications/list-notification-webhooks

# list notification webhooks

`GET /api/v0/webhooks`

List notification webhooks for the authenticated user.

**Authentication:** `BearerAuth`

**Responses**

- `200`: Webhooks returned successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `webhooks` (array)
        - `items` (object)
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
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
