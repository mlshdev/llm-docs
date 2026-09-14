> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/webhooks/{id}/test](https://docs.vast.ai/api-reference/notifications/test-notification-webhook)

# test notification webhook

`POST /api/v0/webhooks/{id}/test`

Send a test delivery to the webhook URL using the same request format and signature headers as normal webhook delivery.

**Parameters**

- `id` (path, required): Webhook ID.

**Responses**

- `200`: Test delivery accepted
- `400`: Bad Request
- `401`: Unauthorized
- `404`: Not Found
