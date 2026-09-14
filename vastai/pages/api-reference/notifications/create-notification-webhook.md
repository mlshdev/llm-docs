> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/webhooks](https://docs.vast.ai/api-reference/notifications/create-notification-webhook)

# create notification webhook

`POST /api/v0/webhooks`

Create a notification webhook for one or more notification type keys. The response includes the signing secret; store it immediately.

**Request body**

**Responses**

- `200`: Webhook created successfully
- `400`: Bad Request
- `401`: Unauthorized
