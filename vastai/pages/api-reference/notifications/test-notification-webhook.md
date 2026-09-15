> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/webhooks/{id}/test](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/api-reference/openapi.yaml%23post%20/api/v0/webhooks/%7Bid%7D/test)
> Canonical documentation: https://docs.vast.ai/api-reference/notifications/test-notification-webhook

# test notification webhook

`POST /api/v0/webhooks/{id}/test`

Send a test delivery to the webhook URL using the same request format and signature headers as normal webhook delivery.

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): Webhook ID.

**Responses**

- `200`: Test delivery accepted
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `msg` (string)
        - Example: `Test webhook delivered`
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
