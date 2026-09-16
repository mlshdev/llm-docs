> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/users/{user_id}/ipaddrs](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/api-reference/openapi.yaml%23get%20/api/v0/users/%7Buser_id%7D/ipaddrs)
> Canonical documentation: https://docs.vast.ai/api-reference/accounts/show-ipaddrs

# show ipaddrs

`GET /api/v0/users/{user_id}/ipaddrs`

This endpoint retrieves the history of IP address accesses for the authenticated user.

CLI Usage: `vastai show ipaddrs`

**Authentication:** `BearerAuth`

**Parameters**

- `user_id` (path; required; string): The ID of the user whose IP address history is being retrieved.
  - Example: `me`

**Responses**

- `200`: Success response with IP address history
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `results` (array)
        - `items` (object)
          - `id` (integer)
            - Example: `123`
          - `user_id` (integer)
            - Example: `456`
          - `ip_address` (string)
            - Example: `192.168.1.1`
          - `timestamp` (string; format: date-time)
            - Example: `2023-10-01T12:00:00Z`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=2.9`
