> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/users/{user_id}/notification-prefs](https://docs.vast.ai/api-reference/notifications/get-notification-preferences)

# get notification preferences

`GET /api/v0/users/{user_id}/notification-prefs`

Read notification preferences for the authenticated user.

**Parameters**

- `user_id` (path, required): ID of the authenticated user.

**Responses**

- `200`: Notification preferences returned successfully
- `401`: Unauthorized
