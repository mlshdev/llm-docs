> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/webhooks/{id}](https://docs.vast.ai/api-reference/notifications/update-notification-webhook)

# update notification webhook

`PUT /api/v0/webhooks/{id}`

Update a notification webhook's name, URL, or event subscriptions.

**Parameters**

- `id` (path, required): Webhook ID.

**Request body**

**Responses**

- `200`: Webhook updated successfully
- `400`: Bad Request
- `401`: Unauthorized
- `404`: Not Found
