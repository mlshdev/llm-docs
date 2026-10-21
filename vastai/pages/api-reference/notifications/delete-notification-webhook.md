> Pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/webhooks/{id}](https://github.com/vast-ai/docs/blob/626149741ba46f195c775b2f4c89b7329de2d902/api-reference/openapi.yaml%23delete%20/api/v0/webhooks/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/notifications/delete-notification-webhook

# delete notification webhook

`DELETE /api/v0/webhooks/{id}`

Delete a notification webhook.

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): Webhook ID.

**Responses**

- `200`: Webhook deleted successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
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
