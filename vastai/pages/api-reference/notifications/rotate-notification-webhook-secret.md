> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/webhooks/{id}/rotate-secret](https://docs.vast.ai/api-reference/notifications/rotate-notification-webhook-secret)

# rotate notification webhook secret

`POST /api/v0/webhooks/{id}/rotate-secret`

Rotate the webhook signing secret. Store the returned secret immediately.

**Parameters**

- `id` (path, required): Webhook ID.

**Responses**

- `200`: Webhook secret rotated successfully
- `401`: Unauthorized
- `404`: Not Found
