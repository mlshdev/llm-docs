> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/users/{user_id}/notification-prefs](https://docs.vast.ai/api-reference/notifications/update-notification-preferences)

# update notification preferences

`PUT /api/v0/users/{user_id}/notification-prefs`

Replace notification preferences for the authenticated user.

**Parameters**

- `user_id` (path, required): ID of the authenticated user.

**Request body**

**Responses**

- `200`: Notification preferences updated successfully
- `400`: Bad Request
- `401`: Unauthorized
