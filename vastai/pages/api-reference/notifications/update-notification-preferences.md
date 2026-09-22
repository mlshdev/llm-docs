> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/users/{user_id}/notification-prefs](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/api-reference/openapi.yaml%23put%20/api/v0/users/%7Buser_id%7D/notification-prefs)
> Canonical documentation: https://docs.vast.ai/api-reference/notifications/update-notification-preferences

# update notification preferences

`PUT /api/v0/users/{user_id}/notification-prefs`

Replace notification preferences for the authenticated user.

**Authentication:** `BearerAuth`

**Parameters**

- `user_id` (path; required; integer): ID of the authenticated user.

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `notification_preferences` (required; object)
      - Example: `{"client":{"low_credit":{"email":true,"webhooks":false}}}`
      - `additional properties` (object)
        - `additional properties` (object)
          - `additional properties` (boolean)
  - Example: `{"notification_preferences":{"client":{"low_credit":{"email":true,"webhooks":false}}}}`

**Responses**

- `200`: Notification preferences updated successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `notification_preferences` (object)
        - Example: `{"client":{"low_credit":{"email":true,"webhooks":false}}}`
        - `additional properties` (object)
          - `additional properties` (object)
            - `additional properties` (boolean)
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
