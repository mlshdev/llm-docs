> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/webhooks/{id}](https://docs.vast.ai/api-reference/notifications/delete-notification-webhook)

# delete notification webhook

`DELETE /api/v0/webhooks/{id}`

Delete a notification webhook.

**Parameters**

- `id` (path, required): Webhook ID.

**Responses**

- `200`: Webhook deleted successfully
- `401`: Unauthorized
- `404`: Not Found
