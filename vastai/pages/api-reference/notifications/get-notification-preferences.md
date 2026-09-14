> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/users/{user_id}/notification-prefs](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/api-reference/openapi.yaml%23get%20/api/v0/users/%7Buser_id%7D/notification-prefs)
> Canonical documentation: https://docs.vast.ai/api-reference/notifications/get-notification-preferences

# get notification preferences

`GET /api/v0/users/{user_id}/notification-prefs`

Read notification preferences for the authenticated user.

**Authentication:** `BearerAuth`

**Parameters**

- `user_id` (path; required; integer): ID of the authenticated user.

**Responses**

- `200`: Notification preferences returned successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `notification_preferences` (object)
        - Example: `{"client":{"low_credit":{"email":true,"webhooks":false}}}`
        - `additional properties` (object)
          - `additional properties` (object)
            - `additional properties` (boolean)
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
